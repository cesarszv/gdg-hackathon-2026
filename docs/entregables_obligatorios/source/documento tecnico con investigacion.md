# GreenSpark — Documento Técnico con Investigación

**Equipo:** HackHeroes
**Hackathon:** Build With AI 2026 — Santa Cruz de la Sierra, Bolivia
**Mención:** ENERGÍA
**Fecha:** 30 de mayo de 2026

> **Una frase:** GreenSpark es la plataforma de IA que convierte el residuo orgánico urbano de Santa Cruz en energía rentable, conectando a quienes lo generan con quienes pueden transformarlo en biogás/compost, prediciendo cuánta energía rinde cada residuo, optimizando su recolección y certificando el impacto ambiental.

---

## 0. Nota de honestidad técnica (leer primero)

Este documento distingue de forma explícita tres tipos de información, en cumplimiento del punto 14 de los lineamientos ("no se permite falsificar funcionalidades de IA") y del criterio de calidad de fuentes:

- **[DATO]** — cifra de fuente oficial/académica verificable.
- **[ESTIMACIÓN]** — orden de magnitud calculado por nosotros a partir de coeficientes de literatura; debe validarse con datos primarios (EMACRUZ, GAMSC, INE).
- **[SIMULADO]** — dato operativo generado para poblar la demo (nombres de generadores, volúmenes diarios). En la plataforma aparece marcado como tal.

Toda cifra de energía, CO₂ e ingresos de este proyecto nace de los coeficientes de la **Sección 4** y se reutiliza idéntica en el resto de entregables (financiero, impacto, Lean Canvas).

---

## 1. Resumen ejecutivo

Santa Cruz de la Sierra es la capital agroindustrial de Bolivia y, al mismo tiempo, una ciudad que **entierra la mayor parte de su residuo orgánico** en el relleno sanitario de Normandía. Ese residuo —restos de comida de restaurantes, supermercados, mercados, universidades y hoteles— se descompone sin control y **emite metano (CH₄), un gas de efecto invernadero ~28 veces más potente que el CO₂** [DATO: IPCC AR5, GWP100 del metano]. Es, literalmente, energía que se entierra y además contamina.

Paralelamente, en el departamento **ya existe tecnología que convierte biomasa en electricidad y la vende a la red**: el ingenio Guabirá (Montero) cogenera energía con bagazo de caña y entrega excedentes al Sistema Interconectado Nacional (SIN) [DATO: Guabirá / ENDE]. La conversión "residuo → energía" no es ciencia ficción en Santa Cruz: **ya ocurre, pero solo para los grandes ingenios y solo con sus propios residuos.** El residuo orgánico urbano, disperso entre miles de generadores, queda fuera porque **nadie lo conecta, lo predice ni lo cuantifica.**

**GreenSpark cierra esa brecha con software + IA.** Es una plataforma B2B que:
1. Permite a un generador urbano registrar su residuo orgánico y, con IA, **predecir al instante** cuánto biogás, electricidad, compost y CO₂ evitado representa.
2. Lo **conecta y enruta** hacia la planta de biogás/compost más conveniente (optimización logística).
3. Le entrega un **reporte de sostenibilidad (ESG)** automático y verificable —el entregable por el que el cliente paga.

El MVP es **100% software, sin hardware, demostrable y replicable**, y usa APIs (DeepSeek para el agente conversacional). El hardware de conversión (biodigestores / celdas de combustible microbianas) es la **visión a largo plazo**, no un requisito del producto que vendemos hoy.

---

## 2. Problema local y evidencia

### 2.1 El problema en una frase
En Santa Cruz se entierra o quema residuo orgánico urbano que tiene valor energético, emitiendo metano, **porque no existe una capa de inteligencia que conecte, prediga y cuantifique** la oportunidad entre generadores y transformadores.

