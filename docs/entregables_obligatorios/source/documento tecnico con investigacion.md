# GreenSpark: Documento técnico con investigación

**Equipo:** HackHeroes
**Hackathon:** Build With AI 2026 — Santa Cruz de la Sierra, Bolivia
**Mención:** Energía
**Fecha:** 30 de mayo de 2026

> **En una frase:** GreenSpark es una plataforma de IA que convierte los residuos orgánicos urbanos de Santa Cruz en energía rentable. Conecta a quienes los generan con plantas que pueden transformarlos en biogás o compost, predice su rendimiento energético, optimiza su recolección y certifica su impacto ambiental.

---

## 0. Nota de honestidad técnica

Este documento distingue de forma explícita tres tipos de información. Así cumple el punto 14 de los lineamientos, "no se permite falsificar funcionalidades de IA", y el criterio de calidad de fuentes:

- **[DATO]** — cifra de fuente oficial/académica verificable.
- **[ESTIMACIÓN]** — orden de magnitud calculado a partir de coeficientes de literatura; debe validarse con datos primarios de EMACRUZ, GAMSC e INE.
- **[SIMULADO]** — dato operativo generado para poblar la demo, como nombres de generadores y volúmenes diarios. La plataforma lo muestra con esta etiqueta.

Todas las cifras de energía, CO₂ e ingresos parten de los coeficientes de la **Sección 4**. Los demás entregables, como el análisis financiero, el impacto esperado y el Lean Canvas, utilizan los mismos valores.

---

## 1. Resumen ejecutivo

Santa Cruz de la Sierra es la capital agroindustrial de Bolivia y, al mismo tiempo, una ciudad que **entierra la mayor parte de sus residuos orgánicos** en el relleno sanitario de Normandía. Los restos de comida de restaurantes, supermercados, mercados, universidades y hoteles se descomponen sin control y **emiten metano (CH₄), un gas de efecto invernadero ~28 veces más potente que el CO₂** [DATO: IPCC AR5, GWP100 del metano]. La ciudad entierra energía y, además, contamina.

En paralelo, el departamento **ya cuenta con tecnología que convierte biomasa en electricidad y la vende a la red**. El ingenio Guabirá, en Montero, cogenera energía con bagazo de caña y entrega excedentes al Sistema Interconectado Nacional (SIN) [DATO: Guabirá / ENDE]. La conversión de residuos en energía **ya ocurre localmente, pero solo en grandes ingenios y con sus propios residuos**. Los residuos orgánicos urbanos, dispersos entre miles de generadores, quedan fuera porque **nadie los conecta, predice ni cuantifica**.

**GreenSpark cubre esa brecha mediante software e IA.** Es una plataforma B2B que:

1. Permite a un generador urbano registrar sus residuos orgánicos y **predecir al instante**, mediante IA, cuánto biogás, electricidad, compost y CO₂ evitado representan.
2. Lo **conecta y enruta** hacia la planta de biogás/compost más conveniente (optimización logística).
3. Entrega un **reporte de sostenibilidad (ESG)** automático y verificable: el producto por el que paga el cliente.

El MVP funciona **completamente mediante software, sin hardware**. Es demostrable, replicable y utiliza APIs, como DeepSeek para el agente conversacional. El hardware de conversión, como biodigestores o celdas de combustible microbianas, forma parte de la **visión a largo plazo** y no del producto actual.

---

## 2. Problema local y evidencia

### 2.1 El problema en una frase

En Santa Cruz se entierran o queman residuos orgánicos urbanos con valor energético. Este proceso emite metano porque **no existe una capa de inteligencia que conecte, prediga y cuantifique** la oportunidad entre generadores y transformadores.

### 2.2 Evidencia y contexto local

- **Composición del residuo:** en ciudades bolivianas la fracción orgánica de los residuos sólidos urbanos ronda el **55–60%** [DATO: estudios de caracterización de RSU en Bolivia / Ministerio de Medio Ambiente y Agua]. Es la fracción más grande y la que más metano genera en relleno.
- **Volumen:** Santa Cruz de la Sierra, con una población metropolitana superior a 1,7 millones, genera del orden de **~1.200–1.800 t/día de residuos sólidos** [ESTIMACIÓN, a validar con EMACRUZ/GAMSC]. Aplicando 55% ⇒ **~700–900 t/día de residuo orgánico** [ESTIMACIÓN].
- **Destino actual:** disposición final en el relleno de Normandía, con problemas conocidos de saturación y emisiones. La mayoría del orgánico **no se valoriza**.
- **Prueba de que la conversión funciona localmente:** Guabirá cogenera con bagazo y vende excedentes al SIN [DATO]. Existen además biodigestores en el agro cruceño (granjas porcinas/avícolas). Falta la pieza urbana y la inteligencia que la articule.

