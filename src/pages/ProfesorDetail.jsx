import { useParams, Link } from 'react-router-dom'
import theme from '../styles/theme'
import LoadingSpinner from '../components/common/LoadingSpinner'
import { useProfesor } from '../hooks/useProfesores'

// TODO Semana 2: diseño completo con bio, talleres activos y reseñas
export default function ProfesorDetail() {
  const { id } = useParams()
  const { profesor, cargando, error } = useProfesor(id)

  if (cargando) return <LoadingSpinner fullPage mensaje="Cargando perfil…" />

  if (error || !profesor) return (
    <div className="container" style={{ padding: '64px 24px', textAlign: 'center' }}>
      <p style={{ color: theme.colors.error }}>{error ?? 'Profesor no encontrado'}</p>
    </div>
  )

  return (
    <main className="container" style={{ padding: '40px 24px', maxWidth: '720px' }}>
      <Link to="/" style={{
        color: theme.colors.textMuted,
        fontSize: theme.typography.size.sm,
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '24px',
      }}>
        ← Volver
      </Link>

      <div style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadow.lg,
        padding: '40px',
        border: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
      }}>
        <div style={{
          width: '96px', height: '96px',
          borderRadius: '50%',
          background: theme.colors.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          fontSize: theme.typography.size['4xl'],
          fontWeight: theme.typography.weight.bold,
          margin: '0 auto 20px',
        }}>
          {profesor.nombre?.charAt(0).toUpperCase()}
        </div>

        <h1 style={{
          fontSize: theme.typography.size['2xl'],
          fontWeight: theme.typography.weight.bold,
          color: theme.colors.textPrimary,
          marginBottom: '8px',
        }}>
          {profesor.nombre}
        </h1>
        <p style={{ color: theme.colors.textMuted, fontSize: theme.typography.size.base }}>
          {profesor.especialidad}
        </p>
      </div>
    </main>
  )
}
