# TeatroHub — Design System

Sistema de diseño basado en una paleta de **calidez teatral**: Rojo Coral, Verde Salvia y Amarillo Dorado.

---

## Estructura de archivos

```
src/
├── styles/
│   ├── theme.js        ← Tokens en JS (fuente de verdad)
│   └── globals.css     ← Variables CSS + reset + utilidades
└── components/
    └── common/
        ├── Button.jsx
        ├── Card.jsx
        ├── Badge.jsx
        └── DesignSystemDemo.jsx   ← Página de referencia visual
```

---

## Cómo usar `theme.js` en componentes

```jsx
import theme from '../../styles/theme'

function MiComponente() {
  return (
    <div style={{
      background: theme.colors.backgrounds.coral,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      fontFamily: theme.typography.fontFamily,
      color: theme.colors.textPrimary,
    }}>
      Hola TeatroHub
    </div>
  )
}
```

Las variables CSS en `globals.css` replican todos los tokens para uso en `.css` / `className`:

```css
.mi-clase {
  background: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-lg);
}
```

---

## Paleta de colores

### Primario — Rojo Coral `#E74C3C`
Energía, acción, urgencia. Usar en:
- Botones CTA principales (`Reservar`, `Inscribirse`)
- Indicadores de error (con fondo `#FDECEA`)
- Acentos de hover en navegación activa
- Íconos de alerta o notificación

| Token JS              | Variable CSS              | Valor     |
|-----------------------|---------------------------|-----------|
| `colors.primary`      | `--color-primary`         | `#E74C3C` |
| `colors.primaryLight` | `--color-primary-light`   | `#EE6B5E` |
| `colors.primaryDark`  | `--color-primary-dark`    | `#C0392B` |
| `colors.primaryXLight`| `--color-primary-xl`      | `#FDECEA` |

### Secundario — Verde Salvia `#6B8C7E`
Elegancia, calma, naturaleza. Usar en:
- Botones secundarios (`Ver más`, `Filtrar`)
- Etiquetas de categoría de talleres
- Fondos de secciones de apoyo (`backgrounds.sage`)
- Iconografía decorativa

| Token JS               | Variable CSS               | Valor     |
|------------------------|----------------------------|-----------|
| `colors.secondary`     | `--color-secondary`        | `#6B8C7E` |
| `colors.secondaryLight`| `--color-secondary-light`  | `#8AA89C` |
| `colors.secondaryDark` | `--color-secondary-dark`   | `#4F6E61` |
| `colors.secondaryXLight`| `--color-secondary-xl`    | `#EBF2EF` |

### Accent — Amarillo Dorado `#D4AF37`
Calidez, lujo, destacados. Usar en:
- Estrellas de rating y valoraciones
- Badges "Premium" o "Nuevo"
- Líneas decorativas y separadores
- Call-to-action secundarios de alto impacto

| Token JS            | Variable CSS            | Valor     |
|---------------------|-------------------------|-----------|
| `colors.accent`     | `--color-accent`        | `#D4AF37` |
| `colors.accentBright`| `--color-accent-bright`| `#F4D03F` |
| `colors.accentDark` | `--color-accent-dark`   | `#B8960C` |
| `colors.accentXLight`| `--color-accent-xl`    | `#FDF9E7` |

### Fondos suaves

| Token JS                       | CSS                  | Uso                          |
|--------------------------------|----------------------|------------------------------|
| `colors.backgrounds.coral`     | `--color-bg`         | Fondo general de la app      |
| `colors.backgrounds.sage`      | `--color-bg-sage`    | Secciones alternas (features)|
| `colors.backgrounds.gold`      | `--color-bg-gold`    | Secciones de destacados      |
| `colors.surface`               | `--color-surface`    | Cards, modals, dropdowns     |

### Neutrales

| Token JS           | Valor     | Uso                              |
|--------------------|-----------|----------------------------------|
| `colors.black`     | `#1A1A1A` | Títulos, texto principal         |
| `colors.gray`      | `#666666` | Texto secundario, labels         |
| `colors.grayLight` | `#999999` | Texto muted, placeholders        |
| `colors.beige`     | `#F5F1E8` | Fondo alternativo neutro cálido  |
| `colors.border`    | `#E8E3DA` | Bordes de cards y separadores    |

### Semánticos (estados del sistema)

```js
theme.colors.semantic = {
  success: '#2E7D32',  successBg: '#E8F5E9',
  error:   '#C62828',  errorBg:   '#FFEBEE',
  warning: '#E65100',  warningBg: '#FFF3E0',
  info:    '#1565C0',  infoBg:    '#E3F2FD',
}
```

