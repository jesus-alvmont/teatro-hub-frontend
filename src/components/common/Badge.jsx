import theme from '../../styles/theme'
import { colorPorNivel } from '../../utils/helpers'
import { capitalizar } from '../../utils/helpers'

// Colores predefinidos para badges de estado/tipo
const coloresPredefinidos = {
  success: { bg: theme.colors.successBg, text: theme.colors.success },
  error:   { bg: theme.colors.errorBg,   text: theme.colors.error },
  warning: { bg: theme.colors.warningBg, text: theme.colors.warning },
  info:    { bg: theme.colors.infoBg,    text: theme.colors.info },
  default: { bg: theme.colors.primaryXLight, text: theme.colors.primary },
}

// Badge reutilizable con soporte para nivel (principiante/intermedio/avanzado) o color semántico
export default function Badge({ children, nivel, color = 'default', size = 'sm' }) {
  const esNivel = Boolean(nivel)

  const colorTexto = esNivel ? colorPorNivel(nivel) : coloresPredefinidos[color]?.text
  const colorFondo = esNivel
    ? colorPorNivel(nivel) + '22'  // 13% opacity hex
    : coloresPredefinidos[color]?.bg

  const estilo = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: size === 'sm' ? '2px 10px' : '4px 14px',
    borderRadius: theme.radius.full,
    fontSize: size === 'sm' ? theme.typography.size.xs : theme.typography.size.sm,
    fontWeight: theme.typography.weight.semibold,
    background: colorFondo,
    color: colorTexto,
    textTransform: 'capitalize',
    letterSpacing: '0.3px',
  }

  return (
    <span style={estilo}>
      {esNivel ? capitalizar(nivel) : children}
    </span>
  )
}
