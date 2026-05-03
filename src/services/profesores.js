import api from './api'

export const profesoresService = {
  obtenerTodos:  ()   => api.get('/profesores'),
  obtenerPorId:  (id) => api.get(`/profesores/${id}`),
}