### Niveles de taller

```js
theme.colors.nivel = {
  principiante: '#2E7D32',  principianteBg: '#E8F5E9',
  intermedio:   '#E65100',  intermedioBg:   '#FFF3E0',
  avanzado:     '#C62828',  avanzadoBg:     '#FFEBEE',
}
```

---

## Tipografía

Dos familias de fuentes para crear jerarquía visual:

| Familia              | Token                         | Uso                              |
|----------------------|-------------------------------|----------------------------------|
| Inter (sans-serif)   | `typography.fontFamily`       | Cuerpo de texto, UI, labels      |
| Playfair Display     | `typography.fontFamilyDisplay`| Títulos principales, hero, H1    |

### Escala de tamaños

| Token          | Rem      | px  | Uso típico                    |
|----------------|----------|-----|-------------------------------|
| `sizes.xs`     | 0.75rem  | 12  | Etiquetas, metadatos, badges  |
| `sizes.sm`     | 0.875rem | 14  | Texto secundario              |
| `sizes.base`   | 1rem     | 16  | Cuerpo de texto               |
| `sizes.lg`     | 1.125rem | 18  | Subtítulos, descripciones     |
| `sizes.xl`     | 1.25rem  | 20  | Títulos de sección            |
| `sizes.2xl`    | 1.5rem   | 24  | Títulos de página             |
| `sizes.3xl`    | 1.875rem | 30  | Display pequeño               |
| `sizes.4xl`    | 2.25rem  | 36  | Display mediano               |
| `sizes.5xl`    | 3rem     | 48  | Hero headline                 |
| `sizes.6xl`    | 3.75rem  | 60  | Hero grande (landing)         |

### Pesos

| Token                      | Valor | Uso                          |
|----------------------------|-------|------------------------------|
| `weights.normal`           | 400   | Cuerpo de texto              |
| `weights.medium`           | 500   | Etiquetas de UI              |
| `weights.semibold`         | 600   | Botones, badges, nav         |
| `weights.bold`             | 700   | Títulos, headings            |
| `weights.extrabold`        | 800   | Hero, display impactante     |

---

## Componentes reutilizables

### `<Button>`

```jsx
import Button from '../components/common/Button'

// Variantes disponibles
<Button variante="primary">Reservar taller</Button>
<Button variante="secondary">Ver más</Button>
<Button variante="accent">⭐ Destacado</Button>
<Button variante="outline">Contactar</Button>
<Button variante="outlineSage">Explorar</Button>
<Button variante="ghost">Cancelar</Button>
<Button variante="warm">Únete ahora</Button>
<Button variante="danger">Eliminar cuenta</Button>

// Tamaños
<Button tamano="sm">Pequeño</Button>
<Button tamano="md">Mediano (default)</Button>
<Button tamano="lg">Grande</Button>
<Button tamano="xl">Extra grande</Button>

// Estados
<Button cargando>Procesando...</Button>
<Button disabled>No disponible</Button>
<Button fullWidth>Ocupa todo el ancho</Button>
```

**Props:**

| Prop        | Tipo      | Default     | Descripción                                |
|-------------|-----------|-------------|--------------------------------------------|
| `variante`  | string    | `'primary'` | Estilo visual del botón                    |
| `tamano`    | string    | `'md'`      | Tamaño del botón                           |
| `cargando`  | boolean   | `false`     | Muestra spinner y desactiva el botón       |
| `disabled`  | boolean   | `false`     | Deshabilita el botón                       |
| `fullWidth` | boolean   | `false`     | El botón ocupa el 100% del ancho del padre |
| `onClick`   | function  | —           | Handler de click                           |
| `type`      | string    | `'button'`  | Tipo HTML del botón                        |
| `style`     | object    | `{}`        | Estilos inline adicionales                 |

---

### `<Card>`

```jsx
import Card from '../components/common/Card'

// Variantes de fondo
<Card variante="default">Tarjeta estándar</Card>
<Card variante="coral">Sección principal cálida</Card>
<Card variante="sage">Sección de apoyo verde</Card>
<Card variante="gold">Destacado premium</Card>
<Card variante="dark">Hero o CTA oscuro</Card>

// Con hover y click
<Card hover onClick={() => navigate('/taller/1')}>
  Tarjeta clicable con efecto hover
</Card>

// Padding personalizado
<Card padding="32px">Más espacio interno</Card>
```

**Props:**

