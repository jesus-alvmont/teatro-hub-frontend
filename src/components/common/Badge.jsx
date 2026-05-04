import theme from '../../styles/theme'
import { colorPorNivel, capitalizar } from '../../utils/helpers'

// Colores semánticos para badges de estado del sistema
const coloresPredefinidos = {
  success: {
    bg: theme.colors.semantic.successBg,
    text: theme.colors.semantic.success,
  },
  error: {
    bg: theme.colors.semantic.errorBg,
    text: theme.colors.semantic.error,
  },
  warning: {
    bg: theme.colors.semantic.warningBg,
    text: theme.colors.semantic.warning,
  },
  info: {
    bg: theme.colors.semantic.infoBg,
    text: theme.colors.semantic.info,
  },
  // Variantes de la paleta principal
  primary: {
    bg: theme.colors.primaryXLight,
    text: theme.colors.primaryDark,
  },
  secondary: {
    bg: theme.colors.secondaryXLight,
    text: theme.colors.secondaryDark,
  },
  accent: {
    bg: theme.colors.accentXLight,
    text: theme.colors.accentDark,
  },
  dark: {
    bg: theme.colors.black,
    text: theme.colors.white,
  },
  default: {
    bg: theme.colors.beige,
    text: theme.colors.gray,
  },
}

// Badge reutilizable. Usa `nivel` para talleres o `color` para estados del sistema.
export default function Badge({
  children,
  nivel,
  color = 'default',
  size = 'sm',
  style = {},
}) {
  const esNivel = Boolean(nivel)

  let colorTexto, colorFondo
  if (esNivel) {
    colorTexto = colorPorNivel(nivel)
    colorFondo = colorPorNivel(nivel) + '22'
  } else {
    const c = coloresPredefinidos[color] ?? coloresPredefinidos.default
    colorTexto = c.text
    colorFondo = c.bg
  }

  const tamanos = {
    xs: { padding: '1px 8px',  fontSize: theme.typography.sizes.xs },
    sm: { padding: '2px 10px', fontSize: theme.typography.sizes.xs },
    md: { padding: '4px 14px', fontSize: theme.typography.sizes.sm },
  }

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      borderRadius: theme.borderRadius.full,
      fontWeight: theme.typography.weights.semibold,
      background: colorFondo,
      color: colorTexto,
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
