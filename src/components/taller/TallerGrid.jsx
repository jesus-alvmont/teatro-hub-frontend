import theme from '../../styles/theme'
import TallerCard from './TallerCard'
import LoadingSpinner from '../common/LoadingSpinner'
import ErrorMessage from '../common/ErrorMessage'

// Cuadrícula responsiva de tarjetas de talleres
export default function TallerGrid({ talleres = [], cargando, error, onReintentar }) {
  if (cargando) return <LoadingSpinner mensaje="Buscando talleres…" />

  if (error) return <ErrorMessage mensaje={error} onReintentar={onReintentar} />

  if (talleres.length === 0) return (
    <div style={{
      textAlign: 'center',
      padding: `${theme.spacing['3xl']} ${theme.spacing.lg}`,
      color: theme.colors.textMuted,
    }}>
      <h3 style={{
        fontFamily: theme.typography.fontFamilyDisplay,
        fontSize: theme.typography.sizes.xl,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.sm,
        fontWeight: theme.typography.weights.semibold,
      }}>
        No encontramos talleres
      </h3>
      <p style={{ fontSize: theme.typography.sizes.sm }}>
        Prueba con otros filtros o amplía tu búsqueda.
      </p>
    </div>
  )

  return (
    <section>
      {/* Contador de resultados */}
      <p style={{
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textMuted,
        marginBottom: theme.spacing.lg,
        fontWeight: theme.typography.weights.semibold,
        letterSpacing: theme.typography.letterSpacing.wide,
      }}>
        {talleres.length} {talleres.length === 1 ? 'taller encontrado' : 'talleres encontrados'}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: theme.spacing.lg,
      }}>
        {talleres.map((taller, i) => (
          <div
            key={taller.id}
            className="animate-in"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {/* colorIndex asigna el color de la paleta cíclicamente */}
            <TallerCard taller={taller} colorIndex={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
