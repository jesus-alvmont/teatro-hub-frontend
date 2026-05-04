import theme from '../../styles/theme'
import Button from '../common/Button'

const estiloInput = {
  width: '100%',
  padding: '11px 14px',
  border: `1.5px solid ${theme.colors.border}`,
  borderRadius: theme.borderRadius.md,
  fontSize: theme.typography.sizes.base,
  fontFamily: theme.typography.fontFamily,
  color: theme.colors.textPrimary,
  background: theme.colors.white,
  outline: 'none',
  transition: `border-color ${theme.transition.fast}`,
}

// TODO Semana 3: conectar con AuthContext.login y redirección post-login
export default function LoginForm({ onSubmit, cargando = false, error = null }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    onSubmit?.({ email: form.get('email'), password: form.get('password') })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.lg }}>
      {error && (
        <p style={{
          color: theme.colors.semantic.error,
          background: theme.colors.semantic.errorBg,
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.borderRadius.md,
          fontSize: theme.typography.sizes.sm,
          border: `1px solid ${theme.colors.semantic.errorBorder}`,
        }}>
          {error}
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{
          fontSize: theme.typography.sizes.xs,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: theme.typography.letterSpacing.widest,
        }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          style={estiloInput}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{
          fontSize: theme.typography.sizes.xs,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: theme.typography.letterSpacing.widest,
        }}>
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          required
          placeholder="••••••••"
          style={estiloInput}
        />
      </div>

      <Button type="submit" variante="primary" tamano="lg" fullWidth cargando={cargando}>
        Entrar
      </Button>
    </form>
  )
}
