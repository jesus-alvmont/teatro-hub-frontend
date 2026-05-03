import { API_URL, STORAGE_TOKEN_KEY } from '../utils/constants'

// Error tipado para distinguir errores de API vs red
class ApiError extends Error {
  constructor(mensaje, status) {
    super(mensaje)
    this.name = 'ApiError'
    this.status = status
  }
}

// Función base que envuelve fetch con auth y manejo de errores
const request = async (endpoint, opciones = {}) => {
  const token = localStorage.getItem(STORAGE_TOKEN_KEY)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...opciones.headers,
    },
    ...opciones,
  }

  const respuesta = await fetch(`${API_URL}${endpoint}`, config)

  if (!respuesta.ok) {
    const cuerpo = await respuesta.json().catch(() => ({}))
    throw new ApiError(
      cuerpo.message ?? `Error ${respuesta.status}`,
      respuesta.status
    )
  }

  return respuesta.json()
}

// Interfaz pública del cliente HTTP
const api = {
  get:    (endpoint)        => request(endpoint),
  post:   (endpoint, datos) => request(endpoint, { method: 'POST',   body: JSON.stringify(datos) }),
  put:    (endpoint, datos) => request(endpoint, { method: 'PUT',    body: JSON.stringify(datos) }),
  delete: (endpoint)        => request(endpoint, { method: 'DELETE' }),
}

export default api
