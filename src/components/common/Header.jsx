import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import theme from '../../styles/theme'
import Button from './Button'

export default function Header() {
  const { usuario, estaAutenticado, logout } = useAuth()
  const [menuAbierto, setMenuAbierto] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const estiloEnlace = ({ isActive }) => ({
    color: isActive ? theme.colors.primary : theme.colors.textSecondary,
    fontWeight: isActive ? theme.typography.weight.semibold : theme.typography.weight.medium,
    fontSize: theme.typography.size.sm,
    transition: `color ${theme.transition.fast}`,
    textDecoration: 'none',
  })

  return (
    <header style={{
      background: theme.colors.surface,
      borderBottom: `1px solid ${theme.colors.border}`,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: theme.shadow.sm,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.5rem' }}>🎭</span>
          <span style={{
            fontSize: theme.typography.size.xl,
            fontWeight: theme.typography.weight.bold,
            background: theme.colors.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            TeatroHub
          </span>
        </Link>

        {/* Navegación escritorio */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <NavLink to="/" style={estiloEnlace} end>Inicio</NavLink>
          <NavLink to="/talleres" style={estiloEnlace}>Talleres</NavLink>
        </nav>

        {/* Acciones de usuario */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {estaAutenticado ? (
            <>
              <Link
                to="/dashboard"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none', color: theme.colors.textPrimary,
                  fontWeight: theme.typography.weight.medium,
                  fontSize: theme.typography.size.sm,
                }}
              >
                <span style={{
                  width: '32px', height: '32px',
                  borderRadius: '50%',
                  background: theme.colors.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: theme.typography.weight.bold,
                  fontSize: theme.typography.size.sm,
                }}>
                  {usuario?.nombre?.charAt(0).toUpperCase() ?? 'U'}
                </span>
                <span style={{ display: 'none' }}>{usuario?.nombre}</span>
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
    </header>
  )
}