### 2.3 Usuarios y beneficiarios

- **Generadores urbanos: cliente que paga.** Incluye cadenas de restaurantes, supermercados, universidades, hoteles y mercados. Hoy *pagan* por desechar sus residuos orgánicos y enfrentan una presión creciente por reportar sostenibilidad.
- **Plantas de biogás/compost y recicladores: lado de la oferta.** Necesitan un flujo constante y predecible de sustrato; actualmente lo consiguen de manera informal.
- **Ciudad y medio ambiente:** menos metano, menos saturación del relleno, energía local.

---

## 3. Hipótesis principales a validar

1. **H1: dolor.** Los grandes generadores urbanos de Santa Cruz pagan por desechar sus residuos orgánicos o enfrentan presión por reportar ESG. Pagarían por una solución que reduzca sus costos y entregue ese reporte.
2. **H2: oferta.** Existen al menos tres plantas u operadores de biogás/compost en el área metropolitana dispuestos a recibir sustrato segregado y con capacidad ociosa.
3. **H3: viabilidad técnica.** Un modelo de IA puede predecir el rendimiento energético por sustrato con un error aceptable (<15%) y **mejor que una regla fija**, utilizando variables simples como tipo, volumen y estacionalidad.
4. **H4: viabilidad del negocio.** El ahorro en disposición y el valor del reporte ESG superan el precio de la suscripción. La propuesta de valor es positiva.

> Durante la hackathon validamos H3 con un modelo funcional. H1, H2 y H4 se respaldan mediante investigación de mercado local y deben validarse con entrevistas como siguiente paso.

---

## 4. Modelo cuantitativo (coeficientes canónicos)

> Estos coeficientes son la **única fuente numérica** del proyecto. Son valores **referenciales de literatura** y deben refinarse mediante mediciones reales.

| Conversión | Valor usado | Tipo | Base |
| --- | --- | --- | --- |
| Residuo orgánico → biogás | **~100 m³ biogás / t** | [ESTIMACIÓN] | Potencial bioquímico de metano (BMP) de residuos de comida; literatura FAO/IEA Bioenergy |
| Contenido de metano del biogás | **~60% CH₄** | [DATO] | Rango típico de digestión anaerobia |
| Biogás → electricidad (motor CHP) | **~2 kWh elec / m³ biogás** | [ESTIMACIÓN] | ~6 kWh térmicos/m³ × ~35% efic. eléctrica |
| Residuo orgánico → compost | **~0,3 t compost / t** | [ESTIMACIÓN] | Rendimiento típico de compostaje |
| CO₂e evitado por desvío de relleno | **~0,5 t CO₂e / t** | [ESTIMACIÓN] | Evita CH₄ de relleno + sustituye electricidad fósil |

**Cadena de valor de 1 tonelada de residuo orgánico:**

```text
1 t residuo orgánico
   → ~100 m³ biogás (60% CH₄)
       → ~200 kWh de electricidad   (≈ consumo de un hogar cruceño por ~1 mes)
   + ~0,3 t de compost
   + ~0,5 t CO₂e evitadas
```

### 4.1 Potencial para la ciudad

Si GreenSpark capturara solo el **10%** de los residuos orgánicos urbanos, ~80 t/día [ESTIMACIÓN basada en la Sección 2.2]:

- Energía: 80 t/día × 200 kWh = **16.000 kWh/día ≈ 5,8 GWh/año**.
- CO₂ evitado: 80 t/día × 0,5 = **40 t CO₂e/día ≈ 14.600 t CO₂e/año**.
- Compost: ~24 t/día de abono orgánico.

---

## 5. Evaluación crítica de viabilidad

| Idea | ¿Viable en MVP hackathon? | Decisión |
| --- | --- | --- |
| Celdas de combustible microbianas (MFC) que alimentan la red | **No.** Densidad de potencia en mW; requiere hardware y meses de cultivo | → Visión a largo plazo, no se vende hoy |
| Construir un biodigestor físico | **No.** Requiere obra, permisos, tiempo | → Lo operan socios/plantas existentes |
| **Plataforma de IA que predice, conecta y cuantifica** | **Sí.** Solo software + APIs, sin hardware | → **ESTE es el MVP** |
| Optimización de rutas de recolección | **Sí.** OR-Tools, librería abierta | → Incluido en MVP |
| Reporte ESG automatizado | **Sí.** Generación con LLM + datos | → Incluido (es lo que paga el cliente) |

