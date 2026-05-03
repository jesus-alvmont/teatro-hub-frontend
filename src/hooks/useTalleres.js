import { useState, useEffect, useCallback } from 'react'
import { talleresService } from '../services/talleres'

export function useTalleres() {
  const [talleres, setTalleres]   = useState([])
  const [distritos, setDistritos] = useState([])
  const [cargando, setCargando]   = useState(false)
  const [error, setError]         = useState(null)

  // Carga la lista de distritos una sola vez al montar
  useEffect(() => {
    talleresService.obtenerDistritos()
      .then(data => setDistritos(data.data ?? []))
      .catch(err => console.error('Error al cargar distritos:', err))
  }, [])

  const buscar = useCallback(async (filtros = {}) => {
    setCargando(true)
    setError(null)
    try {
      const data = await talleresService.buscar(filtros)
      setTalleres(data.data ?? [])
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }, [])

  return { talleres, distritos, cargando, error, buscar }
}