### 2.2 Evidencia y contexto (Santa Cruz)
- **Composición del residuo:** en ciudades bolivianas la fracción orgánica de los residuos sólidos urbanos ronda el **55–60%** [DATO: estudios de caracterización de RSU en Bolivia / Ministerio de Medio Ambiente y Agua]. Es la fracción más grande y la que más metano genera en relleno.
- **Volumen:** Santa Cruz de la Sierra, con una población metropolitana superior a 1,7 millones, genera del orden de **~1.200–1.800 t/día de residuos sólidos** [ESTIMACIÓN, a validar con EMACRUZ/GAMSC]. Aplicando 55% ⇒ **~700–900 t/día de residuo orgánico** [ESTIMACIÓN].
- **Destino actual:** disposición final en el relleno de Normandía, con problemas conocidos de saturación y emisiones. La mayoría del orgánico **no se valoriza**.
- **Prueba de que la conversión funciona localmente:** Guabirá cogenera con bagazo y vende excedentes al SIN [DATO]. Existen además biodigestores en el agro cruceño (granjas porcinas/avícolas). Falta la pieza urbana y la inteligencia que la articule.

### 2.3 ¿A quién le duele? (beneficiarios / usuarios)
- **Generadores urbanos (cliente que paga):** cadenas de restaurantes, supermercados, universidades, hoteles y mercados. Hoy *pagan* por botar su orgánico y enfrentan presión creciente por reportar sostenibilidad.
- **Plantas de biogás/compost y recicladores (lado oferta):** necesitan flujo constante y predecible de sustrato; hoy lo consiguen de forma informal.
- **Ciudad y medio ambiente:** menos metano, menos saturación del relleno, energía local.

---

## 3. Hipótesis principales a validar

1. **H1 (dolor):** Los grandes generadores urbanos de Santa Cruz pagan hoy por desechar su orgánico y/o tienen presión por reportar ESG → pagarían por una solución que les baje costo y les dé el reporte.
2. **H2 (oferta):** Existen ≥3 plantas/operadores de biogás-compost en el área metropolitana dispuestos a recibir sustrato segregado y con capacidad ociosa.
3. **H3 (técnica):** Un modelo de IA predice el rendimiento energético por sustrato con error aceptable (<15%) y **mejor que una regla fija**, usando variables simples (tipo, volumen, estacionalidad).
4. **H4 (negocio):** El ahorro en disposición + el valor del reporte ESG superan el precio de la suscripción (propuesta de valor positiva).

> En la hackathon validamos H3 con datos (modelo funcional) y argumentamos H1/H2/H4 con investigación de mercado local + entrevistas como próximo paso.

---

## 4. Modelo cuantitativo (coeficientes canónicos)

> Estos coeficientes son la **única fuente de números** del proyecto. Son **referenciales de literatura** y se marcan para ser refinados con mediciones reales.

| Conversión | Valor usado | Tipo | Base |
|---|---|---|---|
| Residuo orgánico → biogás | **~100 m³ biogás / t** | [ESTIMACIÓN] | Potencial bioquímico de metano (BMP) de residuos de comida; literatura FAO/IEA Bioenergy |
| Contenido de metano del biogás | **~60% CH₄** | [DATO] | Rango típico de digestión anaerobia |
| Biogás → electricidad (motor CHP) | **~2 kWh elec / m³ biogás** | [ESTIMACIÓN] | ~6 kWh térmicos/m³ × ~35% efic. eléctrica |
| Residuo orgánico → compost | **~0,3 t compost / t** | [ESTIMACIÓN] | Rendimiento típico de compostaje |
| CO₂e evitado por desvío de relleno | **~0,5 t CO₂e / t** | [ESTIMACIÓN] | Evita CH₄ de relleno + sustituye electricidad fósil |

**Cadena de valor de 1 tonelada de residuo orgánico:**

```
1 t residuo orgánico
   → ~100 m³ biogás (60% CH₄)
       → ~200 kWh de electricidad   (≈ consumo de un hogar cruceño por ~1 mes)
   + ~0,3 t de compost
   + ~0,5 t CO₂e evitadas
```

**Potencial de ciudad (escenario de captura del 10%):**
Si GreenSpark capturara solo el **10%** del orgánico urbano (~80 t/día) [ESTIMACIÓN base Sección 2.2]:
- Energía: 80 t/día × 200 kWh = **16.000 kWh/día ≈ 5,8 GWh/año**.
- CO₂ evitado: 80 t/día × 0,5 = **40 t CO₂e/día ≈ 14.600 t CO₂e/año**.
- Compost: ~24 t/día de abono orgánico.