> **Conclusión:** el valor defendible y demostrable en un día **no está en el hardware, sino en la inteligencia y la coordinación**. Por eso GreenSpark es una solución de software.

## 6. Solución recomendada

Consulta el detalle en [solución propuesta](<./solucion propuesto.md>).

Plataforma web B2B de dos lados:

- **Lado de la demanda: paga.** El generador urbano registra sus residuos, consulta una predicción de energía, CO₂ y valor económico, y recibe un reporte ESG.
- **Lado de la oferta:** las plantas de biogás/compost reciben un sustrato segregado, predecible y trazable.
- **Núcleo de IA:** predicción del rendimiento energético por sustrato, optimización logística de la recolección y agente conversacional "Asesor GreenSpark".

---

## 7. MVP para la hackathon

### 7.1 MVP: demostración del 31/05

- Portal del generador: creación de cuenta y registro de residuos (tipo, kg).
- Motor de IA: predicción instantánea de biogás, kWh, compost, CO₂ evitado y valor en Bs.
- Mapa: generadores, plantas y ruta de recolección optimizada mediante Leaflet, OpenStreetMap y OR-Tools.
- Panel de impacto agregado para la ciudad.
- Agente conversacional (DeepSeek API) que explica resultados y redacta el reporte ESG.

### 7.2 Piloto posterior: 1–3 meses

Integración con una planta real, entre 5 y 10 generadores reales, datos primarios y recolección real.

### 7.3 Visión escalable: más de 12 meses

Marketplace para varias ciudades, créditos de carbono e integración futura con hardware propio, como biodigestores modulares o I+D de MFC.

### 7.4 Datos utilizados en el MVP

El modelo se entrena con coeficientes BMP y variación sintética. La operación utiliza generadores **[SIMULADO]** basados en zonas reales de Santa Cruz, como el 4to anillo, Equipetrol, mercados y el campus UCB. La interfaz etiqueta todos los datos simulados.

## 8. Arquitectura tecnológica

Consulta el detalle en [arquitectura tecnológica](<./arquitectura tecnologica.md>).

```text
[ Generador urbano ]      [ Planta biogás/compost ]
        │                          │
        ▼                          ▼
┌─────────────────────────────────────────────┐
│  Frontend React (portal + panel + mapa)      │
└───────────────┬─────────────────────────────┘
                │ REST
┌───────────────▼─────────────────────────────┐
│  Backend FastAPI (Python)                    │
│  ├─ Motor de predicción (scikit-learn)       │
│  ├─ Optimizador de rutas (OR-Tools)          │
│  ├─ Generador de reportes ESG                │
│  └─ Agente conversacional → DeepSeek API     │
└───────────────┬─────────────────────────────┘
                │
        ┌───────▼────────┐   APIs externas:
        │ SQLite (datos) │   • DeepSeek (LLM)
        └────────────────┘   • Open-Meteo (clima/estacionalidad)
                             • OpenStreetMap/Leaflet (mapa)
```text

La solución no requiere hardware ni GPU y funciona con planes gratuitos. El documento de arquitectura detalla su despliegue.

## 9. Aplicación de IA

Consulta el detalle en [aplicación de IA](<./aplicacion de ia.md>).

Tres usos **reales y demostrables** de IA:

1. **Predicción de rendimiento energético:** regresión supervisada. Recibe tipo de residuo, volumen, humedad y estacionalidad. Devuelve m³ de biogás, kWh y CO₂ evitado. Se evalúa mediante MAE y RMSE frente a un baseline de coeficiente fijo. **La demo muestra que el modelo supera la regla fija** ante mezclas y estacionalidad.
2. **Optimización combinatoria** (OR-Tools, VRP) para ruteo de recolección.
3. **Agente conversacional** (DeepSeek API) que interpreta resultados, responde preguntas en lenguaje natural y **redacta el reporte ESG**.

---

## 10. Modelo de economía circular

```
Residuo orgánico (generador) → GreenSpark (predice + conecta + enruta)
   → Planta de biogás/compost
       → Energía/biogás (a la red o autoconsumo)
       → Compost (vuelve al agro cruceño)
       → CO₂ evitado (reporte ESG / futuros créditos de carbono)
   → El generador recibe reporte de impacto y baja su costo de disposición
```

El residuo deja de ser un costo y un pasivo ambiental y se vuelve un insumo energético trazable.

