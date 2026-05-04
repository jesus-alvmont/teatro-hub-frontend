import { useEffect } from 'react'
import theme from '../styles/theme'
import SearchForm from '../components/search/SearchForm'
import TallerGrid from '../components/taller/TallerGrid'
import { useTalleres } from '../hooks/useTalleres'

// Barras de color decorativas que representan la paleta de la app
const BARRAS_COLOR = ['#7B68A6', '#E89BB5', '#F4D03F', '#6B8C7E', '#E74C3C', '#5B7C9F']

// Sección hero — editorial, fondo blanco, tipografía de impacto
function Hero() {
  return (
    <section style={{
      background: theme.colors.white,
      padding: `${theme.spacing['4xl']} ${theme.spacing.lg} 80px`,
      textAlign: 'center',
    }}>
      <div className="container">
        {/* Barras de color decorativas */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginBottom: theme.spacing.xl,
        }}>
          {BARRAS_COLOR.map(color => (
            <div key={color} style={{
              width: '32px',
              height: '4px',
              borderRadius: theme.borderRadius.full,
              background: color,
            }} />
          ))}
        </div>

        <h1 style={{
          fontFamily: theme.typography.fontFamilyDisplay,
          fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.black,
          lineHeight: theme.typography.lineHeights.tight,
          marginBottom: theme.spacing.md,
          letterSpacing: theme.typography.letterSpacing.tight,
        }}>
          Descubre talleres de teatro<br />en Madrid
        </h1>

        <p style={{
          fontSize: theme.typography.sizes.lg,
          color: theme.colors.textSecondary,
          maxWidth: '520px',
          margin: `0 auto`,
          lineHeight: theme.typography.lineHeights.relaxed,
          fontWeight: theme.typography.weights.normal,
        }}>
          Más de 50 talleres para todos los niveles.
          Encuentra el que mejor encaja contigo.
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

      <main style={{ flex: 1, background: theme.colors.white }}>
        <div className="container" style={{ padding: `0 ${theme.spacing.lg} ${theme.spacing['3xl']}` }}>
          {/* SearchForm superpuesto sobre la zona inferior del hero */}
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
