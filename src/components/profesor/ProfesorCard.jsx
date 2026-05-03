import theme from '../../styles/theme'
import Card from '../common/Card'

// TODO Semana 2: expandir con bio completa, talleres activos y valoración media
export default function ProfesorCard({ profesor }) {
  const { nombre, especialidad, foto_url } = profesor ?? {}

  return (
    <Card hover style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '56px', height: '56px',
        borderRadius: '50%',
        background: theme.colors.gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: theme.typography.weight.bold,
        fontSize: theme.typography.size.xl,
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        {foto_url
          ? <img src={foto_url} alt={nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : nombre?.charAt(0).toUpperCase()
        }
      </div>
      <div>
        <h4 style={{ fontWeight: theme.typography.weight.semibold, color: theme.colors.textPrimary }}>
          {nombre}
        </h4>
        <p style={{ fontSize: theme.typography.size.sm, color: theme.colors.textMuted }}>
          {especialidad}
        </p>
      </div>
    </Card>
  )
}
