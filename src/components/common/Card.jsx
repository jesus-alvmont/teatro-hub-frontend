import theme from '../../styles/theme'

/**
 * Tarjeta base reutilizable.
 * accentColor: color hexadecimal que pinta la barra lateral izquierda.
 * Si no se pasa, la card no tiene barra de acento.
 */
export default function Card({
  children,
  hover = false,
  onClick,
  padding = theme.spacing.lg,
  accentColor = null,
  style = {},
}) {
  return (
    <div
      onClick={onClick}
      className={hover ? 'th-card-hover' : ''}
      style={{
        background: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadow.md,
        border: `1px solid ${theme.colors.border}`,
        // Barra lateral de color como acento visual
        borderLeft: accentColor ? `4px solid ${accentColor}` : `1px solid ${theme.colors.border}`,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
