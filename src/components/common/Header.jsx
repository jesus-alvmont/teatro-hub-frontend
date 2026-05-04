import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import theme from '../../styles/theme'
import Button from './Button'

export default function Header() {
  const { usuario, estaAutenticado, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/') }

  // Estilo de enlace de navegación — púrpura si activo, gris si no
  const estiloEnlace = ({ isActive }) => ({
    color: isActive ? theme.colors.primary : theme.colors.gray,
    fontWeight: theme.typography.weights.semibold,
    fontSize: theme.typography.sizes.sm,
    letterSpacing: theme.typography.letterSpacing.wide,
    transition: `color ${theme.transition.fast}`,
    textDecoration: 'none',
  })

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: theme.zIndex.sticky,
      background: theme.colors.white,
      borderBottom: `1px solid ${theme.colors.border}`,
      boxShadow: theme.shadow.xs,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
      }}>
        {/* Logo — Playfair Display, negro plano, sin emoji ni degradado */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: theme.typography.fontFamilyDisplay,
            fontSize: theme.typography.sizes.xl,
            fontWeight: theme.typography.weights.semibold,
            color: theme.colors.black,
            letterSpacing: theme.typography.letterSpacing.tight,
          }}>
            TeatroHub
          </span>
        </Link>

        {/* Navegación + acciones — alineadas a la derecha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xl }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.lg }}>
            <NavLink to="/" style={estiloEnlace} end>Inicio</NavLink>
            <NavLink to="/talleres" style={estiloEnlace}>Talleres</NavLink>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
            {estaAutenticado ? (
              <>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  {/* Avatar con inicial — color primario */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: theme.borderRadius.full,
                    background: theme.colors.primaryXLight,
                    border: `2px solid ${theme.colors.primary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.colors.primaryDark,
                    fontWeight: theme.typography.weights.semibold,
                    fontSize: theme.typography.sizes.sm,
                    cursor: 'pointer',
                  }}>
                    {usuario?.nombre?.charAt(0).toUpperCase() ?? 'U'}
                  </div>
                </Link>
                <Button variante="ghost" tamano="sm" onClick={handleLogout}>
                  Salir
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button variante="ghost" tamano="sm">Entrar</Button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  <Button variante="primary" tamano="sm">Registro</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
