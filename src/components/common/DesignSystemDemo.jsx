import theme from '../../styles/theme'
import Button from './Button'
import Card from './Card'
import Badge from './Badge'

// ─── Helpers locales de visualización ──────────────────────────────────────────

function Sección({ título, children }) {
  return (
    <section style={{ marginBottom: theme.spacing['3xl'] }}>
      <h2 style={{
        fontFamily: theme.typography.fontFamilyDisplay,
        fontSize: theme.typography.sizes['2xl'],
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.lg,
        paddingBottom: theme.spacing.sm,
        borderBottom: `2px solid ${theme.colors.border}`,
      }}>
        {título}
      </h2>
      {children}
    </section>
  )
}

function Muestra({ etiqueta, children }) {
  return (
    <div style={{ marginBottom: theme.spacing.md }}>
      <p style={{
        fontSize: theme.typography.sizes.xs,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textMuted,
        letterSpacing: theme.typography.letterSpacing.widest,
        textTransform: 'uppercase',
        marginBottom: theme.spacing.xs,
      }}>
        {etiqueta}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm, alignItems: 'center' }}>
        {children}
      </div>
    </div>
  )
}

// Chip de color para la paleta
function ColorChip({ nombre, hex, textoDark = false }) {
  return (
    <div style={{ textAlign: 'center', width: '80px' }}>
      <div style={{
        width: '80px',
        height: '56px',
        borderRadius: theme.borderRadius.md,
        background: hex,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.xs,
        marginBottom: '6px',
      }} />
      <p style={{
        fontSize: '10px',
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textSecondary,
        lineHeight: 1.3,
      }}>
        {nombre}
      </p>
      <p style={{
        fontSize: '10px',
        color: theme.colors.textMuted,
        fontFamily: 'monospace',
      }}>
        {hex}
      </p>
    </div>
  )
}

// ─── Componente principal ───────────────────────────────────────────────────────

