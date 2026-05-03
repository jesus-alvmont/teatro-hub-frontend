// Tokens de diseño centralizados para TeatroHub
// Importar en componentes: import theme from '../../styles/theme'

const theme = {
  colors: {
    // Primarios — paleta púrpura
    primary: '#7c3aed',
    primaryLight: '#8b5cf6',
    primaryDark: '#5b21b6',
    primaryXLight: '#ede9fe',
    accent: '#aa3bff',

    // Gradiente de marca
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSubtle: 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 100%)',

    // Superficies
    background: '#f8f7ff',
    surface: '#ffffff',
    surfaceHover: '#faf9ff',

    // Texto
    textPrimary: '#1a1a2e',
    textSecondary: '#4a4a6a',
    textMuted: '#9ca3af',
    textInverse: '#ffffff',

    // Bordes
    border: '#e2e0f0',
    borderFocus: '#7c3aed',

    // Semánticos
    success: '#10b981',
    successBg: '#d1fae5',
    error: '#ef4444',
    errorBg: '#fee2e2',
    warning: '#f59e0b',
    warningBg: '#fef3c7',
    info: '#3b82f6',
    infoBg: '#dbeafe',

    // Niveles de dificultad
    principiante: '#10b981',
    intermedio: '#f59e0b',
    avanzado: '#ef4444',
  },

  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",

    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },

    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },

  shadow: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 6px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
    lg: '0 10px 25px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
    xl: '0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)',
    primary: '0 8px 25px rgba(124, 58, 237, 0.3)',
  },

  transition: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

export default theme