---

## 11. Documentos de análisis estratégico

- **FODA, PESTEL, Lean Canvas:** documentos dedicados.
- **Análisis financiero e impacto:** documentos dedicados, todos consistentes con los coeficientes de la Sección 4.

---

## 12. Riesgos, limitaciones y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| Coeficientes referenciales ≠ realidad local | Piloto con mediciones primarias; el modelo se reentrena con datos reales |
| Generadores no segregan en origen | Incorporación guiada, incentivo económico mediante ahorro y reporte ESG como argumento comercial |
| Oferta de plantas limitada | Empezar en zonas con planta/biodigestor cercano; sumar compostaje como salida |
| Dependencia de API externa (DeepSeek) | El núcleo de predicción y ruteo no depende del LLM; el agente tiene una alternativa documentada |
| Informalidad / cultura de reciclaje baja | Alianzas con cámaras (CAINCO), universidades y GAMSC; foco inicial B2B formal |

---

## 13. Narrativa para el pitch

- **Nombre:** GreenSpark.
- **Propuesta de valor:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad, en un clic."*
- **Problema (1 oración):** Santa Cruz entierra energía orgánica y emite metano porque nadie conecta ni cuantifica el residuo urbano.
- **Solución (1 oración):** Una plataforma de IA que predice cuánta energía rinde cada residuo, lo conecta con plantas y certifica el impacto.
- **Diferenciador:** GreenSpark es una **capa de inteligencia y coordinación** basada en datos, IA y red. No es una máquina, por lo que puede escalar como software.
- **Evidencia en la demo:** predicción en vivo + ruta optimizada en mapa + reporte ESG generado por el agente.

### 13.1 Objeciones probables del jurado

- *"¿Dónde está el hardware que genera energía?"* → No lo necesitamos: usamos la capacidad de transformación que **ya existe** (plantas/biodigestores). Nuestro valor es la inteligencia que la activa. El hardware propio es visión futura.
- *"¿La IA no es solo una regla de tres?"* → No: el modelo ajusta por mezcla, humedad y estacionalidad y supera de forma medible al coeficiente fijo. La demo muestra esta métrica.
- *"¿Hay comprador real?"* → Sí: el generador urbano ya paga por desechar y necesita reporte ESG; ese es el cliente ancla.

---

## 14. Próximos pasos

1. Validar H1/H2 con 5 entrevistas a generadores y 2 a plantas (semana 1 post-hackathon).
2. Piloto con 1 planta + 5 generadores reales (mes 1–3).
3. Reentrenar el modelo con datos primarios; medir error real.
4. Ronda semilla (~$15–25k) para piloto y primer equipo comercial.

---

## 15. Fuentes consultadas

> Estas fuentes deben enlazarse y verificarse en la versión final del repositorio. La lista distingue datos locales de fuentes regionales o internacionales.

- IPCC, *Fifth Assessment Report (AR5)* — potencial de calentamiento global del metano (GWP100 ≈ 28). [Internacional]
- IEA Bioenergy / FAO — potencial bioquímico de metano (BMP) de residuos de alimentos y digestión anaerobia. [Internacional]
- ENDE / Guabirá — cogeneración con bagazo y entrega de excedentes al SIN. [Local — verificar cifras exactas]
- EMACRUZ / Gobierno Autónomo Municipal de Santa Cruz (GAMSC) — generación y composición de RSU, relleno de Normandía. [Local — verificar cifras exactas]
- INE Bolivia — población del área metropolitana de Santa Cruz. [Nacional]
- Ministerio de Medio Ambiente y Agua — caracterización de residuos sólidos en Bolivia. [Nacional]

---

## 16. Decisión recomendada para la hackathon

- **Qué construir:** la plataforma web GreenSpark con el portal del generador, el motor de predicción, el mapa con ruteo optimizado, el panel de impacto y el agente conversacional.
- **Razón principal:** maximiza los 35 puntos de IA, es 100% demostrable sin hardware, replicable, escalable como SaaS y tiene un comprador que ya gasta dinero en el problema.
- **Imprescindible para el MVP:** registro de residuo → predicción de IA en vivo → emparejamiento + ruta en mapa → reporte ESG redactado por el agente.
- **Fuera del MVP:** hardware propio, créditos de carbono, aplicación ciudadana y despliegue en varias ciudades.
- **Demostración más convincente:** que un juez registre los residuos de su restaurante o universidad de referencia y vea en segundos los kWh, el CO₂ evitado, la ruta óptima y un reporte ESG redactado por la IA.
