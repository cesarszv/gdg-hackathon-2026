# GreenSpark: Documento técnico con investigación

**Equipo:** HackHeroes
**Hackathon:** Build With AI 2026 — Santa Cruz de la Sierra, Bolivia
**Mención:** Energía
**Fecha:** 30 de mayo de 2026

> **En una frase:** GreenSpark es una plataforma de IA que convierte los residuos orgánicos urbanos de Santa Cruz en energía rentable. Conecta a quienes los generan con plantas que pueden transformarlos en biogás o compost, predice su rendimiento energético, optimiza su recolección y documenta su impacto ambiental.

---

## 0. Nota de honestidad técnica

Este documento distingue de forma explícita tres tipos de información. Así cumple el punto 14 de los lineamientos, "no se permite falsificar funcionalidades de IA", y el criterio de calidad de fuentes:

- **[DATO]** — cifra de fuente oficial/académica verificable.
- **[ESTIMACIÓN]** — orden de magnitud calculado a partir de coeficientes de literatura; debe validarse con datos primarios de EMACRUZ, GAMSC e INE.
- **[SIMULADO]** — dato operativo generado para poblar la demo, como nombres de generadores y volúmenes diarios. La plataforma lo muestra con esta etiqueta.

Todas las cifras de energía, CO₂ e ingresos parten de los coeficientes de la **Sección 4**. Los demás entregables, como el análisis financiero, el impacto esperado y el Lean Canvas, utilizan los mismos valores.

---

## 1. Resumen ejecutivo

Santa Cruz de la Sierra es la capital agroindustrial de Bolivia y genera **1.909,86 toneladas de residuos por día**. Según el PMGIRS 2023, el **50,84%** corresponde a residuos orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO]. Cuando los residuos orgánicos terminan enterrados y se descomponen sin oxígeno, pueden generar metano (CH₄), un gas al menos **28 veces** más eficaz que el CO₂ para atrapar calor en un horizonte de 100 años [DATO TÉCNICO]. El porcentaje que actualmente termina en entierro sanitario debe validarse con EMACRUZ.

En paralelo, el departamento **ya cuenta con tecnología que convierte biomasa en electricidad**. La AETN registra a Guabirá Energía S.A., ubicada en Montero, Santa Cruz, como generadora del Sistema Interconectado Nacional (SIN) que utiliza biomasa [DATO]. La valorización energética de biomasa ya ocurre localmente, aunque no equivale a demostrar capacidad disponible para recibir residuos orgánicos urbanos. Estos residuos se encuentran dispersos entre múltiples generadores y todavía falta una capa que coordine su trazabilidad y valorización.

**GreenSpark cubre esa brecha mediante software e IA.** Es una plataforma B2B que:

1. Permite a un generador urbano registrar sus residuos orgánicos y **predecir al instante**, mediante IA, cuánto biogás, electricidad, compost y CO₂ evitado representan.
2. Lo **conecta y enruta** hacia la planta de biogás/compost más conveniente (optimización logística).
3. Entrega un **reporte de sostenibilidad (ESG)** automático y verificable: el producto por el que paga el cliente.

El MVP funciona **completamente mediante software, sin hardware**. Es demostrable, replicable y utiliza APIs, como DeepSeek para el agente conversacional. El hardware de conversión, como biodigestores o celdas de combustible microbianas, forma parte de la **visión a largo plazo** y no del producto actual.

---

## 2. Problema local y evidencia

### 2.1 El problema en una frase

En Santa Cruz existe un flujo relevante de residuos orgánicos compostables con potencial energético, pero todavía falta coordinar su segregación, trazabilidad y derivación hacia alternativas de valorización. GreenSpark aborda la brecha de información entre generadores y transformadores.

### 2.2 Evidencia y contexto local

- **Composición y volumen:** el PMGIRS 2023 reporta **1.909,86 t/día** de residuos sólidos urbanos y **50,84%** de orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO].
- **Destino actual:** la disposición final continúa siendo una operación central para la ciudad. El sitio operativo se encuentra en **San Miguel de los Junos**; Normandía corresponde a un relleno anterior en proceso de post cierre técnico [DATO]. El destino desagregado de la fracción orgánica debe validarse con EMACRUZ.
- **Oportunidad municipal reconocida:** el GAMSC proyectó una planta de tratamiento mecánico-biológico con aprovechamiento de orgánicos y generación de biogás en San Miguel de los Junos. En mayo de 2025 todavía fue descrita como infraestructura futura [DATO].
- **Precedente energético regional:** la AETN registra a Guabirá Energía S.A. entre las generadoras que utilizaron biomasa en el SIN durante 2024 [DATO]. La valorización energética de biomasa ya tiene un antecedente regional, aunque no equivale a demostrar capacidad disponible para residuos urbanos.

### 2.3 Usuarios y beneficiarios

