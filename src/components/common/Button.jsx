import theme from '../../styles/theme'

const variantes = {
  primary: {
    background: theme.colors.gradient,
    color: theme.colors.white,
    border: 'none',
    boxShadow: theme.shadow.primary,
  },
  secondary: {
    background: theme.colors.secondaryXLight,
    color: theme.colors.secondaryDark,
    border: 'none',
  },
  accent: {
    background: theme.colors.accent,
    color: theme.colors.black,
    border: 'none',
    boxShadow: theme.shadow.accent,
  },
  outline: {
    background: 'transparent',
    color: theme.colors.primary,
    border: `2px solid ${theme.colors.primary}`,
  },
  outlineSage: {
    background: 'transparent',
    color: theme.colors.secondary,
    border: `2px solid ${theme.colors.secondary}`,
  },
  ghost: {
    background: 'transparent',
    color: theme.colors.textSecondary,
    border: 'none',
  },
  danger: {
    background: theme.colors.semantic.error,
    color: theme.colors.white,
    border: 'none',
  },
  warm: {
    background: theme.colors.gradientWarm,
    color: theme.colors.white,
    border: 'none',
  },
}

const tamanos = {
  sm: { padding: '6px 14px',  fontSize: theme.typography.sizes.sm },
  md: { padding: '10px 22px', fontSize: theme.typography.sizes.base },
  lg: { padding: '14px 32px', fontSize: theme.typography.sizes.lg },
  xl: { padding: '18px 40px', fontSize: theme.typography.sizes.xl },
}

// Botón reutilizable con variantes de la paleta TeatroHub, tamaños y estado de carga
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
    gap: theme.spacing.sm,
    fontWeight: theme.typography.weights.semibold,
    fontFamily: theme.typography.fontFamily,
    borderRadius: theme.borderRadius.md,
    cursor: disabled || cargando ? 'not-allowed' : 'pointer',
    opacity: disabled || cargando ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: `all ${theme.transition.fast}`,
    whiteSpace: 'nowrap',
    letterSpacing: theme.typography.letterSpacing.wide,
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
          width: '14px',
          height: '14px',
          border: '2px solid currentColor',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 0.7s linear infinite',
          flexShrink: 0,
        }} />
      )}
      {children}
    </button>
  )
}
