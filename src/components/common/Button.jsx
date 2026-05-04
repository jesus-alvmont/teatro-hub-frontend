import theme from '../../styles/theme'

const variantes = {
  primary: {
    background: theme.colors.primary,
    color: theme.colors.white,
    border: 'none',
  },
  secondary: {
    background: theme.colors.pinkXLight,
    color: theme.colors.pinkDark,
    border: 'none',
  },
  accent: {
    background: theme.colors.yellow,
    color: theme.colors.black,
    border: 'none',
  },
  green: {
    background: theme.colors.greenXLight,
    color: theme.colors.greenDark,
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: theme.colors.primary,
    border: `1.5px solid ${theme.colors.primary}`,
  },
  outlineGray: {
    background: 'transparent',
    color: theme.colors.gray,
    border: `1.5px solid ${theme.colors.border}`,
  },
  ghost: {
    background: 'transparent',
    color: theme.colors.gray,
    border: 'none',
  },
  danger: {
    background: theme.colors.red,
    color: theme.colors.white,
    border: 'none',
  },
}

const tamanos = {
  sm: { padding: '6px 14px',  fontSize: theme.typography.sizes.sm },
  md: { padding: '10px 22px', fontSize: theme.typography.sizes.base },
  lg: { padding: '13px 32px', fontSize: theme.typography.sizes.lg },
  xl: { padding: '16px 40px', fontSize: theme.typography.sizes.xl },
}

// Botón reutilizable — paleta TeatroHub v2, sin emojis ni degradados
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
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || cargando}
      className="th-btn-hover"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        fontWeight: theme.typography.weights.semibold,
        fontFamily: theme.typography.fontFamily,
        borderRadius: theme.borderRadius.md,
        cursor: disabled || cargando ? 'not-allowed' : 'pointer',
        opacity: disabled || cargando ? 0.55 : 1,
        width: fullWidth ? '100%' : 'auto',
        whiteSpace: 'nowrap',
        letterSpacing: theme.typography.letterSpacing.wide,
        ...variantes[variante],
        ...tamanos[tamano],
        ...style,
      }}
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
