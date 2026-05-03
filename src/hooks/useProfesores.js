import { useState, useEffect } from 'react'
import { profesoresService } from '../services/profesores'

export function useProfesor(id) {
  const [profesor, setProfesor] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError]       = useState(null)

  useEffect(() => {
    if (!id) return
    setCargando(true)
    setError(null)
    profesoresService.obtenerPorId(id)
      .then(data => setProfesor(data.data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  return { profesor, cargando, error }
}
