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
      padding: '40px 24px',
      background: theme.colors.gradientSubtle,
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: theme.colors.surface,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadow.xl,
        padding: '40px',
        border: `1px solid ${theme.colors.border}`,
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '2.5rem' }}>🎭</span>
          <h1 style={{
            fontSize: theme.typography.size['2xl'],
            fontWeight: theme.typography.weight.bold,
            color: theme.colors.textPrimary,
            marginTop: '8px',
          }}>
            Bienvenido de nuevo
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: theme.typography.size.sm, marginTop: '4px' }}>
            Entra para gestionar tus talleres
          </p>
        </div>

        <LoginForm onSubmit={handleLogin} cargando={cargando} error={error} />

        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: theme.typography.size.sm,
          color: theme.colors.textMuted,
        }}>
          ¿No tienes cuenta?{' '}
          <Link to="/signup" style={{ color: theme.colors.primary, fontWeight: theme.typography.weight.semibold }}>
            Regístrate gratis
          </Link>
        </p>
      </div>
    </main>
  )
}
