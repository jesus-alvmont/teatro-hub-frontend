import theme from '../../styles/theme'

// Spinner SVG centrado con mensaje opcional
export default function LoadingSpinner({ mensaje = 'Cargando…', fullPage = false }) {
  return (
    <div
      role="status"
      aria-label={mensaje}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.md,
        padding: theme.spacing['2xl'],
        ...(fullPage && { minHeight: '60vh' }),
      }}
    >
      <svg width="36" height="36" viewBox="0 0 40 40" style={{ animation: 'spin 0.8s linear infinite' }}>
        <circle
          cx="20" cy="20" r="16"
          fill="none"
          stroke={theme.colors.primaryXLight}
          strokeWidth="3"
        />
        <path
          d="M20 4 A16 16 0 0 1 36 20"
          fill="none"
          stroke={theme.colors.primary}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <p style={{
        color: theme.colors.textMuted,
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
      }}>
        {mensaje}
      </p>
    </div>
  )
}
