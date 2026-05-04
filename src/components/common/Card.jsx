import theme from '../../styles/theme'

// Tarjeta base reutilizable. Variantes: 'default', 'coral', 'sage', 'gold', 'dark'
export default function Card({
  children,
  hover = false,
  onClick,
  padding = theme.spacing.lg,
  variante = 'default',
  style = {},
}) {
  const variantes = {
    default: {
      background: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
      boxShadow: theme.shadow.md,
    },
    coral: {
      background: theme.colors.backgrounds.coral,
      border: `1px solid ${theme.colors.primaryXLight}`,
      boxShadow: theme.shadow.sm,
    },
    sage: {
      background: theme.colors.backgrounds.sage,
      border: `1px solid ${theme.colors.secondaryXLight}`,
      boxShadow: theme.shadow.sm,
    },
    gold: {
      background: theme.colors.backgrounds.gold,
      border: `1px solid ${theme.colors.accentXLight}`,
      boxShadow: theme.shadow.sm,
    },
    dark: {
      background: theme.colors.black,
      border: 'none',
      boxShadow: theme.shadow.xl,
      color: theme.colors.textInverse,
    },
  }

  return (
    <div
      onClick={onClick}
      className={hover ? 'th-card-hover' : ''}
      style={{
        borderRadius: theme.borderRadius.lg,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        ...variantes[variante],
        ...style,
      }}
    >
      {children}
    </div>
  )
}
