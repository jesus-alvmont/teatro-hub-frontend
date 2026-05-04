import { useNavigate } from 'react-router-dom'
import theme from '../../styles/theme'
import Card from '../common/Card'
import Badge from '../common/Badge'
import { formatPrecio, truncarTexto, calcularOcupacion } from '../../utils/helpers'

// Barra de ocupación de plazas con color semántico según el nivel de llenado
function BarraOcupacion({ disponibles, total }) {
  const { porcentaje } = calcularOcupacion(disponibles, total)

  const colorBarra = porcentaje >= 90
    ? theme.colors.semantic.error
    : porcentaje >= 70
      ? theme.colors.semantic.warning
      : theme.colors.semantic.success

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textMuted,
        marginBottom: theme.spacing.xs,
      }}>
        <span>{disponibles} plazas disponibles</span>
        <span>{porcentaje}% ocupado</span>
      </div>
      <div style={{
        height: '4px',
        borderRadius: theme.borderRadius.full,
        background: theme.colors.border,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${porcentaje}%`,
          background: colorBarra,
          borderRadius: theme.borderRadius.full,
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
    <Card
      hover
      onClick={() => navigate(`/taller/${id}`)}
      style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}
    >
      {/* Franja superior de color de marca */}
      <div style={{
        height: '5px',
        borderRadius: `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0`,
        background: theme.colors.gradientWarm,
        margin: `-${theme.spacing.lg} -${theme.spacing.lg} 0`,
      }} />

      {/* Título y badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: theme.typography.sizes.lg,
          fontWeight: theme.typography.weights.bold,
          color: theme.colors.textPrimary,
          lineHeight: theme.typography.lineHeights.snug,
        }}>
          {nombre}
        </h3>

        <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
          {nivel && <Badge nivel={nivel} />}
          {/* Ubicación con color secundario (verde salvia) */}
          <Badge color="secondary" size="sm">📍 {ubicacion_distrito}</Badge>
        </div>
      </div>

      {/* Descripción */}
      <p style={{
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.relaxed,
        flex: 1,
      }}>
        {truncarTexto(descripcion)}
      </p>

      {/* Barra de ocupación */}
      <BarraOcupacion disponibles={plazas_disponibles} total={plazas_total} />

      {/* Precio en dorado (accent) como destacado */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colors.borderSubtle}`,
      }}>
        <span style={{
          fontSize: theme.typography.sizes['2xl'],
          fontWeight: theme.typography.weights.bold,
          color: theme.colors.accent,
        }}>
          {formatPrecio(precio_mensual)}
        </span>
        <span style={{
          fontSize: theme.typography.sizes.xs,
          color: theme.colors.textMuted,
        }}>
          por mes
        </span>
      </div>
    </Card>
  )
}