---

## 5. Evaluación crítica de viabilidad (qué SÍ y qué NO para el MVP)

| Idea | ¿Viable en MVP hackathon? | Decisión |
|---|---|---|
| Celdas de combustible microbianas (MFC) que alimentan la red | **No.** Densidad de potencia en mW; requiere hardware y meses de cultivo | → Visión a largo plazo, no se vende hoy |
| Construir un biodigestor físico | **No.** Requiere obra, permisos, tiempo | → Lo operan socios/plantas existentes |
| **Plataforma de IA que predice, conecta y cuantifica** | **Sí.** Solo software + APIs, sin hardware | → **ESTE es el MVP** |
| Optimización de rutas de recolección | **Sí.** OR-Tools, librería abierta | → Incluido en MVP |
| Reporte ESG automatizado | **Sí.** Generación con LLM + datos | → Incluido (es lo que paga el cliente) |

**Conclusión:** el valor defendible y demostrable en 1 día **no está en el hardware, está en la inteligencia y la coordinación**. Por eso GreenSpark es software.

---

## 6. Solución recomendada (resumen; detalle en `solucion_propuesto.md`)

Plataforma web B2B de dos lados:
- **Lado demanda (paga):** generador urbano registra residuo → ve predicción de energía/CO₂/$ → recibe reporte ESG.
- **Lado oferta:** plantas de biogás/compost reciben sustrato segregado, predecible y trazable.
- **Núcleo de IA:** (1) predicción de rendimiento energético por sustrato; (2) optimización logística de recolección; (3) agente conversacional "Asesor GreenSpark".

---

## 7. MVP para la hackathon

**MVP (lo que se demuestra el 31/05):**
- Portal del generador: alta + registro de residuo (tipo, kg).
- Motor de IA: predicción instantánea de biogás, kWh, compost, CO₂ evitado y valor en Bs.
- Mapa: generadores y plantas + ruta de recolección optimizada (Leaflet/OpenStreetMap + OR-Tools).
- Dashboard de impacto ciudad (agregado).
- Agente conversacional (DeepSeek API) que explica resultados y redacta el reporte ESG.

**Piloto de campo posterior (1–3 meses):** integración con 1 planta real + 5–10 generadores reales, datos primarios, recolección real.

**Visión escalable (>12 meses):** marketplace multi-ciudad, créditos de carbono, e integración futura con hardware propio (biodigestores modulares / I+D de MFC).

**Datos del MVP:** modelo entrenado con coeficientes BMP + variación sintética; operación poblada con generadores **[SIMULADO]** basados en zonas reales de Santa Cruz (4to anillo, Equipetrol, mercados, campus UCB). Todo lo simulado se rotula en la interfaz.

---

## 8. Arquitectura tecnológica (resumen; detalle en `arquitectura_tecnologica.md`)

```
[ Generador urbano ]      [ Planta biogás/compost ]
        │                          │
        ▼                          ▼
┌─────────────────────────────────────────────┐
│  Frontend React (portal + dashboard + mapa)  │
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
```

Sin hardware, sin GPU, todo en tiers gratuitos. Detalle de despliegue en el documento de arquitectura.

---

## 9. Componente de IA (resumen; detalle en `aplicacion_de_ia.md`)

Tres usos **reales y demostrables** de IA:
1. **Predicción de rendimiento energético** (regresión supervisada). Entrada: tipo de residuo, volumen, humedad/estacionalidad. Salida: m³ biogás, kWh, CO₂ evitado. Métrica: MAE/RMSE; baseline = coeficiente fijo. **Se demuestra que el modelo supera la regla fija** ante mezclas y estacionalidad.
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

## 11. Síntesis de análisis estratégico

- **FODA, PESTEL, Lean Canvas:** documentos dedicados.
- **Análisis financiero e impacto:** documentos dedicados, todos consistentes con los coeficientes de la Sección 4.

---

