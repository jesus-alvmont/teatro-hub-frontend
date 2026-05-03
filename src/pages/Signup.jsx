import { Link, useNavigate } from 'react-router-dom'
import theme from '../styles/theme'
import SignupForm from '../components/auth/SignupForm'
import { useAuth } from '../hooks/useAuth'
import { authService } from '../services/auth'
import { useState } from 'react'

// TODO Semana 3: validación de contraseña y verificación de email
export default function Signup() {
  const { login } = useAuth()
  const navigate = useNavigate()
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
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '2.5rem' }}>🎭</span>
          <h1 style={{
            fontSize: theme.typography.size['2xl'],
            fontWeight: theme.typography.weight.bold,
            color: theme.colors.textPrimary,
            marginTop: '8px',
          }}>
            Únete a TeatroHub
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: theme.typography.size.sm, marginTop: '4px' }}>
            Gratis · Sin tarjeta de crédito
          </p>
        </div>

        <SignupForm onSubmit={handleSignup} cargando={cargando} error={error} />

        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: theme.typography.size.sm,
          color: theme.colors.textMuted,
        }}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" style={{ color: theme.colors.primary, fontWeight: theme.typography.weight.semibold }}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  )
}
