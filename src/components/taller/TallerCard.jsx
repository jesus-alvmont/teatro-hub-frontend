import { useNavigate } from 'react-router-dom'
import theme from '../../styles/theme'
import Badge from '../common/Badge'
import { formatPrecio, truncarTexto, calcularOcupacion } from '../../utils/helpers'

// Barra de ocupación de plazas con color semántico
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
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textMuted,
        marginBottom: theme.spacing.xs,
      }}>
        <span>{disponibles} plazas disponibles</span>
        <span>{porcentaje}%</span>
      </div>
      <div style={{
        height: '3px',
        borderRadius: theme.borderRadius.full,
        background: theme.colors.borderSubtle,
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

/**
 * Tarjeta de taller para la cuadrícula de resultados.
 * colorIndex: posición en la paleta cíclica (0–5) para el acento visual.
 */
export default function TallerCard({ taller, colorIndex = 0 }) {
  const navigate = useNavigate()
  const {
    id, nombre, descripcion,
    ubicacion_distrito, precio_mensual,
    plazas_disponibles, plazas_total, nivel,
  } = taller

  // Color cíclico de la paleta del theme
  const paletaColor = theme.colors.palette[colorIndex % theme.colors.palette.length]

  return (
    <article
      onClick={() => navigate(`/taller/${id}`)}
      className="th-card-hover"
      style={{
        background: theme.colors.white,
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadow.md,
        border: `1px solid ${theme.colors.border}`,
        // Borde izquierdo de color como acento de identidad de la card
        borderLeft: `4px solid ${paletaColor.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        padding: theme.spacing.lg,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Título y badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: theme.typography.sizes.lg,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.textPrimary,
          lineHeight: theme.typography.lineHeights.snug,
        }}>
          {nombre}
        </h3>

        <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
          {nivel && <Badge nivel={nivel} />}
          {/* Ubicación con el color de acento de la card */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 10px',
            borderRadius: theme.borderRadius.full,
            fontSize: theme.typography.sizes.xs,
            fontWeight: theme.typography.weights.semibold,
            background: paletaColor.bgLight,
            color: paletaColor.textDark,
            whiteSpace: 'nowrap',
          }}>
            📍 {ubicacion_distrito}
          </span>
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

      {/* Precio */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colors.borderSubtle}`,
      }}>
        <div>
          <span style={{
            fontFamily: theme.typography.fontFamilyDisplay,
            fontSize: theme.typography.sizes['2xl'],
            fontWeight: theme.typography.weights.semibold,
            color: paletaColor.border,
          }}>
            {formatPrecio(precio_mensual)}
          </span>
          <span style={{
            fontSize: theme.typography.sizes.xs,
            color: theme.colors.textMuted,
            marginLeft: '4px',
          }}>
            / mes
          </span>
        </div>

        {/* Indicador visual de acción — flecha en el color de la card */}
        <span style={{
          width: '32px',
          height: '32px',
          borderRadius: theme.borderRadius.full,
          background: paletaColor.bgLight,
          color: paletaColor.border,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: theme.typography.sizes.base,
          fontWeight: theme.typography.weights.semibold,
          transition: `background ${theme.transition.fast}`,
        }}>
          →
        </span>
      </div>
    </article>
  )
}