## 12. Riesgos, limitaciones y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Coeficientes referenciales ≠ realidad local | Piloto con mediciones primarias; el modelo se reentrena con datos reales |
| Generadores no segregan en origen | Onboarding + incentivo económico (ahorro) + reporte ESG como gancho |
| Oferta de plantas limitada | Empezar en zonas con planta/biodigestor cercano; sumar compostaje como salida |
| Dependencia de API externa (DeepSeek) | El núcleo (predicción, ruteo) no depende del LLM; agente con fallback documentado |
| Informalidad / cultura de reciclaje baja | Alianzas con cámaras (CAINCO), universidades y GAMSC; foco inicial B2B formal |

---

## 13. Narrativa competitiva

- **Nombre:** GreenSpark.
- **Propuesta de valor:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."*
- **Problema (1 oración):** Santa Cruz entierra energía orgánica y emite metano porque nadie conecta ni cuantifica el residuo urbano.
- **Solución (1 oración):** Una plataforma de IA que predice cuánta energía rinde cada residuo, lo conecta con plantas y certifica el impacto.
- **Diferenciador:** somos la **capa de inteligencia y coordinación** (datos + IA + red), no una máquina; por eso escalamos como software.
- **Evidencia en la demo:** predicción en vivo + ruta optimizada en mapa + reporte ESG generado por el agente.

**Objeciones probables del jurado y respuestas honestas:**
- *"¿Dónde está el hardware que genera energía?"* → No lo necesitamos: usamos la capacidad de transformación que **ya existe** (plantas/biodigestores). Nuestro valor es la inteligencia que la activa. El hardware propio es visión futura.
- *"¿La IA no es solo una regla de tres?"* → No: el modelo ajusta por mezcla, humedad y estacionalidad y supera medible­mente al coeficiente fijo (mostramos la métrica).
- *"¿Hay comprador real?"* → Sí: el generador urbano ya paga por desechar y necesita reporte ESG; ese es el cliente ancla.

---

## 14. Próximos pasos

1. Validar H1/H2 con 5 entrevistas a generadores y 2 a plantas (semana 1 post-hackathon).
2. Piloto con 1 planta + 5 generadores reales (mes 1–3).
3. Reentrenar el modelo con datos primarios; medir error real.
4. Ronda semilla (~$15–25k) para piloto y primer equipo comercial.

---

## 15. Fuentes consultadas

> Fuentes a enlazar/verificar en la versión final del repositorio. Se distinguen datos locales de regionales/internacionales.

- IPCC, *Fifth Assessment Report (AR5)* — potencial de calentamiento global del metano (GWP100 ≈ 28). [Internacional]
- IEA Bioenergy / FAO — potencial bioquímico de metano (BMP) de residuos de alimentos y digestión anaerobia. [Internacional]
- ENDE / Guabirá — cogeneración con bagazo y entrega de excedentes al SIN. [Local — verificar cifras exactas]
- EMACRUZ / Gobierno Autónomo Municipal de Santa Cruz (GAMSC) — generación y composición de RSU, relleno de Normandía. [Local — verificar cifras exactas]
- INE Bolivia — población del área metropolitana de Santa Cruz. [Nacional]
- Ministerio de Medio Ambiente y Agua — caracterización de residuos sólidos en Bolivia. [Nacional]

---

## Decisión recomendada para la hackathon

- **Qué construir:** la plataforma web GreenSpark con el portal del generador, el motor de predicción, el mapa con ruteo optimizado, el dashboard de impacto y el agente conversacional.
- **Razón principal:** maximiza los 35 puntos de IA, es 100% demostrable sin hardware, replicable, escalable como SaaS y tiene un comprador que ya gasta dinero en el problema.
- **Imprescindible (MVP):** registro de residuo → predicción IA en vivo → match + ruta en mapa → reporte ESG por el agente.
- **Fuera del MVP:** hardware propio, créditos de carbono, app ciudadana, multi-ciudad.
- **Demostración más convincente:** que un juez "registre" el residuo de su restaurante/universidad favorito y vea en segundos los kWh, el CO₂ evitado, la ruta óptima y un reporte ESG redactado por la IA.
