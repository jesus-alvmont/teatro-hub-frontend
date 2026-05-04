import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LoadingSpinner from './components/common/LoadingSpinner'
import theme from './styles/theme'

// Lazy loading por ruta — solo se carga el JS cuando se navega a la página
const Home           = lazy(() => import('./pages/Home'))
const TallerDetail   = lazy(() => import('./pages/TallerDetail'))
const ProfesorDetail = lazy(() => import('./pages/ProfesorDetail'))
const Login          = lazy(() => import('./pages/Login'))
const Signup         = lazy(() => import('./pages/Signup'))
const Dashboard      = lazy(() => import('./pages/Dashboard'))
const DesignSystemDemo = lazy(() => import('./components/common/DesignSystemDemo'))

// Fallback de carga compartido para todas las rutas
const CargandoPagina = () => <LoadingSpinner fullPage mensaje="Cargando página…" />

// Página 404 — sustituir por página dedicada en Semana 2
function PaginaNoEncontrada() {
  return (
    <div style={{
      textAlign: 'center',
      padding: `${theme.spacing['4xl']} ${theme.spacing.lg}`,
      flex: 1,
    }}>
      <h2 style={{
        fontFamily: theme.typography.fontFamilyDisplay,
        fontSize: theme.typography.sizes['3xl'],
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.sm,
      }}>
        Página no encontrada
      </h2>
      <p style={{
        fontSize: theme.typography.sizes.base,
        color: theme.colors.textSecondary,
      }}>
        El telón aún no ha subido en esta dirección.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <Suspense fallback={<CargandoPagina />}>
              <Routes>
                <Route path="/"              element={<Home />} />
                <Route path="/taller/:id"    element={<TallerDetail />} />
                <Route path="/profesor/:id"  element={<ProfesorDetail />} />
                <Route path="/login"         element={<Login />} />
                <Route path="/signup"        element={<Signup />} />
                <Route path="/dashboard"     element={<Dashboard />} />
                <Route path="/design-system" element={<DesignSystemDemo />} />
                <Route path="*"              element={<PaginaNoEncontrada />} />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  )
}
