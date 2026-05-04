import theme from '../../styles/theme'
import Button from './Button'

// Mensaje de error con opción de reintentar
export default function ErrorMessage({ mensaje, onReintentar }) {
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.md,
        padding: theme.spacing.xl,
        background: theme.colors.semantic.errorBg,
        border: `1px solid ${theme.colors.semantic.errorBorder}`,
        borderRadius: theme.borderRadius.lg,
        textAlign: 'center',
      }}
    >
      <p style={{
        color: theme.colors.semantic.error,
        fontWeight: theme.typography.weights.semibold,
        fontSize: theme.typography.sizes.base,
      }}>
        {mensaje}
      </p>
      {onReintentar && (
        <Button variante="outline" tamano="sm" onClick={onReintentar}>
          Reintentar
        </Button>
      )}
    </div>
  )
}
