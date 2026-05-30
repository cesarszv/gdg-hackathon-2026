# Problema Identificado — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

---

## 1. El problema en una frase

> En Santa Cruz de la Sierra se **entierra y se quema residuo orgánico urbano que tiene valor energético**, liberando metano a la atmósfera, **porque no existe una capa de inteligencia que conecte, prediga y cuantifique** la oportunidad entre quienes generan el residuo y quienes pueden transformarlo en energía.

Es energía que se desperdicia y, al mismo tiempo, contaminación que se produce.

---

## 2. Contexto local (Santa Cruz)

Santa Cruz de la Sierra es la ciudad más poblada y la capital agroindustrial de Bolivia. Dos hechos conviven y nadie los conecta:

1. **La ciudad entierra su orgánico.** La fracción orgánica representa cerca del **55–60%** de los residuos sólidos urbanos en ciudades bolivianas [DATO: caracterización de RSU, Ministerio de Medio Ambiente y Agua]. En Santa Cruz, con un área metropolitana de más de **1,7 millones** de habitantes [DATO: INE], esto significa del orden de **~700–900 toneladas de residuo orgánico por día** [ESTIMACIÓN, a validar con EMACRUZ/GAMSC] que terminan en el relleno de Normandía.

2. **El departamento ya sabe convertir biomasa en energía.** El ingenio Guabirá cogenera electricidad con bagazo de caña y entrega excedentes al Sistema Interconectado Nacional [DATO: ENDE/Guabirá]. La tecnología "residuo → energía" **ya funciona localmente**… pero solo para los grandes ingenios y solo con sus propios residuos.

El residuo orgánico urbano —disperso entre miles de restaurantes, supermercados, mercados, universidades y hoteles— **queda completamente fuera de ese circuito.**

---

## 3. ¿Por qué es un problema grave? (triple costo)

| Dimensión | Costo actual |
|---|---|
| **Ambiental** | El orgánico en relleno genera metano (CH₄), gas ~**28× más potente** que el CO₂ [DATO: IPCC AR5]. Cada tonelada desviada evita ~**0,5 t CO₂e** [ESTIMACIÓN]. |
| **Energético** | Cada tonelada orgánica equivale a ~**200 kWh** de electricidad desperdiciada [ESTIMACIÓN] (≈ un mes de consumo de un hogar). Capturar el 10% de la ciudad = **~5,8 GWh/año** perdidos hoy. |
| **Económico** | Los generadores **pagan** por desechar su orgánico; las plantas de biogás **carecen** de sustrato predecible; la ciudad gasta en disposición y pierde un recurso. |

---

## 4. ¿A quién le duele? (usuario / beneficiario)

- **Generador urbano — usuario y cliente que paga.** Cadenas de restaurantes, supermercados, universidades, hoteles, mercados. Hoy: pagan por botar su orgánico, no tienen trazabilidad y enfrentan **presión creciente por reportar sostenibilidad (ESG)** ante clientes corporativos, casas matriz e instituciones.
- **Plantas de biogás / compost y recicladores — lado oferta.** Necesitan flujo constante y predecible de sustrato; hoy lo consiguen de manera informal e ineficiente.
- **Ciudad y ciudadanía — beneficiario indirecto.** Menos metano, menos saturación del relleno de Normandía, energía y compost locales.

> **Usuario principal del MVP:** el responsable de operaciones/sostenibilidad de un gran generador urbano (ej. una universidad como la UCB, una cadena de restaurantes, un supermercado).

---

## 5. La brecha real: nadie conecta, predice ni cuantifica

El problema **no es la falta de tecnología de conversión** (ya existe), ni la falta de residuo (sobra). El problema es la **ausencia de una capa de inteligencia y coordinación**:

- Nadie sabe **cuánta energía** vale el residuo de cada generador.
- Nadie **conecta** de forma eficiente al generador con la planta adecuada.
- Nadie **optimiza** la recolección (rutas, frecuencia).
- Nadie **certifica** el impacto evitado para que el generador lo use como reporte ESG.

Ese vacío es exactamente lo que GreenSpark resuelve con software + IA. *(Ver `solucion_propuesto.md`.)*

---

## 6. ¿Por qué ahora?

- **Regulación y presión ESG** en aumento: empresas e instituciones necesitan demostrar sostenibilidad.
- **Costos de disposición** y saturación del relleno al alza.
- **IA accesible por API** (DeepSeek, etc.): hoy se puede construir la inteligencia sin infraestructura propia ni hardware.
- **Economía circular** en agenda local, nacional e internacional (ODS 7, 11, 12, 13).

---

## 7. Evidencia que mostraremos / validaremos

- **Demostrado en el MVP:** el modelo de IA cuantifica el valor energético oculto del residuo (predicción en vivo).
- **A validar en piloto:** cifras primarias de volumen y composición (EMACRUZ/GAMSC) y disposición a pagar de generadores (entrevistas).

> Toda cifra está marcada como [DATO], [ESTIMACIÓN] o [SIMULADO] siguiendo la nota de honestidad del documento técnico, en cumplimiento del punto 14 de los lineamientos.
