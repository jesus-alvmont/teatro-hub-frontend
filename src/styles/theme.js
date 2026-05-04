/**
 * Design System — TeatroHub
 * Tokens de diseño centralizados. Importar en componentes:
 *   import theme from '../../styles/theme'
 *
 * Paleta inspirada en el teatro: calidez, energía y elegancia.
 */

const theme = {
  // ─── Colores ────────────────────────────────────────────────────────────────
  colors: {
    // Primario — Rojo Coral: energía, CTAs, acciones principales
    primary: '#E74C3C',
    primaryLight: '#EE6B5E',
    primaryDark: '#C0392B',
    primaryXLight: '#FDECEA',

    // Secundario — Verde Salvia: elegancia, categorías, acentos de apoyo
    secondary: '#6B8C7E',
    secondaryLight: '#8AA89C',
    secondaryDark: '#4F6E61',
    secondaryXLight: '#EBF2EF',

    // Accent — Amarillo Dorado: calidez, destacados, ratings, badges premium
    accent: '#D4AF37',
    accentBright: '#F4D03F',
    accentDark: '#B8960C',
    accentXLight: '#FDF9E7',

    // Fondos suaves por familia de color
    backgrounds: {
      coral: '#FFF8F6',   // fondo principal, tono cálido
      sage: '#F5F9F7',    // fondo secciones secundarias
      gold: '#FFFAF5',    // fondo destacados dorados
      white: '#FFFFFF',
    },

    // Superficies de UI
    surface: '#FFFFFF',
    surfaceHover: '#FFF8F6',
    surfaceOverlay: 'rgba(26, 26, 26, 0.5)',

    // Neutrales
    black: '#1A1A1A',
    gray: '#666666',
    grayLight: '#999999',
    grayXLight: '#CCCCCC',
    beige: '#F5F1E8',
    white: '#FFFFFF',

    // Texto
    textPrimary: '#1A1A1A',
    textSecondary: '#666666',
    textMuted: '#999999',
    textInverse: '#FFFFFF',
    textAccent: '#D4AF37',

    // Bordes
    border: '#E8E3DA',
    borderFocus: '#E74C3C',
    borderSubtle: '#F0EBE3',

    // Gradientes de marca
    gradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
    gradientWarm: 'linear-gradient(135deg, #E74C3C 0%, #D4AF37 100%)',
    gradientSage: 'linear-gradient(135deg, #6B8C7E 0%, #4F6E61 100%)',
    gradientSubtle: 'linear-gradient(135deg, #FFF8F6 0%, #FDF9E7 100%)',
    gradientHero: 'linear-gradient(160deg, #1A1A1A 0%, #2D1F1F 50%, #3D2B1F 100%)',

    // Semánticos — estados del sistema
    semantic: {
      success: '#2E7D32',
      successBg: '#E8F5E9',
      successBorder: '#81C784',
      error: '#C62828',
      errorBg: '#FFEBEE',
      errorBorder: '#EF9A9A',
      warning: '#E65100',
      warningBg: '#FFF3E0',
      warningBorder: '#FFCC02',
      info: '#1565C0',
      infoBg: '#E3F2FD',
      infoBorder: '#90CAF9',
    },

    // Niveles de dificultad de talleres
    nivel: {
      principiante: '#2E7D32',
      principianteBg: '#E8F5E9',
      intermedio: '#E65100',
      intermedioBg: '#FFF3E0',
      avanzado: '#C62828',
      avanzadoBg: '#FFEBEE',
    },
  },

  // ─── Tipografía ─────────────────────────────────────────────────────────────
  typography: {
    // Fuentes — Inter para UI, Playfair para títulos de impacto
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    fontFamilyDisplay: "'Playfair Display', 'Georgia', serif",

    sizes: {
      xs: '0.75rem',    // 12px — etiquetas, metadatos
      sm: '0.875rem',   // 14px — texto secundario, badges
      base: '1rem',     // 16px — cuerpo de texto
      lg: '1.125rem',   // 18px — subtítulos, destacados
      xl: '1.25rem',    // 20px — títulos de sección
      '2xl': '1.5rem',  // 24px — títulos de página
      '3xl': '1.875rem',// 30px — display pequeño
      '4xl': '2.25rem', // 36px — display mediano
      '5xl': '3rem',    // 48px — hero headline
      '6xl': '3.75rem', // 60px — hero grande
    },

    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },

    lineHeights: {
      tight: '1.2',
      snug: '1.35',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },

    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.2em',
    },
  },

  // ─── Espaciado ──────────────────────────────────────────────────────────────
  spacing: {
    xs:   '4px',
    sm:   '8px',
    md:   '16px',
    lg:   '24px',
    xl:   '32px',
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
    '2xl': '24px',
    full: '9999px',
  },

  // ─── Sombras ────────────────────────────────────────────────────────────────
  shadow: {
    xs:  '0 1px 2px rgba(26,26,26,0.06)',
    sm:  '0 1px 4px rgba(26,26,26,0.08)',
    md:  '0 4px 12px rgba(26,26,26,0.08), 0 1px 4px rgba(26,26,26,0.04)',
    lg:  '0 8px 24px rgba(26,26,26,0.10), 0 2px 8px rgba(26,26,26,0.05)',
    xl:  '0 16px 40px rgba(26,26,26,0.12), 0 4px 12px rgba(26,26,26,0.06)',
    primary: '0 8px 24px rgba(231,76,60,0.30)',
    secondary: '0 8px 24px rgba(107,140,126,0.25)',
    accent: '0 8px 24px rgba(212,175,55,0.30)',
  },

  // ─── Transiciones ───────────────────────────────────────────────────────────
  transition: {
    fast:   '150ms ease',
    normal: '250ms ease',
    slow:   '400ms ease',
    bounce: '300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // ─── Breakpoints ────────────────────────────────────────────────────────────
  breakpoints: {
    mobile:  '480px',   // móviles pequeños
    tablet:  '768px',   // tablets y móviles grandes
    desktop: '1024px',  // escritorio
    wide:    '1280px',  // pantallas anchas
    ultrawide: '1536px',
  },

  // ─── Z-Index ────────────────────────────────────────────────────────────────
  zIndex: {
    base:    0,
    raised:  10,
    dropdown: 100,
    sticky:  200,
    overlay: 300,
    modal:   400,
    toast:   500,
  },
}

export default theme
