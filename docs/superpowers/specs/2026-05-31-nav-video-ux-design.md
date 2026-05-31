# Nav UX + Video Player Refactor — Design Spec
Date: 2026-05-31

## 1. Nav — Aparece al llegar al CTA

**Problema:** La barra de navegación fija interrumpe la experiencia cinemática del hero y estorba durante el scroll.

**Solución:** La nav es invisible hasta que el usuario llega a `CtaSection`. Al entrar en el viewport, hace fade-in con slide desde arriba. Una vez visible, se queda.

**Comportamiento:**
- Estado inicial: `opacity: 0`, `pointer-events: none`, `transform: translateY(-8px)`
- Trigger: `IntersectionObserver` sobre el elemento con `id="cta"`
- Al activarse: transición suave a `opacity: 1`, `pointer-events: auto`, `transform: translateY(0)` (~400ms)
- El fondo blur (`nav--solid`) entra directamente (no hay estado transparente porque ya fue invisible)
- Una vez visible, no se vuelve a ocultar

**Archivos afectados:**
- `apps/web/src/landing/components/Nav.tsx` — reemplazar lógica `solid` con `visible` + `IntersectionObserver`
- `apps/web/src/landing/landing.css` — agregar `.nav--hidden` y transición de aparición
- `apps/web/src/landing/sections/CtaSection.tsx` — agregar `id="cta"` al elemento raíz

## 2. Video Player — Performance y bugs

**Problemas identificados:**
1. `preload="auto"` descarga todo el video al cargar la página (bandwidth costoso)
2. `hero__video-placeholder` muestra texto "hero.mp4" — parece entorno de desarrollo
3. Estado inicial `muted: false` no refleja el atributo `muted` real del elemento `<video>`
4. Segundo `useLayoutEffect` para `onEnded` no necesita medir el DOM — debería ser `useEffect`
5. La etiqueta de texto "Click para reproducir con sonido" puede eliminarse — el botón play es suficiente

**Soluciones:**
1. Cambiar `preload="auto"` → `preload="metadata"` (solo carga duración/dimensiones)
2. Eliminar `hero__video-placeholder` y su CSS asociado
3. Cambiar `useState(false)` del muted → `useState(true)` (el video arranca con `muted`)
4. Cambiar segundo `useLayoutEffect` → `useEffect`
5. Eliminar `.hero__play-label` del JSX y su CSS

**Archivos afectados:**
- `apps/web/src/landing/sections/HeroCinematic.tsx`
- `apps/web/src/landing/landing.css` — eliminar `.hero__video-placeholder` y `.hero__play-label`
