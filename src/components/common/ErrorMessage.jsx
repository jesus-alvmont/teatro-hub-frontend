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
        gap: '16px',
        padding: '32px',
        background: theme.colors.errorBg,
        border: `1px solid ${theme.colors.error}33`,
        borderRadius: theme.radius.lg,
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '2rem' }}>⚠️</span>
      <p style={{
        color: theme.colors.error,
        fontWeight: theme.typography.weight.medium,
        fontSize: theme.typography.size.base,
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
