import theme from '../../styles/theme'
import { capitalizar } from '../../utils/helpers'

// Paleta semántica para badges de estado del sistema
const coloresPredefinidos = {
  success:   { bg: theme.colors.semantic.successBg,  text: theme.colors.semantic.success },
  error:     { bg: theme.colors.semantic.errorBg,    text: theme.colors.semantic.error },
  warning:   { bg: theme.colors.semantic.warningBg,  text: theme.colors.semantic.warning },
  info:      { bg: theme.colors.semantic.infoBg,     text: theme.colors.semantic.info },
  primary:   { bg: theme.colors.primaryXLight,        text: theme.colors.primaryDark },
  secondary: { bg: theme.colors.secondaryXLight,      text: theme.colors.secondaryDark },
  accent:    { bg: theme.colors.accentXLight,         text: theme.colors.accentDark },
  dark:      { bg: theme.colors.black,                text: theme.colors.white },
  default:   { bg: theme.colors.beige,                text: theme.colors.gray },
}

// Paleta directa de nivel de taller desde el theme (evita colorPorNivel + opacidad manual)
const coloresPorNivel = {
  principiante: { bg: theme.colors.nivel.principianteBg, text: theme.colors.nivel.principiante },
  intermedio:   { bg: theme.colors.nivel.intermedioBg,   text: theme.colors.nivel.intermedio },
  avanzado:     { bg: theme.colors.nivel.avanzadoBg,     text: theme.colors.nivel.avanzado },
}

const tamanos = {
  xs: { padding: '1px 8px',  fontSize: theme.typography.sizes.xs },
  sm: { padding: '2px 10px', fontSize: theme.typography.sizes.xs },
  md: { padding: '4px 14px', fontSize: theme.typography.sizes.sm },
}

// Badge reutilizable. Usa `nivel` para dificultad de talleres o `color` para estados del sistema.
export default function Badge({
  children,
  nivel,
  color = 'default',
  size = 'sm',
  style = {},
}) {
  const esNivel = Boolean(nivel)
  const { bg, text } = esNivel
    ? (coloresPorNivel[nivel] ?? coloresPorNivel.principiante)
    : (coloresPredefinidos[color] ?? coloresPredefinidos.default)

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      borderRadius: theme.borderRadius.full,
      fontWeight: theme.typography.weights.semibold,
      background: bg,
      color: text,
      textTransform: 'capitalize',
      letterSpacing: theme.typography.letterSpacing.wide,
      whiteSpace: 'nowrap',
      ...tamanos[size],
      ...style,
    }}>
      {esNivel ? capitalizar(nivel) : children}
    </span>
  )
}
