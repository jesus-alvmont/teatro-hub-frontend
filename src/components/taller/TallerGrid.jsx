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
      padding: '64px 24px',
      color: theme.colors.textMuted,
    }}>
      <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>🎭</span>
      <h3 style={{
        fontSize: theme.typography.size.xl,
        color: theme.colors.textSecondary,
        marginBottom: '8px',
      }}>
        No encontramos talleres
      </h3>
      <p style={{ fontSize: theme.typography.size.sm }}>
        Prueba con otros filtros o amplía tu búsqueda.
      </p>
    </div>
  )

  return (
    <section>
      <p style={{
        fontSize: theme.typography.size.sm,
        color: theme.colors.textMuted,
        marginBottom: '20px',
        fontWeight: theme.typography.weight.medium,
      }}>
        {talleres.length} {talleres.length === 1 ? 'taller encontrado' : 'talleres encontrados'}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {talleres.map((taller, i) => (
          <div key={taller.id} className="animate-in" style={{ animationDelay: `${i * 60}ms` }}>
            <TallerCard taller={taller} />
          </div>
        ))}
      </div>
    </section>
  )
}
