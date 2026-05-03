import api from './api'

export const talleresService = {
  // Buscar talleres con filtros opcionales
  buscar: (filtros = {}) => {
    const params = new URLSearchParams()
    Object.entries(filtros).forEach(([clave, valor]) => {
      if (valor) params.append(clave, valor)
    })
    const query = params.toString()
    return api.get(`/talleres${query ? `?${query}` : ''}`)
  },

  obtenerPorId: (id) => api.get(`/talleres/${id}`),

  obtenerDistritos: () => api.get('/distritos'),
}
