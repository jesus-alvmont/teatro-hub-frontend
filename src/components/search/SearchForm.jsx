import { useState } from 'react'
import theme from '../../styles/theme'
import Button from '../common/Button'
import { NIVELES, TIPOS_TALLER } from '../../utils/constants'

const estiloSelect = {
  width: '100%',
  padding: '10px 14px',
  border: `2px solid ${theme.colors.border}`,
  borderRadius: theme.radius.md,
  fontSize: theme.typography.size.sm,
  color: theme.colors.textPrimary,
  background: theme.colors.surface,
  outline: 'none',
  fontFamily: theme.typography.fontFamily,
  transition: `border-color ${theme.transition.fast}`,
  cursor: 'pointer',
}

// Campo de formulario con etiqueta
function Campo({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontSize: theme.typography.size.xs,
        fontWeight: theme.typography.weight.semibold,
        color: theme.colors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

// Formulario de búsqueda de talleres con filtros
export default function SearchForm({ distritos = [], cargando = false, onBuscar }) {
  const [filtros, setFiltros] = useState({
    distrito: '', nivel: '', tipo: '', precio_max: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFiltros(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onBuscar?.(filtros)
  }

  const handleLimpiar = () => {
    const vacios = { distrito: '', nivel: '', tipo: '', precio_max: '' }
    setFiltros(vacios)
    onBuscar?.(vacios)
  }

  const hayFiltros = Object.values(filtros).some(Boolean)

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.xl,
        padding: '24px',
        boxShadow: theme.shadow.lg,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        marginBottom: '20px',
      }}>
        <Campo label="Distrito">
          <select name="distrito" value={filtros.distrito} onChange={handleChange} style={estiloSelect}>
            <option value="">Todos los distritos</option>
            {distritos.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </Campo>

        <Campo label="Nivel">
          <select name="nivel" value={filtros.nivel} onChange={handleChange} style={estiloSelect}>
            <option value="">Cualquier nivel</option>
            {NIVELES.map(n => <option key={n.value} value={n.value}>{n.label}</option>)}
          </select>
        </Campo>

        <Campo label="Tipo">
          <select name="tipo" value={filtros.tipo} onChange={handleChange} style={estiloSelect}>
            <option value="">Cualquier tipo</option>
            {TIPOS_TALLER.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </Campo>

        <Campo label="Precio máx. (€/mes)">
          <input
            type="number"
            name="precio_max"
            placeholder="Sin límite"
            value={filtros.precio_max}
            onChange={handleChange}
            min="0"
            style={{ ...estiloSelect, cursor: 'text' }}
          />
        </Campo>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        {hayFiltros && (
          <Button variante="ghost" tamano="md" onClick={handleLimpiar} type="button">
            Limpiar
          </Button>
        )}
        <Button variante="primary" tamano="md" type="submit" cargando={cargando}>
          🔍 Buscar talleres
        </Button>
      </div>
    </form>
  )
}
