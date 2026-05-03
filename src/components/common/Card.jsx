import theme from '../../styles/theme'

// Tarjeta base reutilizable con hover opcional
export default function Card({
  children,
  hover = false,
  onClick,
  padding = '24px',
  style = {},
}) {
  return (
    <div
      onClick={onClick}
      className={hover ? 'th-card-hover' : ''}
      style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.md,
        border: `1px solid ${theme.colors.border}`,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
