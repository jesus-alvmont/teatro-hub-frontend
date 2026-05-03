import { Navigate } from 'react-router-dom'
import theme from '../styles/theme'
import { useAuth } from '../hooks/useAuth'
import Card from '../components/common/Card'

// TODO Semana 3/4: mis talleres inscritos, historial y configuración de perfil
export default function Dashboard() {
  const { usuario, estaAutenticado, logout } = useAuth()

  // Ruta protegida: redirige al login si no hay sesión
  if (!estaAutenticado) return <Navigate to="/login" replace />

  return (
    <main className="container" style={{ padding: '40px 24px', flex: 1 }}>
      <h1 style={{
        fontSize: theme.typography.size['3xl'],
        fontWeight: theme.typography.weight.bold,
        color: theme.colors.textPrimary,
        marginBottom: '8px',
      }}>
        Hola, {usuario?.nombre} 👋
      </h1>
      <p style={{ color: theme.colors.textMuted, marginBottom: '40px' }}>
        Este es tu panel personal de TeatroHub.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {[
          { emoji: '🎭', titulo: 'Mis talleres', desc: 'Ver talleres en los que estás inscrito', proxima: true },
          { emoji: '❤️', titulo: 'Favoritos',    desc: 'Talleres guardados para más tarde',     proxima: true },
          { emoji: '⭐', titulo: 'Mis reseñas',  desc: 'Reseñas que has dejado',               proxima: true },
          { emoji: '👤', titulo: 'Mi perfil',    desc: 'Editar datos personales',              proxima: true },
        ].map(({ emoji, titulo, desc, proxima }) => (
          <Card key={titulo} style={{ opacity: proxima ? 0.7 : 1 }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }}>{emoji}</span>
            <h3 style={{
              fontWeight: theme.typography.weight.semibold,
              color: theme.colors.textPrimary,
              marginBottom: '6px',
            }}>
              {titulo}
            </h3>
            <p style={{ fontSize: theme.typography.size.sm, color: theme.colors.textMuted }}>
              {desc}
            </p>
            {proxima && (
              <span style={{
                display: 'inline-block',
                marginTop: '12px',
                fontSize: theme.typography.size.xs,
                color: theme.colors.primary,
                fontWeight: theme.typography.weight.medium,
              }}>
                Disponible próximamente
              </span>
            )}
          </Card>
        ))}
      </div>
    </main>
  )
}
