import { Link } from 'react-router-dom'
import theme from '../../styles/theme'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer style={{
      background: theme.colors.black,
      color: theme.colors.grayLight,
      marginTop: 'auto',
    }}>
      <div className="container" style={{
        padding: `${theme.spacing['2xl']} ${theme.spacing.lg}`,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: theme.spacing.xl,
      }}>
        {/* Marca — Playfair Display, sin emoji */}
        <div>
          <span style={{
            fontFamily: theme.typography.fontFamilyDisplay,
            color: theme.colors.white,
            fontWeight: theme.typography.weights.semibold,
            fontSize: theme.typography.sizes.lg,
            display: 'block',
            marginBottom: theme.spacing.sm,
            letterSpacing: theme.typography.letterSpacing.tight,
          }}>
            TeatroHub
          </span>
          <p style={{
            fontSize: theme.typography.sizes.sm,
            lineHeight: theme.typography.lineHeights.relaxed,
          }}>
            Descubre y reserva talleres de teatro en Madrid.
          </p>
        </div>

        {/* Links de navegación */}
        <div>
          <h4 style={{
            color: theme.colors.white,
            marginBottom: theme.spacing.md,
            fontSize: theme.typography.sizes.xs,
            fontWeight: theme.typography.weights.semibold,
            letterSpacing: theme.typography.letterSpacing.widest,
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
                    color: theme.colors.grayLight,
                    fontSize: theme.typography.sizes.sm,
                    textDecoration: 'none',
                    transition: `color ${theme.transition.fast}`,
                  }}
                  onMouseEnter={e => e.target.style.color = theme.colors.white}
                  onMouseLeave={e => e.target.style.color = theme.colors.grayLight}
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
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        textAlign: 'center',
        fontSize: theme.typography.sizes.xs,
        color: '#666',
      }}>
        <div className="container">
          © {anio} TeatroHub · Madrid
        </div>
      </div>
    </footer>
  )
}
