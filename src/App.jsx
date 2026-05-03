import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [talleres, setTalleres] = useState([])
  const [distritos, setDistritos] = useState([])
  const [filtros, setFiltros] = useState({
    distrito: '',
    nivel: '',
    tipo: '',
    precio_max: ''
  })
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const API_URL = 'https://teatro-hub-backend.onrender.com/api/v1'

  useEffect(() => {
    fetch(`${API_URL}/distritos`)
      .then(res => res.json())
      .then(data => setDistritos(data.data))
      .catch(err => console.error('Error:', err))
  }, [])

  const buscarTalleres = async () => {
    setCargando(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (filtros.distrito) params.append('distrito', filtros.distrito)
      if (filtros.nivel) params.append('nivel', filtros.nivel)
      if (filtros.tipo) params.append('tipo', filtros.tipo)
      if (filtros.precio_max) params.append('precio_max', filtros.precio_max)

      const res = await fetch(`${API_URL}/talleres?${params}`)
      const data = await res.json()
      setTalleres(data.data || [])
    } catch (err) {
      setError('Error: ' + err.message)
    } finally {
      setCargando(false)
    }
  }

  const handleFiltroChange = (e) => {
    const { name, value } = e.target
    setFiltros(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🎭 TeatroHub</h1>
        <p>Descubre talleres de teatro en Madrid</p>
      </header>

      <form onSubmit={(e) => { e.preventDefault(); buscarTalleres() }} className="search-form">
        <select name="distrito" value={filtros.distrito} onChange={handleFiltroChange}>
          <option value="">Distrito</option>
          {distritos.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select name="nivel" value={filtros.nivel} onChange={handleFiltroChange}>
          <option value="">Nivel</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <input type="number" name="precio_max" placeholder="Precio max" value={filtros.precio_max} onChange={handleFiltroChange} />

        <button type="submit" disabled={cargando}>{cargando ? 'Buscando...' : 'Buscar'}</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {talleres.map(t => (
          <div key={t.id} className="card">
            <h3>{t.nombre}</h3>
            <p>{t.descripcion}</p>
            <p><strong>Distrito:</strong> {t.ubicacion_distrito}</p>
            <p><strong>Precio:</strong> €{t.precio_mensual}/mes</p>
            <p><strong>Plazas:</strong> {t.plazas_disponibles}/{t.plazas_total}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
