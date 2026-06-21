# GreenSpark

**Equipo:** HackHeroes · **Mención:** Energía · **Santa Cruz de la Sierra, Bolivia**

**2.º lugar:** Build With AI 2026 · Google Developer Group · 59 grupos / 270 participantes

**Dossier técnico:** laboratorio bioeléctrico asistido por IA.

> Convertimos residuos bioorgánicos en decisiones energéticas medibles: investigamos con MFC, validamos con datos y escalamos cuando la evidencia lo justifica.

## Equipo

| Nombre | Imagen |
|---|---|
| Cesar Sebastian Zambrana Ventura | `assets/profiles/cesar.jpg` |
| Emanuel Justiniano Peralta | `assets/profiles/emanuel.jpeg` |
| Fabian Serrano Catari | `assets/profiles/fabian.jpg` |
| Juan David Mercado Montenegro | `assets/profiles/juan.jpg` |
| Raquel Sahonero Salas | `assets/profiles/raquel.jpeg` |
| Thiago Andre Moreno Velasco | `assets/profiles/thiago.jpg` |

## ¿Qué es GreenSpark?

GreenSpark es una plataforma de simulación asistida por IA que ayuda a universidades, colegios y empresas a investigar cómo convertir residuos bioorgánicos en electricidad mediante celdas de combustible microbianas (MFC) antes de invertir en infraestructura física.

## El problema

El obstáculo no es solo la tecnología: es la falta de datos locales. Las instituciones que quieren ser sostenibles no saben qué residuos funcionan mejor, cuánta energía podrían generar ni cuándo tiene sentido escalar. Sin esa información, cualquier inversión es un salto al vacío.

| Indicador | Valor | Contexto |
|---|---:|---|
| Residuos orgánicos compostables en Santa Cruz | 971 t/día | Cálculo: 1.909,86 t/día × 50,84% = 970,97 (PMGIRS 2023, GAMSC). Es contexto municipal, no residuo capturable automáticamente. |
| Fracción orgánica compostable del flujo total | 50,84% | Dato publicado por el GAMSC. Justifica investigar valorización, no atribuir automáticamente un rendimiento. |
| Capacidad de la planta municipal de compostaje | 7 t/día | Inaugurada en mayo de 2026 (Swisscontact). Demuestra avance, pero deja rutas complementarias por explorar. |
| Residuos bioorgánicos en el Mercado Nuevo Abasto | 20 t/día | Swisscontact. La existencia de generadores concentrados facilita pilotos; cada piloto debe pesar su propio sustrato. |

## La solución

Simulador inteligente que sigue este flujo:

1. La institución registra un escenario: tipo de residuo, humedad, pH, temperatura y configuración del reactor.
2. La IA compara configuraciones: potencia proyectada, estabilidad esperada y nivel de confianza.
3. El sistema recomienda el siguiente experimento: qué mezcla probar primero, variables críticas y qué medir.
4. El panel traduce los resultados: residuo aprovechado, energía proyectada y avance de sostenibilidad.
5. El agente explicativo redacta el reporte: lenguaje comprensible, sin inventar cifras y con trazabilidad.

## Honestidad técnica

Cada resultado se etiqueta. La IA no reemplaza mediciones físicas: ayuda a decidir cuál hacer primero.

| Etiqueta | Uso |
|---|---|
| `SIMULADO` | Proyección: modelo sobre escenarios de literatura. No es evidencia física. |
| `MEDIDO` | Evidencia: telemetría del reactor físico en fase piloto. Reemplaza supuestos gradualmente. |
| `META EXPLORATORIA` | Hipótesis: objetivo a validar. No es ahorro garantizado ni resultado observado. |

## IA aplicada

Estrategia: **baseline primero, complejidad después**. La IA se justifica solo si mejora la priorización frente a una regla simple.

| Componente | Función |
|---|---|
| Baseline | Regresión lineal interpretable. Referencia para comparar candidatos. |
| Modelos candidatos | Random Forest y Gradient Boosting (`scikit-learn`). Selección solo si reducen el error de forma consistente (MAE, RMSE, R² con validación cruzada). |
| Recomendador | Ordena experimentos con criterios explícitos y audibles: potencia, estabilidad, disponibilidad local, costo, incertidumbre y calidad del dato. La institución decide. |
| LLM opcional (API) | Traduce resultados estructurados a lenguaje institucional. No calcula impacto crítico: recibe cifras ya procesadas por el backend. Si falta un dato, lo declara. Fallback determinístico si falla. |

## Arquitectura

Los cálculos críticos viven en el backend. El LLM recibe resultados ya procesados y los traduce. Si falla, el sistema responde igual con datos determinísticos.

```text
Navegador
  ↓
Frontend React: landing + consola de simulación
  ↓ HTTPS / JSON
API FastAPI: validación · orquestación · endpoints
  ├─ Validación física: rechaza datos fuera de rango
  ├─ Baseline + ML: regresión lineal · Random Forest · Gradient Boosting
  ├─ Recomendador: ordena experimentos con criterios visibles
  ├─ SQLite: escenarios · predicciones · trazabilidad
  └─ LLM opcional (API): solo explica, nunca calcula
```

En una fase posterior, sensores físicos en el reactor alimentarán datos reales al mismo pipeline, reemplazando gradualmente los escenarios simulados.

## Stack propuesto

Stack del producto (simulador), no de este sitio estático. Versión a fijar al implementar.

| Capa | Tecnología | Para qué |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite | Interfaz de simulación y landing |
| Routing | React Router v6 | Navegación entre vistas |
| Backend | Python + FastAPI | API REST, validación y orquestación |
| Base de datos | SQLite + SQLAlchemy | Escenarios, predicciones y trazabilidad |
| Datos y ML | pandas + scikit-learn | Preparación de datos y modelos predictivos |
| IA explicativa | LLM vía API (opcional) | Reportes institucionales en lenguaje natural |

## Pitch y documentos

El repositorio incluye el documento unificado y el video del pitch.

- [Documento unificado (PDF)](../../docs/entregables_obligatorios/GreenSpark_documento_unificado_renderizado.pdf)
- [Video del pitch](../../docs/pitch/PITCH.MP4)
