import theme from '../../styles/theme'
import Card from '../common/Card'

// Muestra estrellas de valoración
function Estrellas({ puntuacion = 0 }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} style={{
          color: n <= puntuacion ? '#f59e0b' : theme.colors.border,
          fontSize: '1rem',
        }}>★</span>
      ))}
    </div>
  )
}

// TODO Semana 2: agregar formulario de nueva reseña
export default function ResenaCard({ resena }) {
  const { autor_nombre, puntuacion, comentario, fecha_creacion } = resena ?? {}

  const fechaFormateada = fecha_creacion
    ? new Date(fecha_creacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: theme.typography.weight.semibold, color: theme.colors.textPrimary }}>
            {autor_nombre}
          </p>
          <Estrellas puntuacion={puntuacion} />
        </div>
        <span style={{ fontSize: theme.typography.size.xs, color: theme.colors.textMuted }}>
          {fechaFormateada}
        </span>
      </div>
      <p style={{
        fontSize: theme.typography.size.sm,
        color: theme.colors.textSecondary,
        lineHeight: '1.6',
      }}>
        {comentario}
      </p>
    </Card>
  )
}
