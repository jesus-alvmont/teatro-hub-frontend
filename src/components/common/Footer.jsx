import { Link } from 'react-router-dom'
import theme from '../../styles/theme'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer style={{
      background: theme.colors.textPrimary,
      color: theme.colors.textMuted,
      marginTop: 'auto',
    }}>
      <div className="container" style={{
        padding: '40px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '32px',
      }}>
        {/* Marca */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.25rem' }}>🎭</span>
            <span style={{
              color: '#fff',
              fontWeight: theme.typography.weight.bold,
              fontSize: theme.typography.size.lg,
            }}>
              TeatroHub
            </span>
          </div>
          <p style={{ fontSize: theme.typography.size.sm, lineHeight: '1.7' }}>
            Descubre y reserva talleres de teatro en Madrid.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: theme.typography.size.sm, fontWeight: theme.typography.weight.semibold }}>
            Plataforma
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[['/', 'Inicio'], ['/talleres', 'Talleres'], ['/signup', 'Regístrate']].map(([ruta, etiqueta]) => (
              <li key={ruta}>
                <Link to={ruta} style={{
                  color: theme.colors.textMuted,
                  fontSize: theme.typography.size.sm,
                  textDecoration: 'none',
                  transition: `color ${theme.transition.fast}`,
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
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
        padding: '20px 24px',
        textAlign: 'center',
        fontSize: theme.typography.size.xs,
      }}>
        <div className="container">
          © {anio} TeatroHub · Hecho con ❤️ en Madrid
        </div>
      </div>
    </footer>
  )
}
