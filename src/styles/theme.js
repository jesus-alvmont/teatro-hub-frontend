/**
 * Design System — TeatroHub v2
 * Paleta: Púrpura · Rosa · Amarillo · Verde · Rojo · Azul
 * Tipografía: Playfair Display (títulos) + System Sans (cuerpo)
 * Fondo: blanco puro — sin degradados
 */

const theme = {
  // ─── Colores ─────────────────────────────────────────────────────────────────
  colors: {
    // Primario — Púrpura
    primary:       '#7B68A6',
    primaryLight:  '#9B8EC4',
    primaryDark:   '#5E4F8A',
    primaryXLight: '#F0EDF8',

    // Rosa / secundario cálido
    pink:       '#E89BB5',
    pinkLight:  '#F2BAD0',
    pinkDark:   '#C97A98',
    pinkXLight: '#FDF0F5',

    // Amarillo / accent
    yellow:       '#F4D03F',
    yellowLight:  '#F8E07A',
    yellowDark:   '#C9A800',
    yellowXLight: '#FEFAE8',

    // Verde / complementario cálido
    green:       '#6B8C7E',
    greenLight:  '#8AA89C',
    greenDark:   '#4F6E61',
    greenXLight: '#EBF2EF',

    // Rojo / acción / urgencia
    red:       '#E74C3C',
    redLight:  '#EE6B5E',
    redDark:   '#C0392B',
    redXLight: '#FDECEA',

    // Azul / info / complementario
    blue:       '#5B7C9F',
    blueLight:  '#7B9CBF',
    blueDark:   '#3D5F7F',
    blueXLight: '#EBF2F8',

    // Paleta cíclica para cards — se asigna por índice
    palette: [
      { border: '#7B68A6', bgLight: '#F0EDF8', textDark: '#5E4F8A' },
      { border: '#E89BB5', bgLight: '#FDF0F5', textDark: '#C97A98' },
      { border: '#F4D03F', bgLight: '#FEFAE8', textDark: '#8A6F00' },
      { border: '#6B8C7E', bgLight: '#EBF2EF', textDark: '#4F6E61' },
      { border: '#E74C3C', bgLight: '#FDECEA', textDark: '#C0392B' },
      { border: '#5B7C9F', bgLight: '#EBF2F8', textDark: '#3D5F7F' },
    ],

    // Fondos — blanco puro
    background:  '#FFFFFF',
    surface:     '#FFFFFF',
    surfaceAlt:  '#FAFAFA',

    // Neutrales
    black:      '#1A1A1A',
    gray:       '#555555',
    grayLight:  '#999999',
    grayXLight: '#CCCCCC',
    white:      '#FFFFFF',

    // Texto
    textPrimary:   '#1A1A1A',
    textSecondary: '#555555',
    textMuted:     '#999999',
    textInverse:   '#FFFFFF',

    // Bordes
    border:       '#E8E8E8',
    borderFocus:  '#7B68A6',
    borderSubtle: '#F2F2F2',

    // Semánticos del sistema (sin cambios)
    semantic: {
      success:       '#2E7D32',
      successBg:     '#E8F5E9',
      successBorder: '#81C784',
      error:         '#C62828',
      errorBg:       '#FFEBEE',
      errorBorder:   '#EF9A9A',
      warning:       '#E65100',
      warningBg:     '#FFF3E0',
      warningBorder: '#FFCC02',
      info:          '#1565C0',
      infoBg:        '#E3F2FD',
      infoBorder:    '#90CAF9',
    },

    // Niveles de dificultad de talleres
    nivel: {
      principiante:   '#2E7D32',
      principianteBg: '#E8F5E9',
      intermedio:     '#E65100',
      intermedioBg:   '#FFF3E0',
      avanzado:       '#C62828',
      avanzadoBg:     '#FFEBEE',
    },
  },

  // ─── Tipografía ──────────────────────────────────────────────────────────────
  typography: {
    // System sans para cuerpo — carga cero, máxima compatibilidad
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    // Playfair Display para títulos — elegancia editorial
    fontFamilyDisplay: "'Playfair Display', 'Georgia', serif",

    sizes: {
      xs:    '0.75rem',    // 12px
      sm:    '0.875rem',   // 14px
      base:  '1rem',       // 16px
      lg:    '1.125rem',   // 18px
      xl:    '1.25rem',    // 20px
      '2xl': '1.5rem',     // 24px
      '3xl': '1.875rem',   // 30px
      '4xl': '2.25rem',    // 36px
      '5xl': '3rem',       // 48px
      '6xl': '3.75rem',    // 60px
    },

    // Solo dos pesos por diseño: regular y semibold
    weights: {
      normal:   '400',
      semibold: '600',
    },

    lineHeights: {
      tight:   '1.2',
      snug:    '1.35',
      normal:  '1.5',
      relaxed: '1.75',
    },

    letterSpacing: {
      tight:   '-0.02em',
      normal:  '0',
      wide:    '0.04em',
      wider:   '0.08em',
      widest:  '0.15em',
    },
  },

  // ─── Espaciado ───────────────────────────────────────────────────────────────
  spacing: {
    xs:    '4px',
    sm:    '8px',
    md:    '16px',
    lg:    '24px',
    xl:    '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
    '5xl': '128px',
  },

  // ─── Bordes redondeados ──────────────────────────────────────────────────────
  borderRadius: {
    sm:   '4px',
    md:   '8px',
    lg:   '12px',
    xl:   '16px',
    '2xl':'24px',
    full: '9999px',
  },

  // ─── Sombras ─────────────────────────────────────────────────────────────────
  shadow: {
    xs:  '0 1px 2px rgba(0,0,0,0.05)',
    sm:  '0 1px 4px rgba(0,0,0,0.07)',
    md:  '0 4px 12px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
    lg:  '0 8px 24px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)',
    xl:  '0 16px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05)',
  },

  // ─── Transiciones ────────────────────────────────────────────────────────────
  transition: {
    fast:   '150ms ease',
    normal: '250ms ease',
    slow:   '400ms ease',
  },

  // ─── Breakpoints ─────────────────────────────────────────────────────────────
  breakpoints: {
    mobile:  '480px',
    tablet:  '768px',
    desktop: '1024px',
    wide:    '1280px',
  },

  // ─── Z-Index ─────────────────────────────────────────────────────────────────
  zIndex: {
    base:     0,
    raised:   10,
    dropdown: 100,
    sticky:   200,
    overlay:  300,
    modal:    400,
    toast:    500,
  },
}

export default theme
