import api from './api'

export const resenasService = {
  obtenerPorTaller: (tallerId)          => api.get(`/talleres/${tallerId}/resenas`),
  crear:            (tallerId, resena)  => api.post(`/talleres/${tallerId}/resenas`, resena),
}