- **Generadores urbanos: cliente objetivo.** Incluye cadenas de restaurantes, supermercados, universidades, hoteles y mercados. Sus costos actuales y su disposición a pagar por trazabilidad y reportes ESG deben validarse.
- **Plantas de biogás/compost y operadores: lado de la oferta.** Necesitan un flujo constante y predecible de sustrato. Su capacidad, ubicación y requisitos de recepción deben confirmarse.
- **Ciudad y medio ambiente:** menor presión sobre la disposición final, valorización local y reducción potencial de metano.

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

```
1 t residuo orgánico
   → ~100 m³ biogás (60% CH₄)
       → ~200 kWh de electricidad   (≈ consumo de un hogar cruceño por ~1 mes)
   + ~0,3 t de compost
   + ~0,5 t CO₂e evitadas
```

### 4.1 Potencial para la ciudad

Si GreenSpark capturara solo el **10%** de los aproximadamente 971 t/día de residuos orgánicos compostables, ~97 t/día [ESTIMACIÓN basada en la Sección 2.2]:

- Energía: 97 t/día × 200 kWh = **~19.400 kWh/día ≈ 7,1 GWh/año**.
- CO₂ evitado: 97 t/día × 0,5 = **~48,5 t CO₂e/día ≈ 17.700 t CO₂e/año**.
- Compost: ~29 t/día de abono orgánico.

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

Consulta el detalle en [solución propuesta](<./solucion propuesta.md>).

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

```
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
```

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
| Generadores no segregan en origen | Incorporación guiada, incentivo económico mediante ahorro y reporte ESG como argumento comercial; foco inicial B2B formal |
| Oferta de plantas limitada | Empezar en zonas con planta/biodigestor cercano; sumar compostaje como salida |
| Dependencia de API externa (DeepSeek) | El núcleo de predicción y ruteo no depende del LLM; el agente tiene una alternativa documentada |

---

## 13. Narrativa para el pitch

- **Nombre:** GreenSpark.
- **Propuesta de valor:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad, en un clic."*
- **Problema (1 oración):** Santa Cruz desaprovecha residuos orgánicos con potencial energético porque todavía falta coordinar su segregación, trazabilidad y valorización.
- **Solución (1 oración):** Una plataforma de IA que predice cuánta energía rinde cada residuo, lo conecta con plantas y documenta el impacto.
- **Diferenciador:** GreenSpark es una **capa de inteligencia y coordinación** basada en datos, IA y red. No es una máquina, por lo que puede escalar como software.
- **Evidencia en la demo:** predicción en vivo + ruta optimizada en mapa + reporte ESG generado por el agente.

### 13.1 Objeciones probables del jurado

- *"¿Dónde está el hardware que genera energía?"* → No lo construimos durante la hackathon: nuestro valor es la inteligencia que coordina generadores y alternativas de valorización. La capacidad real disponible se validará durante el piloto.
- *"¿La IA no es solo una regla de tres?"* → No: el modelo ajusta por mezcla, humedad y estacionalidad y supera de forma medible al coeficiente fijo. La demo muestra esta métrica.
- *"¿Hay comprador real?"* → El cliente objetivo es el gran generador urbano. Sus costos actuales y su disposición a pagar por trazabilidad y reportes ESG deben validarse mediante entrevistas.

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
- [GAMSC: campaña CompostArte y datos del PMGIRS 2023](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517) — generación y composición de residuos urbanos. [Local]
- [GAMSC: proyecto de planta municipal de tratamiento](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=337) — ubicación, tratamiento mecánico-biológico y biogás proyectado. [Local]
- [GAMSC: relleno sanitario de San Miguel de los Junos](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=437) — identificación del sitio operativo. [Local]
- INE Bolivia — población del área metropolitana de Santa Cruz. [Nacional]
- Ministerio de Medio Ambiente y Agua — caracterización de residuos sólidos en Bolivia. [Nacional]

---

## 16. Decisión recomendada para la hackathon

- **Qué construir:** la plataforma web GreenSpark con el portal del generador, el motor de predicción, el mapa con ruteo optimizado, el panel de impacto y el agente conversacional.
- **Razón principal:** maximiza los 35 puntos de IA, es 100% demostrable sin hardware, replicable, escalable como SaaS y se enfoca en un cliente B2B cuya disposición a pagar puede validarse durante el piloto.
- **Imprescindible para el MVP:** registro de residuo → predicción de IA en vivo → emparejamiento + ruta en mapa → reporte ESG redactado por el agente.
- **Fuera del MVP:** hardware propio, créditos de carbono, aplicación ciudadana y despliegue en varias ciudades.
- **Demostración más convincente:** que un juez registre los residuos de su restaurante o universidad de referencia y vea en segundos los kWh, el CO₂ evitado, la ruta óptima y un reporte ESG redactado por la IA.
