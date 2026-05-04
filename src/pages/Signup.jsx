import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import theme from '../styles/theme'
import SignupForm from '../components/auth/SignupForm'
import { useAuth } from '../hooks/useAuth'
import { authService } from '../services/auth'

// TODO Semana 3: validación de contraseña y verificación de email
export default function Signup() {
  const { login } = useAuth()
  const navigate  = useNavigate()
  const [cargando, setCargando] = useState(false)
  const [error, setError]       = useState(null)

  const handleSignup = async (datos) => {
    setCargando(true)
    setError(null)
    try {
      await authService.signup(datos)
      // Auto-login tras registro exitoso
      await login({ email: datos.email, password: datos.password })
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
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
        borderTop: `4px solid ${theme.colors.pink}`,
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
            Únete a TeatroHub
          </h1>
          <p style={{
            color: theme.colors.textMuted,
            fontSize: theme.typography.sizes.sm,
          }}>
            Gratis · Sin tarjeta de crédito
          </p>
        </div>

        <SignupForm onSubmit={handleSignup} cargando={cargando} error={error} />

        <p style={{
          textAlign: 'center',
          marginTop: theme.spacing.lg,
          fontSize: theme.typography.sizes.sm,
          color: theme.colors.textMuted,
        }}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" style={{
            color: theme.colors.primary,
            fontWeight: theme.typography.weights.semibold,
          }}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  )
}
