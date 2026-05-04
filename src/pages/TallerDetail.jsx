import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import theme from '../styles/theme'
import Button from '../components/common/Button'
import LoadingSpinner from '../components/common/LoadingSpinner'
import Badge from '../components/common/Badge'
import { talleresService } from '../services/talleres'
import { formatPrecio } from '../utils/helpers'

// TODO Semana 2: agregar sección de reseñas y perfil del profesor
export default function TallerDetail() {
  const { id } = useParams()
  const [taller, setTaller]     = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    talleresService.obtenerPorId(id)
      .then(data => setTaller(data.data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <LoadingSpinner fullPage mensaje="Cargando taller…" />

  if (error || !taller) return (
    <div className="container" style={{ padding: `${theme.spacing['4xl']} ${theme.spacing.lg}`, textAlign: 'center' }}>
      <p style={{ color: theme.colors.semantic.error, marginBottom: theme.spacing.md }}>
        {error ?? 'Taller no encontrado'}
      </p>
      <Link to="/">
        <Button variante="outline">Volver al inicio</Button>
      </Link>
    </div>
  )

  const {
    nombre, descripcion, ubicacion_distrito,
    precio_mensual, plazas_disponibles, plazas_total, nivel,
  } = taller

  return (
    <main
      className="container"
      style={{
        padding: `${theme.spacing['2xl']} ${theme.spacing.lg}`,
        maxWidth: '800px',
        flex: 1,
      }}
    >
      {/* Enlace de vuelta */}
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        color: theme.colors.textMuted,
        fontSize: theme.typography.sizes.sm,
        marginBottom: theme.spacing.lg,
        textDecoration: 'none',
        transition: `color ${theme.transition.fast}`,
      }}>
        ← Volver
      </Link>

      <div style={{
        background: theme.colors.surface,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.shadow.lg,
        overflow: 'hidden',
        border: `1px solid ${theme.colors.border}`,
      }}>
        {/* Franja superior de color de marca */}
        <div style={{ height: '8px', background: theme.colors.gradientWarm }} />

        <div style={{ padding: theme.spacing.xl }}>
          {/* Cabecera */}
          <div style={{ marginBottom: theme.spacing.lg }}>
            <h1 style={{
              fontFamily: theme.typography.fontFamilyDisplay,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.sm,
              lineHeight: theme.typography.lineHeights.tight,
            }}>
              {nombre}
            </h1>

            <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
              {nivel && <Badge nivel={nivel} />}
              <Badge color="secondary">📍 {ubicacion_distrito}</Badge>
            </div>
          </div>

          {/* Descripción */}
          <p style={{
            fontSize: theme.typography.sizes.base,
            color: theme.colors.textSecondary,
            lineHeight: theme.typography.lineHeights.relaxed,
            marginBottom: theme.spacing.xl,
          }}>
            {descripcion}
          </p>

          {/* Precio en dorado (accent) + CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: theme.spacing.md,
            paddingTop: theme.spacing.lg,
            borderTop: `1px solid ${theme.colors.borderSubtle}`,
          }}>
            <div>
              <span style={{
                fontSize: theme.typography.sizes['4xl'],
                fontWeight: theme.typography.weights.bold,
                color: theme.colors.accent,
              }}>
                {formatPrecio(precio_mensual)}
              </span>
              <span style={{
                color: theme.colors.textMuted,
                fontSize: theme.typography.sizes.sm,
              }}>
                {' '}/ mes
              </span>
              <p style={{
                color: theme.colors.textMuted,
                fontSize: theme.typography.sizes.sm,
                marginTop: theme.spacing.xs,
              }}>
                {plazas_disponibles} plazas disponibles de {plazas_total}
              </p>
            </div>

            {/* TODO Semana 4: conectar con endpoint de inscripción */}
            <Button variante="primary" tamano="lg">
              Inscribirme
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
