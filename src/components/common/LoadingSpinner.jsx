import theme from '../../styles/theme'

// Spinner centrado con mensaje opcional
export default function LoadingSpinner({ mensaje = 'Cargando…', fullPage = false }) {
  const contenedor = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '48px',
    ...(fullPage && { minHeight: '60vh' }),
  }

  return (
    <div style={contenedor} role="status" aria-label={mensaje}>
      <svg
        width="40" height="40"
        viewBox="0 0 40 40"
        style={{ animation: 'spin 0.8s linear infinite' }}
      >
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
        fontSize: theme.typography.size.sm,
        fontWeight: theme.typography.weight.medium,
      }}>
        {mensaje}
      </p>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
