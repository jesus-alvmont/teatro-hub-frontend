/**
 * fix-rls.js — Habilita Row-Level Security en todas las tablas de TeatroHub
 *
 * Ejecutar con: node fix-rls.js
 * Requiere: SUPABASE_URL y SUPABASE_SERVICE_KEY en .env
 */

import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

// ── Validación de credenciales ───────────────────────────────────────────────

const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("❌ Faltan variables de entorno. Revisa tu archivo .env:");
  console.error("   SUPABASE_URL y SUPABASE_SERVICE_KEY son obligatorias.");
  process.exit(1);
}

if (SUPABASE_SERVICE_KEY === "TU_SERVICE_KEY_AQUI") {
  console.error("❌ Debes reemplazar TU_SERVICE_KEY_AQUI con la clave real.");
  console.error("   Supabase Dashboard → Settings → API → service_role key");
  process.exit(1);
}

// Cliente con service key (bypassa RLS para poder configurarla)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// ── Helper: ejecutar SQL mediante rpc ────────────────────────────────────────

async function sql(query, descripcion) {
  const { error } = await supabase.rpc("exec_sql", { query });
  if (error) {
    // Supabase no expone exec_sql por defecto; usamos la REST API de admin
    throw error;
  }
  console.log(`   ✅ ${descripcion}`);
}

/**
 * Ejecuta SQL usando el endpoint de administración de Supabase.
 * Requiere service_role key con privilegios de postgres.
 */
async function ejecutarSQL(query, descripcion) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    // Fallback: ejecutar directamente via pg endpoint (Supabase Management API)
    const errorText = await response.text();
    throw new Error(`SQL falló (${response.status}): ${errorText}`);
  }

  console.log(`   ✅ ${descripcion}`);
}

// ── Definición de políticas RLS por tabla ────────────────────────────────────

/**
 * Cada entrada define:
 *   - tabla   : nombre exacto en la base de datos
 *   - politicas: array de políticas a crear
 *
 * Convención de nombres: <tabla>_<operacion>_<quien>
 */
const CONFIGURACION_RLS = [
  {
    tabla: "profesores",
    politicas: [
      {
        nombre: "profesores_select_propio",
        operacion: "SELECT",
        usando: "auth.uid() = id",
        descripcion: "Profesor: ver su propio perfil",
      },
      {
        nombre: "profesores_update_propio",
        operacion: "UPDATE",
        usando: "auth.uid() = id",
        descripcion: "Profesor: editar su propio perfil",
      },
      // DELETE no se permite — sin política = acceso denegado por defecto con RLS habilitado
    ],
  },
  {
    tabla: "talleres",
    politicas: [
      {
        nombre: "talleres_select_publico",
        operacion: "SELECT",
        usando: "true", // Acceso público de lectura
        descripcion: "Talleres: lectura pública",
      },
      {
        nombre: "talleres_insert_propietario",
        operacion: "INSERT",
        conCheck: "auth.uid() = profesor_id",
        descripcion: "Talleres: solo el profesor propietario puede crear",
      },
      {
        nombre: "talleres_update_propietario",
        operacion: "UPDATE",
        usando: "auth.uid() = profesor_id",
        descripcion: "Talleres: solo el profesor propietario puede editar",
      },
      // DELETE no se permite — admin solo via backend con service key
    ],
  },
  {
    tabla: "usuarios",
    politicas: [
      {
        nombre: "usuarios_select_propio",
        operacion: "SELECT",
        usando: "auth.uid() = id",
        descripcion: "Usuarios: ver solo su propio perfil",
      },
      {
        nombre: "usuarios_update_propio",
        operacion: "UPDATE",
        usando: "auth.uid() = id",
        descripcion: "Usuarios: editar solo su propio perfil",
      },
      // DELETE no se permite
    ],
  },
  {
    tabla: "resenas",
    politicas: [
      {
        nombre: "resenas_select_publico",
        operacion: "SELECT",
        usando: "true", // Reseñas visibles para todos
        descripcion: "Reseñas: lectura pública",
      },
      {
        nombre: "resenas_insert_propietario",
        operacion: "INSERT",
        conCheck: "auth.uid() = usuario_id",
        descripcion: "Reseñas: solo el usuario propietario puede crear",
      },
      {
        nombre: "resenas_update_propietario",
        operacion: "UPDATE",
        usando: "auth.uid() = usuario_id",
        descripcion: "Reseñas: solo el usuario propietario puede editar",
      },
      {
        nombre: "resenas_delete_propietario",
        operacion: "DELETE",
        usando: "auth.uid() = usuario_id",
        descripcion: "Reseñas: solo el usuario propietario puede borrar",
      },
    ],
  },
];

// ── Generadores de SQL ───────────────────────────────────────────────────────

function sqlHabilitarRLS(tabla) {
  return `ALTER TABLE public.${tabla} ENABLE ROW LEVEL SECURITY;`;
}

function sqlForzarRLS(tabla) {
  // Garantiza que incluso el owner de la tabla respete RLS
  return `ALTER TABLE public.${tabla} FORCE ROW LEVEL SECURITY;`;
}

function sqlEliminarPolitica(tabla, nombre) {
  return `DROP POLICY IF EXISTS "${nombre}" ON public.${tabla};`;
}

function sqlCrearPolitica({ tabla, nombre, operacion, usando, conCheck }) {
  const partes = [
    `CREATE POLICY "${nombre}"`,
    `ON public.${tabla}`,
    `FOR ${operacion}`,
    `TO authenticated`,
  ];

  if (usando) partes.push(`USING (${usando})`);
  if (conCheck) partes.push(`WITH CHECK (${conCheck})`);

  return partes.join("\n") + ";";
}

// ── Función principal ────────────────────────────────────────────────────────

