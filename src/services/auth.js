import api from './api'
import { STORAGE_TOKEN_KEY, STORAGE_USER_KEY } from '../utils/constants'

export const authService = {
  login:  (credenciales) => api.post('/auth/login', credenciales),
  signup: (datos)        => api.post('/auth/signup', datos),
  perfil: ()             => api.get('/auth/me'),

  // Limpia la sesión local sin llamar al servidor
  logout: () => {
    localStorage.removeItem(STORAGE_TOKEN_KEY)
    localStorage.removeItem(STORAGE_USER_KEY)
  },
}
