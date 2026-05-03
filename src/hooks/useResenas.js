import { useState, useEffect, useCallback } from 'react'
import { resenasService } from '../services/resenas'

export function useResenas(tallerId) {
  const [resenas, setResenas] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError]       = useState(null)

  const cargar = useCallback(async () => {
    if (!tallerId) return
    setCargando(true)
    setError(null)
    try {
      const data = await resenasService.obtenerPorTaller(tallerId)
      setResenas(data.data ?? [])
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }, [tallerId])

  useEffect(() => { cargar() }, [cargar])

  const agregarResena = useCallback(async (resena) => {
    const data = await resenasService.crear(tallerId, resena)
    setResenas(prev => [data.data, ...prev])
    return data
  }, [tallerId])

  return { resenas, cargando, error, agregarResena, recargar: cargar }
}
