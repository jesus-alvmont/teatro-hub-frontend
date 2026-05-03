import theme from '../../styles/theme'
import Button from '../common/Button'

const estiloInput = {
  width: '100%',
  padding: '12px 16px',
  border: `2px solid ${theme.colors.border}`,
  borderRadius: theme.radius.md,
  fontSize: theme.typography.size.base,
  fontFamily: theme.typography.fontFamily,
  outline: 'none',
  transition: `border-color ${theme.transition.fast}`,
}

// TODO Semana 3: conectar con authService.signup y flujo de verificación
export default function SignupForm({ onSubmit, cargando = false, error = null }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    onSubmit?.({
      nombre:   form.get('nombre'),
      email:    form.get('email'),
      password: form.get('password'),
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {error && (
        <p style={{
          color: theme.colors.error,
          background: theme.colors.errorBg,
          padding: '12px 16px',
          borderRadius: theme.radius.md,
          fontSize: theme.typography.size.sm,
        }}>
          {error}
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: theme.typography.size.sm, fontWeight: theme.typography.weight.medium }}>
          Nombre completo
        </label>
        <input type="text" name="nombre" required placeholder="María García" style={estiloInput} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: theme.typography.size.sm, fontWeight: theme.typography.weight.medium }}>
          Email
        </label>
        <input type="email" name="email" required placeholder="tu@email.com" style={estiloInput} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: theme.typography.size.sm, fontWeight: theme.typography.weight.medium }}>
          Contraseña
        </label>
        <input type="password" name="password" required placeholder="Mínimo 8 caracteres" minLength={8} style={estiloInput} />
      </div>

      <Button type="submit" variante="primary" tamano="lg" fullWidth cargando={cargando}>
        Crear cuenta
      </Button>
    </form>
  )
}
