import theme from '../../styles/theme'

const variantes = {
  primary: {
    background: theme.colors.gradient,
    color: '#fff',
    border: 'none',
  },
  secondary: {
    background: theme.colors.primaryXLight,
    color: theme.colors.primary,
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: theme.colors.primary,
    border: `2px solid ${theme.colors.primary}`,
  },
  ghost: {
    background: 'transparent',
    color: theme.colors.textSecondary,
    border: 'none',
  },
  danger: {
    background: theme.colors.error,
    color: '#fff',
    border: 'none',
  },
}

const tamanos = {
  sm: { padding: '6px 14px',  fontSize: theme.typography.size.sm },
  md: { padding: '10px 22px', fontSize: theme.typography.size.base },
  lg: { padding: '14px 32px', fontSize: theme.typography.size.lg },
}

// Botón reutilizable con variantes, tamaños y estado de carga
export default function Button({
  children,
  variante = 'primary',
  tamano = 'md',
  cargando = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style = {},
}) {
  const estiloBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: theme.typography.weight.semibold,
    borderRadius: theme.radius.md,
    cursor: disabled || cargando ? 'not-allowed' : 'pointer',
    opacity: disabled || cargando ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: `all ${theme.transition.fast}`,
    whiteSpace: 'nowrap',
    ...variantes[variante],
    ...tamanos[tamano],
    ...style,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || cargando}
      className="th-btn-hover"
      style={estiloBase}
    >
      {cargando && (
        <span style={{
          width: '14px', height: '14px',
          border: '2px solid currentColor',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 0.7s linear infinite',
        }} />
      )}
      {children}
    </button>
  )
}