export default function DesignSystemDemo() {
  return (
    <div style={{
      fontFamily: theme.typography.fontFamily,
      background: theme.colors.backgrounds.coral,
      minHeight: '100vh',
      padding: `${theme.spacing['3xl']} ${theme.spacing.lg}`,
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Encabezado */}
        <header style={{ marginBottom: theme.spacing['4xl'], textAlign: 'center' }}>
          <h1 style={{
            fontFamily: theme.typography.fontFamilyDisplay,
            fontSize: theme.typography.sizes['5xl'],
            fontWeight: theme.typography.weights.bold,
            background: theme.colors.gradientWarm,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: theme.spacing.sm,
          }}>
            TeatroHub Design System
          </h1>
          <p style={{
            fontSize: theme.typography.sizes.lg,
            color: theme.colors.textSecondary,
          }}>
            Paleta · Tipografía · Componentes · Tokens
          </p>
        </header>

        {/* ── Colores ──────────────────────────────────────────────────────────── */}
        <Sección título="Paleta de colores">
          <Muestra etiqueta="Primario — Rojo Coral">
            <ColorChip nombre="Primary"       hex={theme.colors.primary} />
            <ColorChip nombre="Light"         hex={theme.colors.primaryLight} />
            <ColorChip nombre="Dark"          hex={theme.colors.primaryDark} />
            <ColorChip nombre="X-Light"       hex={theme.colors.primaryXLight} />
          </Muestra>

          <Muestra etiqueta="Secundario — Verde Salvia">
            <ColorChip nombre="Secondary"     hex={theme.colors.secondary} />
            <ColorChip nombre="Light"         hex={theme.colors.secondaryLight} />
            <ColorChip nombre="Dark"          hex={theme.colors.secondaryDark} />
            <ColorChip nombre="X-Light"       hex={theme.colors.secondaryXLight} />
          </Muestra>

          <Muestra etiqueta="Accent — Amarillo Dorado">
            <ColorChip nombre="Accent"        hex={theme.colors.accent} />
            <ColorChip nombre="Bright"        hex={theme.colors.accentBright} />
            <ColorChip nombre="Dark"          hex={theme.colors.accentDark} />
            <ColorChip nombre="X-Light"       hex={theme.colors.accentXLight} />
          </Muestra>

          <Muestra etiqueta="Fondos suaves">
            <ColorChip nombre="Coral BG"      hex={theme.colors.backgrounds.coral} />
            <ColorChip nombre="Sage BG"       hex={theme.colors.backgrounds.sage} />
            <ColorChip nombre="Gold BG"       hex={theme.colors.backgrounds.gold} />
            <ColorChip nombre="White"         hex={theme.colors.white} />
          </Muestra>

          <Muestra etiqueta="Neutrales">
            <ColorChip nombre="Black"         hex={theme.colors.black} />
            <ColorChip nombre="Gray"          hex={theme.colors.gray} />
            <ColorChip nombre="Gray Light"    hex={theme.colors.grayLight} />
            <ColorChip nombre="Beige"         hex={theme.colors.beige} />
          </Muestra>
        </Sección>

        {/* ── Tipografía ────────────────────────────────────────────────────────── */}
        <Sección título="Tipografía">
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
            {[
              { label: '5xl — Hero',   size: theme.typography.sizes['5xl'],  font: theme.typography.fontFamilyDisplay, text: 'Teatro que transforma' },
              { label: '3xl — Display',size: theme.typography.sizes['3xl'],  font: theme.typography.fontFamilyDisplay, text: 'Talleres de actuación' },
              { label: '2xl — Título', size: theme.typography.sizes['2xl'],  font: theme.typography.fontFamily,        text: 'Descubre tu vocación' },
              { label: 'xl — Sección', size: theme.typography.sizes.xl,     font: theme.typography.fontFamily,        text: 'Próximos talleres disponibles' },
              { label: 'lg — Subtítulo',size: theme.typography.sizes.lg,    font: theme.typography.fontFamily,        text: 'Teatro, danza y expresión corporal' },
              { label: 'base — Cuerpo',size: theme.typography.sizes.base,   font: theme.typography.fontFamily,        text: 'El teatro es una disciplina que desarrolla habilidades de comunicación.' },
              { label: 'sm — Secundario',size: theme.typography.sizes.sm,   font: theme.typography.fontFamily,        text: 'Texto secundario para metadatos y descripciones.' },
              { label: 'xs — Label',   size: theme.typography.sizes.xs,     font: theme.typography.fontFamily,        text: 'ETIQUETA · METADATO · CATEGORÍA' },
            ].map(({ label, size, font, text }) => (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: theme.spacing.lg,
                paddingBottom: theme.spacing.sm,
                borderBottom: `1px solid ${theme.colors.borderSubtle}`,
              }}>
                <span style={{
                  minWidth: '120px',
                  fontSize: theme.typography.sizes.xs,
                  color: theme.colors.textMuted,
                  fontFamily: 'monospace',
                  flexShrink: 0,
                }}>
                  {label}
                </span>
                <p style={{ fontFamily: font, fontSize: size, color: theme.colors.textPrimary, lineHeight: 1.3 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Sección>

        {/* ── Botones ───────────────────────────────────────────────────────────── */}
        <Sección título="Botones">
          <Muestra etiqueta="Variantes">
            <Button variante="primary">Reservar taller</Button>
            <Button variante="secondary">Ver más</Button>
            <Button variante="accent">⭐ Destacado</Button>
            <Button variante="outline">Contactar</Button>
            <Button variante="outlineSage">Explorar</Button>
            <Button variante="ghost">Cancelar</Button>
            <Button variante="warm">Únete ahora</Button>
            <Button variante="danger">Eliminar</Button>
          </Muestra>

          <Muestra etiqueta="Tamaños">
            <Button tamano="sm">Pequeño</Button>
            <Button tamano="md">Mediano</Button>
            <Button tamano="lg">Grande</Button>
            <Button tamano="xl">Extra grande</Button>
          </Muestra>

          <Muestra etiqueta="Estados">
            <Button cargando>Cargando...</Button>
            <Button disabled>Deshabilitado</Button>
          </Muestra>
        </Sección>

        {/* ── Badges ────────────────────────────────────────────────────────────── */}
        <Sección título="Badges">
          <Muestra etiqueta="Semánticos">
            <Badge color="success">Disponible</Badge>
            <Badge color="error">Completo</Badge>
            <Badge color="warning">Últimos lugares</Badge>
            <Badge color="info">Nuevo</Badge>
          </Muestra>

          <Muestra etiqueta="Paleta principal">
            <Badge color="primary">Teatro</Badge>
            <Badge color="secondary">Danza</Badge>
            <Badge color="accent">⭐ Premium</Badge>
            <Badge color="dark">Exclusivo</Badge>
            <Badge color="default">General</Badge>
          </Muestra>

          <Muestra etiqueta="Niveles de taller">
            <Badge nivel="principiante">Principiante</Badge>
            <Badge nivel="intermedio">Intermedio</Badge>
            <Badge nivel="avanzado">Avanzado</Badge>
          </Muestra>

          <Muestra etiqueta="Tamaños">
            <Badge color="primary" size="xs">XS</Badge>
            <Badge color="primary" size="sm">SM</Badge>
            <Badge color="primary" size="md">MD</Badge>
          </Muestra>
        </Sección>

        {/* ── Cards ─────────────────────────────────────────────────────────────── */}
        <Sección título="Cards">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: theme.spacing.lg,
          }}>
            {[
              { variante: 'default', label: 'Default', desc: 'Blanco con sombra suave. Uso general.' },
              { variante: 'coral',   label: 'Coral',   desc: 'Fondo cálido. Secciones principales.' },
              { variante: 'sage',    label: 'Sage',    desc: 'Fondo verde. Secciones de apoyo.' },
              { variante: 'gold',    label: 'Gold',    desc: 'Fondo dorado. Destacados premium.' },
              { variante: 'dark',    label: 'Dark',    desc: 'Oscuro. Hero y CTAs de alto impacto.' },
            ].map(({ variante, label, desc }) => (
              <Card key={variante} variante={variante} hover>
                <p style={{
                  fontWeight: theme.typography.weights.semibold,
                  marginBottom: theme.spacing.xs,
                  color: variante === 'dark' ? theme.colors.white : theme.colors.textPrimary,
                }}>
                  {label}
                </p>
                <p style={{
                  fontSize: theme.typography.sizes.sm,
                  color: variante === 'dark' ? 'rgba(255,255,255,0.7)' : theme.colors.textSecondary,
                }}>
                  {desc}
                </p>
              </Card>
            ))}
          </div>
        </Sección>

        {/* ── Espaciado ─────────────────────────────────────────────────────────── */}
        <Sección título="Espaciado">
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
            {Object.entries(theme.spacing).map(([key, val]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <span style={{
                  minWidth: '40px',
                  fontFamily: 'monospace',
                  fontSize: theme.typography.sizes.sm,
                  color: theme.colors.textMuted,
                }}>
                  {key}
                </span>
                <div style={{
                  height: '20px',
                  width: val,
                  background: theme.colors.gradientWarm,
                  borderRadius: theme.borderRadius.sm,
                  minWidth: '4px',
                }} />
                <span style={{
                  fontSize: theme.typography.sizes.sm,
                  color: theme.colors.textSecondary,
                  fontFamily: 'monospace',
                }}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        </Sección>

        {/* ── Sombras ───────────────────────────────────────────────────────────── */}
        <Sección título="Sombras">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.xl }}>
            {Object.entries(theme.shadow).map(([key, val]) => (
              <div key={key} style={{
                width: '120px',
                height: '80px',
                background: theme.colors.surface,
                borderRadius: theme.borderRadius.lg,
                boxShadow: val,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: theme.typography.sizes.xs,
                  color: theme.colors.textMuted,
                }}>
                  {key}
                </span>
              </div>
            ))}
          </div>
        </Sección>

        {/* Pie */}
        <footer style={{
          textAlign: 'center',
          padding: `${theme.spacing.xl} 0`,
          borderTop: `1px solid ${theme.colors.border}`,
          color: theme.colors.textMuted,
          fontSize: theme.typography.sizes.sm,
        }}>
          TeatroHub Design System · Paleta Coral · Salvia · Dorado
        </footer>
      </div>
    </div>
  )
}
