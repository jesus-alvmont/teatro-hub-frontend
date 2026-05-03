import { useNavigate } from 'react-router-dom'
import theme from '../../styles/theme'
import Card from '../common/Card'
import Badge from '../common/Badge'
import { formatPrecio, truncarTexto, calcularOcupacion } from '../../utils/helpers'

// Barra de progreso para ocupación de plazas
function BarraOcupacion({ disponibles, total }) {
  const { porcentaje } = calcularOcupacion(disponibles, total)
  const color = porcentaje >= 90
    ? theme.colors.error
    : porcentaje >= 70
      ? theme.colors.warning
      : theme.colors.success

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontSize: theme.typography.size.xs,
        color: theme.colors.textMuted,
        marginBottom: '4px',
      }}>
        <span>{disponibles} plazas disponibles</span>
        <span>{porcentaje}% ocupado</span>
      </div>
      <div style={{
        height: '4px', borderRadius: theme.radius.full,
        background: theme.colors.border, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${porcentaje}%`,
          background: color,
          borderRadius: theme.radius.full,
          transition: 'width 0.5s ease',
        }} />
      </div>
    </div>
  )
}

// Tarjeta de taller para la cuadrícula de resultados
export default function TallerCard({ taller }) {
  const navigate = useNavigate()
  const {
    id, nombre, descripcion,
    ubicacion_distrito, precio_mensual,
    plazas_disponibles, plazas_total, nivel,
  } = taller

  return (
    <Card hover onClick={() => navigate(`/taller/${id}`)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Cabecera con color de nivel */}
      <div style={{
        height: '6px',
        borderRadius: `${theme.radius.md} ${theme.radius.md} 0 0`,
        background: theme.colors.gradient,
        margin: '-24px -24px 0',
      }} />

      {/* Título y badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{
          fontSize: theme.typography.size.lg,
          fontWeight: theme.typography.weight.semibold,
          color: theme.colors.textPrimary,
          lineHeight: '1.3',
        }}>
          {nombre}
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {nivel && <Badge nivel={nivel} />}
          <Badge color="info" size="sm">📍 {ubicacion_distrito}</Badge>
        </div>
      </div>

      {/* Descripción */}
      <p style={{
        fontSize: theme.typography.size.sm,
        color: theme.colors.textSecondary,
        lineHeight: '1.6',
        flex: 1,
      }}>
        {truncarTexto(descripcion)}
      </p>

      {/* Ocupación */}
      <BarraOcupacion disponibles={plazas_disponibles} total={plazas_total} />

      {/* Precio */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: `1px solid ${theme.colors.border}`,
      }}>
        <span style={{
          fontSize: theme.typography.size['2xl'],
          fontWeight: theme.typography.weight.bold,
          color: theme.colors.primary,
        }}>
          {formatPrecio(precio_mensual)}
        </span>
        <span style={{ fontSize: theme.typography.size.xs, color: theme.colors.textMuted }}>
          por mes
        </span>
      </div>
    </Card>
  )
}
