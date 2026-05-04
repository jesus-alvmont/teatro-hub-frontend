import { useEffect } from 'react'
import theme from '../styles/theme'
import SearchForm from '../components/search/SearchForm'
import TallerGrid from '../components/taller/TallerGrid'
import { useTalleres } from '../hooks/useTalleres'

// Sección hero: gradiente coral + tipografía display Playfair
function Hero() {
  return (
    <section style={{
      background: theme.colors.gradientHero,
      color: theme.colors.textInverse,
      // El padding inferior extra crea espacio para que el SearchForm se superponga
      padding: `${theme.spacing['4xl']} ${theme.spacing.lg} 80px`,
      textAlign: 'center',
    }}>
      <div className="container">
        <h1 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: theme.typography.weights.bold,
          lineHeight: theme.typography.lineHeights.tight,
          marginBottom: theme.spacing.md,
          letterSpacing: theme.typography.letterSpacing.tight,
        }}>
          Descubre talleres de teatro<br />en Madrid
        </h1>

        {/* Línea dorada decorativa */}
        <div style={{
          width: '60px',
          height: '3px',
          background: theme.colors.accent,
          borderRadius: theme.borderRadius.full,
          margin: `0 auto ${theme.spacing.md}`,
        }} />

        <p style={{
          fontSize: theme.typography.sizes.xl,
          opacity: 0.85,
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: theme.typography.lineHeights.relaxed,
          fontWeight: theme.typography.weights.normal,
        }}>
          Más de 50 talleres para todos los niveles.<br />Encuentra el que mejor encaja contigo.
        </p>
      </div>
    </section>
  )
}

// Página principal: hero + buscador flotante + cuadrícula de resultados
export default function Home() {
  const { talleres, distritos, cargando, error, buscar } = useTalleres()

  useEffect(() => { buscar({}) }, [buscar])

  return (
    <>
      <Hero />

      <main style={{ flex: 1, background: theme.colors.backgrounds.coral }}>
        <div className="container" style={{ padding: `0 ${theme.spacing.lg} ${theme.spacing['3xl']}` }}>
          {/* SearchForm superpuesto al hero (-56px = entra en la zona del hero) */}
          <div style={{ marginTop: '-56px', marginBottom: theme.spacing['2xl'] }}>
            <SearchForm
              distritos={distritos}
              cargando={cargando}
              onBuscar={buscar}
            />
          </div>

          <TallerGrid
            talleres={talleres}
            cargando={cargando}
            error={error}
            onReintentar={() => buscar({})}
          />
        </div>
      </main>
    </>
  )
}
