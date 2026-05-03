import { createContext, useState, useCallback } from 'react'

export const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [notificaciones, setNotificaciones] = useState([])

  // Agrega una notificación temporal que desaparece en 4s
  const notificar = useCallback((mensaje, tipo = 'info') => {
    const id = Date.now()
    setNotificaciones(prev => [...prev, { id, mensaje, tipo }])
    setTimeout(() => {
      setNotificaciones(prev => prev.filter(n => n.id !== id))
    }, 4000)
  }, [])

  return (
    <AppContext.Provider value={{ notificaciones, notificar }}>
      {children}
    </AppContext.Provider>
  )
}
