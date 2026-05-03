import { useParams, Link } from 'react-router-dom'
import theme from '../styles/theme'
import Button from '../components/common/Button'
import LoadingSpinner from '../components/common/LoadingSpinner'
import Badge from '../components/common/Badge'
import { useState, useEffect } from 'react'
import { talleresService } from '../services/talleres'
import { formatPrecio } from '../utils/helpers'

// TODO Semana 2: agregar sección de reseñas y perfil del profesor
export default function TallerDetail() {
  const { id } = useParams()
  const [taller, setTaller]   = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    talleresService.obtenerPorId(id)
      .then(data => setTaller(data.data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <LoadingSpinner fullPage mensaje="Cargando taller…" />

  if (error || !taller) return (
    <div className="container" style={{ padding: '64px 24px', textAlign: 'center' }}>
      <p style={{ color: theme.colors.error, marginBottom: '16px' }}>
        {error ?? 'Taller no encontrado'}
      </p>
      <Link to="/"><Button variante="outline">Volver al inicio</Button></Link>
    </div>
  )

  const {
    nombre, descripcion, ubicacion_distrito,
    precio_mensual, plazas_disponibles, plazas_total, nivel,
  } = taller

  return (
    <main className="container" style={{ padding: '40px 24px', maxWidth: '800px' }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        color: theme.colors.textMuted, fontSize: theme.typography.size.sm,
        marginBottom: '24px', textDecoration: 'none',
      }}>
        ← Volver
      </Link>

      <div style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadow.lg,
        overflow: 'hidden',
        border: `1px solid ${theme.colors.border}`,
      }}>
        {/* Banner */}
        <div style={{ height: '8px', background: theme.colors.gradient }} />

        <div style={{ padding: '32px' }}>
          {/* Cabecera */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{
              fontSize: theme.typography.size['3xl'],
              fontWeight: theme.typography.weight.bold,
              color: theme.colors.textPrimary,
              marginBottom: '12px',
              lineHeight: '1.2',
            }}>
              {nombre}
            </h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {nivel && <Badge nivel={nivel} />}
              <Badge color="info">📍 {ubicacion_distrito}</Badge>
            </div>
          </div>

          {/* Descripción */}
          <p style={{
            fontSize: theme.typography.size.base,
            color: theme.colors.textSecondary,
            lineHeight: '1.8',
            marginBottom: '32px',
          }}>
            {descripcion}
          </p>

          {/* Detalles y CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: `1px solid ${theme.colors.border}`,
          }}>
            <div>
              <span style={{
                fontSize: theme.typography.size['4xl'],
                fontWeight: theme.typography.weight.bold,
                color: theme.colors.primary,
              }}>
                {formatPrecio(precio_mensual)}
              </span>
              <span style={{ color: theme.colors.textMuted, fontSize: theme.typography.size.sm }}> / mes</span>
              <p style={{ color: theme.colors.textMuted, fontSize: theme.typography.size.sm, marginTop: '4px' }}>
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
