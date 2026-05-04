// Formatea un precio numérico a moneda EUR española
export const formatPrecio = (precio) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(precio)

// Retorna el porcentaje de ocupación de un taller
export const calcularOcupacion = (disponibles, total) => ({
  disponibles,
  total,
  ocupados: total - disponibles,
  porcentaje: Math.round(((total - disponibles) / total) * 100),
})

// Devuelve el color asociado a cada nivel de dificultad (paleta TeatroHub)
export const colorPorNivel = (nivel) => {
  const mapa = {
    principiante: '#2E7D32',
    intermedio: '#E65100',
    avanzado: '#C62828',
  }
  return mapa[nivel] ?? '#6B8C7E'
}

// Trunca texto largo con puntos suspensivos
export const truncarTexto = (texto, maxLen = 120) => {
  if (!texto || texto.length <= maxLen) return texto
  return texto.slice(0, maxLen).trimEnd() + '…'
}

// Capitaliza la primera letra de un string
export const capitalizar = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
