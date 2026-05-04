import { Navigate } from 'react-router-dom'
import theme from '../styles/theme'
import { useAuth } from '../hooks/useAuth'
import Card from '../components/common/Card'

// Colores de las cards del dashboard — uno por cada sección
const SECCIONES = [
  { color: '#7B68A6', titulo: 'Mis talleres',  desc: 'Ver talleres en los que estás inscrito' },
  { color: '#E89BB5', titulo: 'Favoritos',     desc: 'Talleres guardados para más tarde' },
  { color: '#F4D03F', titulo: 'Mis reseñas',   desc: 'Reseñas que has dejado' },
  { color: '#6B8C7E', titulo: 'Mi perfil',     desc: 'Editar datos personales' },
]

// TODO Semana 3/4: mis talleres inscritos, historial y configuración de perfil
export default function Dashboard() {
  const { usuario, estaAutenticado } = useAuth()

  // Ruta protegida: redirige al login si no hay sesión
  if (!estaAutenticado) return <Navigate to="/login" replace />

  return (
    <main className="container" style={{ padding: `${theme.spacing['2xl']} ${theme.spacing.lg}`, flex: 1 }}>
      {/* Saludo — sin emoji */}
      <div style={{ marginBottom: theme.spacing['2xl'] }}>
        <h1 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: theme.typography.sizes['3xl'],
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.textPrimary,
          marginBottom: theme.spacing.xs,
          lineHeight: theme.typography.lineHeights.tight,
        }}>
          Hola, {usuario?.nombre}
        </h1>
        <p style={{
          color: theme.colors.textMuted,
          fontSize: theme.typography.sizes.base,
        }}>
          Este es tu panel personal de TeatroHub.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: theme.spacing.lg,
      }}>
        {SECCIONES.map(({ color, titulo, desc }) => (
          <Card key={titulo} accentColor={color} style={{ opacity: 0.75 }}>
            {/* Punto de color como identificador visual en lugar de emoji */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: theme.borderRadius.md,
              background: color + '22',
              border: `2px solid ${color}`,
              marginBottom: theme.spacing.sm,
            }} />
            <h3 style={{
              fontWeight: theme.typography.weights.semibold,
              color: theme.colors.textPrimary,
              fontSize: theme.typography.sizes.base,
              marginBottom: theme.spacing.xs,
            }}>
              {titulo}
            </h3>
            <p style={{
              fontSize: theme.typography.sizes.sm,
              color: theme.colors.textMuted,
              lineHeight: theme.typography.lineHeights.relaxed,
            }}>
              {desc}
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: theme.spacing.sm,
              fontSize: theme.typography.sizes.xs,
              color,
              fontWeight: theme.typography.weights.semibold,
              letterSpacing: theme.typography.letterSpacing.wide,
            }}>
              Próximamente
            </span>
          </Card>
        ))}
      </div>
    </main>
  )
}
