// URL base del backend en producción
export const API_URL = 'https://teatro-hub-backend.onrender.com/api/v1'

// Clave para persistir token y usuario en localStorage
export const STORAGE_TOKEN_KEY = 'teatro_hub_token'
export const STORAGE_USER_KEY = 'teatro_hub_user'

// Opciones de nivel para filtros y formularios
export const NIVELES = [
  { value: 'principiante', label: 'Principiante' },
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' },
]

// Tipos de taller disponibles en la plataforma
export const TIPOS_TALLER = [
  { value: 'dramatico', label: 'Teatro Dramático' },
  { value: 'musical', label: 'Teatro Musical' },
  { value: 'comedia', label: 'Comedia' },
  { value: 'improv', label: 'Improvisación' },
  { value: 'clasico', label: 'Teatro Clásico' },
]

// Rutas de la aplicación centralizadas
export const ROUTES = {
  HOME: '/',
  TALLER_DETAIL: '/taller/:id',
  PROFESOR_DETAIL: '/profesor/:id',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
}
