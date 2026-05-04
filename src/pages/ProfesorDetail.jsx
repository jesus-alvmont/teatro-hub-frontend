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
    <div className="container" style={{
      padding: `${theme.spacing['4xl']} ${theme.spacing.lg}`,
      textAlign: 'center',
    }}>
      <p style={{
        color: theme.colors.semantic.error,
        fontSize: theme.typography.sizes.base,
      }}>
        {error ?? 'Profesor no encontrado'}
      </p>
    </div>
  )

  return (
    <main className="container" style={{
      padding: `${theme.spacing['2xl']} ${theme.spacing.lg}`,
      maxWidth: '720px',
      flex: 1,
    }}>
      <Link to="/" style={{
        color: theme.colors.textMuted,
        fontSize: theme.typography.sizes.sm,
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: theme.spacing.lg,
        transition: `color ${theme.transition.fast}`,
      }}>
        ← Volver
      </Link>

      <div style={{
        background: theme.colors.white,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.shadow.lg,
        padding: theme.spacing['2xl'],
        border: `1px solid ${theme.colors.border}`,
        borderTop: `4px solid ${theme.colors.primary}`,
        textAlign: 'center',
      }}>
        {/* Avatar con inicial — color primario sin degradado */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: theme.borderRadius.full,
          background: theme.colors.primaryXLight,
          border: `3px solid ${theme.colors.primary}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.colors.primaryDark,
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: theme.typography.sizes['3xl'],
          fontWeight: theme.typography.weights.semibold,
          margin: `0 auto ${theme.spacing.lg}`,
        }}>
          {profesor.nombre?.charAt(0).toUpperCase()}
        </div>

        <h1 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: theme.typography.sizes['2xl'],
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.textPrimary,
          marginBottom: theme.spacing.xs,
          lineHeight: theme.typography.lineHeights.tight,
        }}>
          {profesor.nombre}
        </h1>

        <p style={{
          color: theme.colors.textMuted,
          fontSize: theme.typography.sizes.base,
        }}>
          {profesor.especialidad}
        </p>
      </div>
    </main>
  )
}
