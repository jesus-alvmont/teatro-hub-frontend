import { useEffect } from 'react'
import theme from '../styles/theme'
import SearchForm from '../components/search/SearchForm'
import TallerGrid from '../components/taller/TallerGrid'
import { useTalleres } from '../hooks/useTalleres'

// Sección hero con gradiente de marca
function Hero() {
  return (
    <section style={{
      background: theme.colors.gradient,
      color: '#fff',
      padding: '72px 24px',
      textAlign: 'center',
    }}>
      <div className="container">
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: theme.typography.weight.bold,
          lineHeight: '1.15',
          marginBottom: '20px',
          letterSpacing: '-1px',
        }}>
          Descubre talleres de teatro<br />en Madrid
        </h1>
        <p style={{
          fontSize: theme.typography.size.xl,
          opacity: 0.9,
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Más de 50 talleres para todos los niveles. Encuentra el que mejor encaja contigo.
        </p>
      </div>
    </section>
  )
}

// Página principal: hero + buscador + resultados
export default function Home() {
  const { talleres, distritos, cargando, error, buscar } = useTalleres()

  // Carga inicial sin filtros
  useEffect(() => { buscar({}) }, [buscar])

  return (
    <>
      <Hero />

      <main className="container" style={{ padding: '40px 24px', flex: 1 }}>
        {/* Formulario de búsqueda superpuesto */}
        <div style={{ marginTop: '-24px', marginBottom: '40px' }}>
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
      </main>
    </>
  )
}
