import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy loading por ruta — solo se carga el JS cuando se navega a la página
const Home          = lazy(() => import('./pages/Home'))
const TallerDetail  = lazy(() => import('./pages/TallerDetail'))
const ProfesorDetail = lazy(() => import('./pages/ProfesorDetail'))
const Login         = lazy(() => import('./pages/Login'))
const Signup        = lazy(() => import('./pages/Signup'))
const Dashboard     = lazy(() => import('./pages/Dashboard'))

// Fallback de carga compartido para todas las rutas
const CargandoPagina = () => <LoadingSpinner fullPage mensaje="Cargando página…" />

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <Suspense fallback={<CargandoPagina />}>
              <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/taller/:id"   element={<TallerDetail />} />
                <Route path="/profesor/:id" element={<ProfesorDetail />} />
                <Route path="/login"        element={<Login />} />
                <Route path="/signup"       element={<Signup />} />
                <Route path="/dashboard"    element={<Dashboard />} />

                {/* 404 — Semana 2: crear página NotFound dedicada */}
                <Route path="*" element={
                  <div style={{ textAlign: 'center', padding: '96px 24px' }}>
                    <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>🎭</span>
                    <h2>Página no encontrada</h2>
                  </div>
                } />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  )
}
