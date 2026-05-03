import { createContext, useState, useCallback } from 'react'
import { authService } from '../services/auth'
import { STORAGE_TOKEN_KEY, STORAGE_USER_KEY } from '../utils/constants'

export const AuthContext = createContext(null)

// Lee el usuario persistido en localStorage al arrancar la app
const leerUsuarioGuardado = () => {
  try {
    const guardado = localStorage.getItem(STORAGE_USER_KEY)
    return guardado ? JSON.parse(guardado) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario]   = useState(leerUsuarioGuardado)
  const [cargando, setCargando] = useState(false)
  const [error, setError]       = useState(null)

  const login = useCallback(async (credenciales) => {
    setCargando(true)
    setError(null)
    try {
      const data = await authService.login(credenciales)
      localStorage.setItem(STORAGE_TOKEN_KEY, data.token)
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(data.usuario))
      setUsuario(data.usuario)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setCargando(false)
    }
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setUsuario(null)
    setError(null)
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      estaAutenticado: Boolean(usuario),
      cargando,
      error,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
