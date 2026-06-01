# GreenSpark

**Equipo:** HackHeroes &nbsp;·&nbsp; **Hackathon:** Build With AI 2026 &nbsp;·&nbsp; **Mención:** Energía &nbsp;·&nbsp; **Santa Cruz de la Sierra, Bolivia**


---

## ¿Qué es GreenSpark?

GreenSpark es una plataforma de simulación asistida por IA que ayuda a universidades, colegios y empresas a investigar cómo convertir residuos bioorgánicos en electricidad, antes de invertir en infraestructura física.

El foco está en las celdas de combustible microbianas (MFC): reactores que generan electricidad directamente a partir de materia orgánica usando bacterias. GreenSpark simula distintas configuraciones, compara resultados y recomienda qué experimento conviene validar primero.

https://github.com/user-attachments/assets/2c433b2f-e7cf-4985-b9a2-fa3e3978e09a


---

## El problema

Santa Cruz de la Sierra genera aproximadamente **971 toneladas de residuos orgánicos por día**. La mayoría termina en disposición final sin aprovecharse como recurso energético.

El obstáculo no es solo la tecnología: es la falta de datos locales. Las instituciones que quieren ser más sostenibles no saben qué residuos funcionan mejor, cuánta energía podrían generar ni cuándo tiene sentido escalar. Sin esa información, cualquier inversión es un salto al vacío.

[GreenSpark_documento_unificado_renderizado.pdf](https://github.com/user-attachments/files/28438540/GreenSpark_documento_unificado_renderizado.pdf)


---

## La solución

GreenSpark resuelve eso con un simulador inteligente que sigue este flujo:

```
1. La institución registra un escenario
   → tipo de residuo · humedad · pH · temperatura · configuración del reactor

2. La IA compara configuraciones
   → potencia proyectada · estabilidad esperada · nivel de confianza

3. El sistema recomienda el siguiente experimento
   → qué mezcla probar primero · variables críticas · qué medir

4. El panel traduce los resultados
   → residuo aprovechado · energía proyectada · avance de sostenibilidad

5. El agente explicativo redacta el reporte
   → lenguaje comprensible · sin inventar cifras · trazable
```

Todo resultado está etiquetado claramente como `SIMULADO`, `MEDIDO` o `META EXPLORATORIA`. La IA no reemplaza mediciones físicas: ayuda a decidir cuál hacer primero.



https://github.com/user-attachments/assets/47896bbd-2a4e-4e4a-9f20-2a9a6a4abf13


<video src="./docs/pitch/PITCH.MP4" controls width="100%">
  Tu navegador no puede reproducir el video. Puedes verlo directamente desde
  <a href="./docs/pitch/PITCH.MP4">este enlace</a>.
</video>

---

## Arquitectura

```
[ Navegador ]
      │
      ▼
[ Frontend React ]          ← landing + consola de simulación
      │  HTTPS / JSON
      ▼
[ API FastAPI ]              ← validación, orquestación, endpoints
      ├──► [ Validación física ]     ← rechaza datos fuera de rango
      ├──► [ Baseline + ML ]         ← regresión lineal, Random Forest, Gradient Boosting
      ├──► [ Recomendador ]          ← ordena experimentos con criterios visibles
      ├──► [ SQLite ]                ← escenarios, predicciones, trazabilidad
      └──► [ LLM opcional (API) ]    ← solo explica, nunca calcula
```

**Principio de diseño:** los cálculos críticos viven en el backend. El LLM recibe resultados ya procesados y los traduce a lenguaje institucional. Si falla, el sistema responde igual con los datos determinísticos.

En una fase posterior, sensores físicos en el reactor alimentarán datos reales al mismo pipeline, reemplazando gradualmente los escenarios simulados.

---

## Stack tecnológico

| Capa | Tecnología | Para qué |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite | Interfaz de simulación y landing |
| Animaciones | GSAP + Lenis | Scroll fluido y transiciones |
| Routing | React Router v6 | Navegación entre vistas |
| Backend | Python + FastAPI | API REST, validación y orquestación |
| Base de datos | SQLite + SQLAlchemy | Escenarios, predicciones y trazabilidad |
| Datos y ML | pandas + scikit-learn | Preparación de datos y modelos predictivos |
| IA explicativa | LLM vía API (opcional) | Reportes institucionales en lenguaje natural |

---

## Integrantes

| Nombre |
|---|
| Cesar Sebastian Zambrana Ventura |
| Emanuel Justiniano Peralta |
| Fabian Serrano Catari |
| Juan David Mercado Montenegro |
| Raquel Sahonero Salas |
| Thiago Andre Moreno Velasco |

---
