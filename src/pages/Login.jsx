import { Link, useNavigate } from 'react-router-dom'
import theme from '../styles/theme'
import LoginForm from '../components/auth/LoginForm'
import { useAuth } from '../hooks/useAuth'

// TODO Semana 3: redirección post-login a la ruta solicitada (useLocation state)
export default function Login() {
  const { login, cargando, error } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (credenciales) => {
    try {
      await login(credenciales)
      navigate('/')
    } catch {
      // El error se maneja en AuthContext y se expone via `error`
    }
  }

  return (
    <main style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${theme.spacing['3xl']} ${theme.spacing.lg}`,
      background: theme.colors.white,
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: theme.colors.white,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.shadow.xl,
        padding: theme.spacing['2xl'],
        border: `1px solid ${theme.colors.border}`,
        borderTop: `4px solid ${theme.colors.primary}`,
      }}>
        {/* Encabezado */}
        <div style={{ marginBottom: theme.spacing.xl }}>
          <h1 style={{
            fontFamily: theme.typography.fontFamilyDisplay,
            fontSize: theme.typography.sizes['2xl'],
            fontWeight: theme.typography.weights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.xs,
            lineHeight: theme.typography.lineHeights.tight,
          }}>
            Bienvenido de nuevo
          </h1>
          <p style={{
            color: theme.colors.textMuted,
            fontSize: theme.typography.sizes.sm,
          }}>
            Entra para gestionar tus talleres
          </p>
        </div>

        <LoginForm onSubmit={handleLogin} cargando={cargando} error={error} />

        <p style={{
          textAlign: 'center',
          marginTop: theme.spacing.lg,
          fontSize: theme.typography.sizes.sm,
          color: theme.colors.textMuted,
        }}>
          ¿No tienes cuenta?{' '}
          <Link to="/signup" style={{
            color: theme.colors.primary,
            fontWeight: theme.typography.weights.semibold,
          }}>
            Regístrate gratis
          </Link>
        </p>
      </div>
    </main>
  )
}
