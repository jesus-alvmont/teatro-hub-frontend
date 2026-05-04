import { Link } from 'react-router-dom'
import theme from '../../styles/theme'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer style={{
      background: theme.colors.black,
      color: theme.colors.textMuted,
      marginTop: 'auto',
    }}>
      <div className="container" style={{
        padding: `${theme.spacing['2xl']} ${theme.spacing.lg}`,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: theme.spacing.xl,
      }}>
        {/* Marca */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.sm,
          }}>
            <span style={{ fontSize: theme.typography.sizes.xl }}>🎭</span>
            <span style={{
              fontFamily: theme.typography.fontFamilyDisplay,
              color: theme.colors.white,
              fontWeight: theme.typography.weights.bold,
              fontSize: theme.typography.sizes.lg,
              background: theme.colors.gradientWarm,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              TeatroHub
            </span>
          </div>
          <p style={{
            fontSize: theme.typography.sizes.sm,
            lineHeight: theme.typography.lineHeights.relaxed,
          }}>
            Descubre y reserva talleres de teatro en Madrid.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{
            color: theme.colors.white,
            marginBottom: theme.spacing.md,
            fontSize: theme.typography.sizes.sm,
            fontWeight: theme.typography.weights.semibold,
            letterSpacing: theme.typography.letterSpacing.wider,
            textTransform: 'uppercase',
          }}>
            Plataforma
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['/', 'Inicio'],
              ['/talleres', 'Talleres'],
              ['/signup', 'Regístrate'],
            ].map(([ruta, etiqueta]) => (
              <li key={ruta}>
                <Link
                  to={ruta}
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: theme.typography.sizes.sm,
                    textDecoration: 'none',
                    transition: `color ${theme.transition.fast}`,
                  }}
                  onMouseEnter={e => e.target.style.color = theme.colors.accent}
                  onMouseLeave={e => e.target.style.color = theme.colors.textMuted}
                >
                  {etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        padding: `${theme.spacing.lg} ${theme.spacing.lg}`,
        textAlign: 'center',
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.grayLight,
      }}>
        <div className="container">
          © {anio} TeatroHub · Hecho con ❤️ en Madrid
        </div>
      </div>
    </footer>
  )
}