| Prop       | Tipo      | Default      | Descripción                           |
|------------|-----------|--------------|---------------------------------------|
| `variante` | string    | `'default'`  | Paleta de color de la tarjeta         |
| `hover`    | boolean   | `false`      | Activa efecto de elevación en hover   |
| `onClick`  | function  | —            | Convierte la tarjeta en clicable      |
| `padding`  | string    | `'24px'`     | Padding interno CSS                   |
| `style`    | object    | `{}`         | Estilos inline adicionales            |

---

### `<Badge>`

```jsx
import Badge from '../components/common/Badge'

// Por color semántico
<Badge color="success">Disponible</Badge>
<Badge color="error">Completo</Badge>
<Badge color="warning">Últimos lugares</Badge>
<Badge color="info">Nuevo</Badge>

// Por paleta principal
<Badge color="primary">Teatro</Badge>
<Badge color="secondary">Danza</Badge>
<Badge color="accent">⭐ Premium</Badge>
<Badge color="dark">Exclusivo</Badge>

// Por nivel de taller (uso especial)
<Badge nivel="principiante" />
<Badge nivel="intermedio" />
<Badge nivel="avanzado" />

// Tamaños
<Badge color="primary" size="xs">XS</Badge>
<Badge color="primary" size="sm">SM (default)</Badge>
<Badge color="primary" size="md">MD</Badge>
```

**Props:**

| Prop       | Tipo   | Default     | Descripción                                          |
|------------|--------|-------------|------------------------------------------------------|
| `color`    | string | `'default'` | Color semántico o de paleta                          |
| `nivel`    | string | —           | Si se pasa, usa la paleta de niveles de taller       |
| `size`     | string | `'sm'`      | Tamaño del badge                                     |
| `style`    | object | `{}`        | Estilos inline adicionales                           |

---

## Reglas de composición

### Jerarquía visual

1. **Un solo CTA primario por sección.** El Rojo Coral es potente; úsalo con mesura.
2. **Fondo → Superficie → Elemento.** `backgrounds.coral` → `surface` (blanco) → card content.
3. **Contraste de temperatura.** Alterna secciones cálidas (`coral`) con frescas (`sage`) para crear ritmo.

### Uso de fuentes

```
Playfair Display  → títulos H1, H2, nombres de talleres, hero text
Inter             → todo lo demás (labels, body, buttons, nav)
```

### Botones

| Situación                         | Variante recomendada |
|-----------------------------------|----------------------|
| Acción principal de la página     | `primary`            |
| Acción secundaria complementaria  | `secondary`          |
| Destacado especial / premium      | `accent`             |
| Acción destructiva                | `danger`             |
| Alternativa no destructiva        | `outline`            |
| Enlace discreto en formularios    | `ghost`              |
| CTA de alta emoción (hero)        | `warm`               |

### Sombras

Usar la sombra más pequeña que comunique la elevación:

| Elemento              | Sombra recomendada |
|-----------------------|--------------------|
| Input, badge, chip    | `shadow.xs`        |
| Card plana            | `shadow.sm`        |
| Card interactiva      | `shadow.md`        |
| Modal, dropdown       | `shadow.lg`        |
| Hero card, feature    | `shadow.xl`        |
| Botón CTA principal   | `shadow.primary`   |

### Gradientes

```js
// Para CTAs de alto impacto (rojo)
background: theme.colors.gradient

// Para elementos con doble energía (rojo + dorado)
background: theme.colors.gradientWarm

// Para secciones de fondo hero oscuro
background: theme.colors.gradientHero

// Para fondos suaves de secciones
background: theme.colors.gradientSubtle
```

### Breakpoints

```js
// Media queries con los tokens del theme
const isTablet = window.matchMedia(`(max-width: ${theme.breakpoints.tablet})`).matches

// En CSS
@media (max-width: 768px) { ... }   /* tablet */
@media (max-width: 1024px) { ... }  /* desktop */
```

---

## Ver el Design System

Renderiza `<DesignSystemDemo />` en cualquier ruta de desarrollo para ver toda la paleta en uso:

```jsx
// En App.jsx (solo desarrollo)
import DesignSystemDemo from './components/common/DesignSystemDemo'

<Route path="/design-system" element={<DesignSystemDemo />} />
```

---

## Convenciones

- Todos los colores vienen de `theme.js` — nunca hardcodes hexadecimales en componentes.
- Usa `theme.spacing.*` para márgenes y paddings en lugar de píxeles sueltos.
- Animaciones de entrada: clase `animate-in` o `animate-fade` de `globals.css`.
- Skeleton loaders: clase `skeleton` de `globals.css`.
- Los estilos de hover en cards y botones se aplican con las clases `th-card-hover` y `th-btn-hover`.