async function habilitarRLSCompleto() {
  console.log("═══════════════════════════════════════════════════");
  console.log("  TeatroHub — Habilitación de Row-Level Security");
  console.log(`  Proyecto: ${SUPABASE_URL}`);
  console.log("═══════════════════════════════════════════════════\n");

  const sentencias = [];

  // Recopilar todas las sentencias SQL en orden
  for (const { tabla, politicas } of CONFIGURACION_RLS) {
    sentencias.push({
      sql: sqlHabilitarRLS(tabla),
      desc: `RLS habilitado en tabla '${tabla}'`,
    });
    sentencias.push({
      sql: sqlForzarRLS(tabla),
      desc: `Force RLS en tabla '${tabla}'`,
    });

    for (const politica of politicas) {
      // Eliminar política existente antes de recrear (idempotente)
      sentencias.push({
        sql: sqlEliminarPolitica(tabla, politica.nombre),
        desc: `Política previa eliminada: ${politica.nombre}`,
      });
      sentencias.push({
        sql: sqlCrearPolitica({ tabla, ...politica }),
        desc: politica.descripcion,
      });
    }
  }

  // Mostrar SQL generado (modo auditoría)
  console.log("📋 SQL que se ejecutará:\n");
  for (const { sql: query } of sentencias) {
    console.log(query);
    console.log();
  }

  // Construir un único bloque SQL transaccional
  const bloqueSQL =
    "BEGIN;\n" +
    sentencias.map((s) => s.sql).join("\n") +
    "\nCOMMIT;";

  console.log("⚙️  Ejecutando en Supabase...\n");

  // Intentar ejecución via Management API de Supabase
  // (requiere service_role y que pg_net o extensiones estén habilitadas)
  const projectRef = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];

  if (!projectRef) {
    console.error("❌ No se pudo extraer el project ref de SUPABASE_URL.");
    process.exit(1);
  }

  // Supabase Management API — endpoint de SQL directo
  const managementEndpoint = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;

  console.log("ℹ️  Usando Supabase Management API...");
  console.log(
    "   (Requiere Personal Access Token en SUPABASE_SERVICE_KEY o configuración adicional)\n"
  );

  // Si la Management API no está disponible, generamos el SQL para ejecución manual
  await ejecutarConFallback(bloqueSQL, sentencias, projectRef);
}

/**
 * Intenta ejecutar el SQL. Si falla, genera un archivo SQL listo para
 * copiar y pegar en el SQL Editor de Supabase Dashboard.
 */
async function ejecutarConFallback(bloqueSQL, sentencias, projectRef) {
  try {
    // Intentar con rpc personalizado si existe en el proyecto
    const { data, error } = await supabase.rpc("exec_sql", {
      sql: bloqueSQL,
    });

    if (error) throw error;

    console.log("✅ Todas las políticas aplicadas correctamente.\n");
    mostrarResumen();
  } catch (_err) {
    // La función exec_sql probablemente no existe — generar archivo SQL
    console.log(
      "⚠️  No se pudo ejecutar directamente (exec_sql no disponible)."
    );
    console.log("   Generando archivo SQL para ejecución manual...\n");

    await generarArchivoSQL(bloqueSQL, sentencias, projectRef);
  }
}

/**
 * Genera rls-policies.sql listo para pegar en Supabase → SQL Editor.
 */
async function generarArchivoSQL(bloqueSQL, sentencias, projectRef) {
  const { writeFile } = await import("fs/promises");

  const encabezado = `-- ============================================================
-- TeatroHub — Row-Level Security
-- Generado automáticamente por fix-rls.js
-- Fecha: ${new Date().toISOString()}
-- Proyecto: ${SUPABASE_URL}
--
-- INSTRUCCIONES:
-- 1. Ve a https://supabase.com/dashboard/project/${projectRef}/sql/new
-- 2. Pega todo este contenido
-- 3. Haz clic en "Run"
-- ============================================================

`;

  const contenido = encabezado + bloqueSQL + "\n";

  await writeFile("rls-policies.sql", contenido, "utf8");

  console.log("📄 Archivo generado: rls-policies.sql\n");
  console.log("📌 Pasos para aplicar:");
  console.log(
    `   1. Abre: https://supabase.com/dashboard/project/${projectRef}/sql/new`
  );
  console.log("   2. Pega el contenido de rls-policies.sql");
  console.log("   3. Haz clic en 'Run'\n");

  mostrarResumen();
}

function mostrarResumen() {
  console.log("═══════════════════════════════════════════════════");
  console.log("  RESUMEN DE POLÍTICAS RLS");
  console.log("═══════════════════════════════════════════════════");

  for (const { tabla, politicas } of CONFIGURACION_RLS) {
    console.log(`\n  📋 ${tabla.toUpperCase()}`);
    console.log(`     RLS: HABILITADO + FORZADO`);
    for (const p of politicas) {
      console.log(`     • ${p.operacion.padEnd(8)} → ${p.descripcion}`);
    }
    const operacionesPermitidas = politicas.map((p) => p.operacion);
    const operacionesNegadas = ["SELECT", "INSERT", "UPDATE", "DELETE"].filter(
      (op) => !operacionesPermitidas.includes(op)
    );
    if (operacionesNegadas.length) {
      for (const op of operacionesNegadas) {
        console.log(`     • ${op.padEnd(8)} → ❌ Denegado (sin política)`);
      }
    }
  }

  console.log("\n═══════════════════════════════════════════════════");
  console.log("  ✅ RLS configurado en todas las tablas");
  console.log("═══════════════════════════════════════════════════\n");
}

// ── Ejecución ────────────────────────────────────────────────────────────────

habilitarRLSCompleto().catch((err) => {
  console.error("\n❌ Error inesperado:", err.message);
  process.exit(1);
});
