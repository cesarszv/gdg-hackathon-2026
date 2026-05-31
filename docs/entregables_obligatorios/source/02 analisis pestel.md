# GreenSpark: Análisis PESTEL

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Objetivo:** demostrar por qué GreenSpark tiene sentido en el contexto actual de Santa Cruz de la Sierra y traducir cada factor externo en una decisión concreta del MVP.
>
> **Criterio de honestidad:** este análisis distingue datos publicados, inferencias y decisiones del producto. No afirma que toda la fracción orgánica termine enterrada ni que exista actualmente capacidad suficiente para valorizarla.

## 1. Resumen ejecutivo

Santa Cruz de la Sierra genera **1.909,86 toneladas de residuos por día** y el **50,84%** corresponde a residuos orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO]. La Ley N.º 755 prioriza su aprovechamiento sobre la disposición final y el municipio proyectó una planta de tratamiento mecánico-biológico con generación de biogás en San Miguel de los Junos. Sin embargo, todavía se necesita validar cuánto residuo puede segregarse, qué operadores pueden recibirlo y cómo coordinar la recolección. En este contexto, GreenSpark propone una capa de inteligencia y trazabilidad para conectar generadores urbanos con alternativas de valorización mediante predicción, optimización logística y reportes de impacto.

## 2. Tabla PESTEL principal

| Factor | Oportunidad local verificable | Riesgo o barrera | Implicación para GreenSpark |
| --- | --- | --- | --- |
| **Político** | El GAMSC y EMACRUZ ya impulsan iniciativas como CompostArte y presentaron un proyecto municipal de tratamiento mecánico-biológico con biogás en San Miguel de los Junos [DATO]. | Los ciclos públicos son lentos. En una publicación municipal del **17/05/2025**, la planta todavía fue descrita como infraestructura que será construida; su estado actual debe confirmarse con EMACRUZ [DATO]. | Iniciar el piloto con generadores privados formales y operadores validados. Diseñar la plataforma para integrarse después con iniciativas municipales. |
| **Económico** | Los residuos conservan valor como insumo para biogás y compost. Para los grandes generadores, la trazabilidad puede convertir un costo operativo en ahorro medible y evidencia de sostenibilidad [INFERENCIA A VALIDAR]. | Las suscripciones se cobrarían en bolivianos, mientras que algunos servicios tecnológicos se cotizan en USD. El BCB documentó tensiones y segmentación del mercado cambiario durante 2025 [DATO]. La disposición a pagar todavía debe validarse. | Mantener un MVP liviano en activos, limitar llamadas al LLM, conservar una alternativa sin LLM y validar precios con entrevistas durante el piloto. |
| **Social** | CompostArte busca promover hábitos de compostaje doméstico, vecinal e institucional. Esto demuestra interés institucional en reducir los orgánicos enviados a disposición final [DATO]. | La segregación en origen exige cambios de hábito. La disponibilidad real de residuos separados en restaurantes, supermercados, universidades, mercados y hoteles todavía debe medirse [INFERENCIA A VALIDAR]. | Priorizar una incorporación guiada, instrucciones simples y trazabilidad visible. Empezar con pocos generadores ancla capaces de separar residuos de forma consistente. |
| **Tecnológico** | El MVP puede construirse sin hardware: usa scikit-learn para predicción, OR-Tools para rutas, Open-Meteo para estacionalidad, OpenStreetMap para mapas y DeepSeek API para el agente conversacional. | El modelo inicial parte de coeficientes referenciales y operaciones simuladas. Además, la capa conversacional depende de una API externa. | Etiquetar toda simulación, comparar el modelo con un baseline, versionar coeficientes y asegurar que la predicción y el ruteo funcionen aunque el LLM no responda. |
| **Ambiental** | Los residuos orgánicos enterrados pueden descomponerse en condiciones anaerobias y generar metano. La EPA indica que el gas de relleno contiene aproximadamente **50% de metano**, un gas al menos **28 veces** más eficaz que el CO₂ para atrapar calor en un horizonte de 100 años [DATO TÉCNICO]. | El impacto real depende del tipo de residuo, la segregación efectiva, el transporte y la capacidad de transformación disponible. No corresponde presentar estimaciones como resultados observados. | Mostrar por separado el potencial estimado y el impacto verificado. Medir toneladas desviadas, kWh equivalentes, compost y CO₂e con supuestos visibles. |
| **Legal** | La Ley N.º 755 establece que se debe **maximizar el aprovechamiento** y **minimizar la disposición final**. Su reglamento contempla requisitos para plantas de tratamiento biológico y rellenos sanitarios [DATO]. | Los operadores deben cumplir requisitos ambientales, sanitarios y operativos. La plataforma también manejará datos comerciales y operativos de sus clientes. | Conectar únicamente operadores previamente validados, registrar trazabilidad básica, limitar el acceso a los datos y recolectar solo la información necesaria para operar. |

## 3. Priorización para el hackathon

| Factor | Impacto en el proyecto | Urgencia | Prioridad | Razón |
| --- | ---: | ---: | ---: | --- |
| **Tecnológico** | Alto | Alta | **Crítica** | El jurado debe comprobar que la IA funciona y mejora una decisión real. |
| **Social** | Alto | Alta | **Crítica** | Sin segregación consistente no existe un flujo aprovechable ni un piloto viable. |
| **Ambiental** | Alto | Alta | **Crítica** | Es la base del impacto y debe comunicarse con métricas transparentes. |
| **Legal** | Medio-Alto | Media | **Alta** | La trazabilidad y la validación de operadores condicionan el despliegue real. |
| **Económico** | Medio-Alto | Media | **Alta** | La disposición a pagar y los costos tecnológicos deben validarse durante el piloto. |
| **Político** | Medio | Media | **Media** | El respaldo institucional favorece la narrativa, pero el MVP no debe depender del sector público. |

## 4. Decisiones derivadas para el MVP

| Hallazgo PESTEL | Decisión concreta del MVP |
| --- | --- |
| La planta municipal proyectada todavía requiere confirmación operativa. | Trabajar con plantas y operadores de ejemplo claramente etiquetados como **[SIMULADOS]** hasta validar socios reales. |
| La segregación en origen es una condición crítica. | Incluir una incorporación guiada para registrar tipo de residuo, volumen, frecuencia y nivel estimado de contaminación. |
| El impacto no debe presentarse con precisión falsa. | Separar en el panel los valores **estimados** de los valores **verificados** y mostrar los supuestos del cálculo. |
| Algunos costos tecnológicos están denominados en USD. | Usar planes gratuitos cuando sea posible, optimizar llamadas al LLM y conservar el resultado numérico si DeepSeek no responde. |
| La valorización exige coordinar actores dispersos. | Mostrar emparejamiento generador-planta y una ruta optimizada mediante OR-Tools. |
| Los clientes necesitan justificar sus acciones ambientales. | Generar un reporte ESG trazable a partir de los resultados calculados por el backend; el LLM redacta, pero no inventa cifras. |
| La plataforma manejará datos operativos de empresas. | Aplicar minimización de datos y acceso restringido desde el MVP. |

## 5. Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | ---: | ---: | --- |
| Los datos simulados no convencen al jurado. | Media | Alto | Etiquetar la simulación, documentar coeficientes y demostrar la comparación del modelo frente al baseline. |
| Los generadores no separan residuos de forma consistente. | Alta | Alto | Empezar con generadores ancla, simplificar el registro y medir contaminación del residuo durante el piloto. |
| No existe capacidad receptora suficiente para escalar. | Media | Alto | Validar capacidad, ubicación y sustratos aceptados por cada operador antes de prometer cobertura. |
| La API del LLM falla o se encarece. | Media | Medio | Mantener la predicción y el ruteo independientes del LLM; usar caché y limitar llamadas. |
| Las cifras de impacto se interpretan como resultados reales. | Media | Alto | Mostrar etiquetas de **estimación**, supuestos y valores medidos por separado. |
| El despliegue depende de decisiones municipales. | Media | Medio | Iniciar con un piloto B2B privado y tratar la integración municipal como una etapa posterior. |

## 6. Conclusión estratégica

El análisis PESTEL muestra una oportunidad concreta en Santa Cruz de la Sierra: existe un volumen relevante de residuos orgánicos compostables, una prioridad legal de aprovechamiento y un interés municipal explícito en compostaje y biogás. La barrera principal no es inventar nueva infraestructura durante la hackathon, sino coordinar información dispersa y demostrar una ruta viable de valorización. Por eso, GreenSpark prioriza un MVP de software con IA verificable, simulaciones transparentes, trazabilidad y una arquitectura preparada para incorporar datos y operadores reales durante el piloto.

## 7. Fuentes consultadas

| Fuente primaria | Uso en este documento |
| --- | --- |
| [GAMSC: campaña CompostArte y datos del PMGIRS 2023](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517) | Volumen diario de residuos, porcentaje de orgánicos compostables e interés institucional en compostaje. |
| [GAMSC: proyecto de Planta Municipal de Tratamiento Mecánico y Biológico](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=337) | Ubicación en San Miguel de los Junos, tratamiento anaerobio y generación proyectada de biogás. |
| [GAMSC: Día Mundial del Reciclaje, 17/05/2025](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=708) | Estado publicado de la planta como infraestructura futura. |
| [GAMSC: relleno sanitario de San Miguel de los Junos, 14/08/2024](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=437) | Identificación del relleno sanitario operativo. |
| [Servicio Estatal de Autonomías: Ley N.º 755 de Gestión Integral de Residuos](https://sea.gob.bo/digesto/CompendioII/N/142_L_755.pdf) | Jerarquía normativa: maximizar aprovechamiento y minimizar disposición final. |
| [Servicio Estatal de Autonomías: Reglamento General de la Ley N.º 755](https://sea.gob.bo/digesto/CompendioII/N/144_L_755.pdf) | Requisitos generales para tratamiento biológico y disposición final. |
| [EPA: información básica sobre gas de relleno sanitario](https://www.epa.gov/lmop/basic-information-about-landfill-gas) | Formación de metano y potencial de calentamiento global. |
| [BCB: Memoria 2025, capítulo de política cambiaria](https://www.bcb.gob.bo/webdocs/publicacionesbcb/2026/04/04/Cap.%202.pdf) | Riesgo cambiario para costos tecnológicos denominados en USD. |

## 8. Versión condensada para una diapositiva

### Contexto estratégico: PESTEL

| Factor clave | Insight para Santa Cruz | Decisión del MVP |
| --- | --- | --- |
| **Político** | El municipio ya proyectó valorización con biogás, pero su estado operativo debe confirmarse. | Piloto privado primero; integración municipal después. |
| **Social** | Separar residuos en origen exige hábitos simples y consistentes. | Incorporación guiada y generadores ancla. |
| **Tecnológico** | La IA, las APIs y las librerías abiertas permiten demostrar valor sin hardware. | Predicción, ruta y agente con simulación etiquetada. |
| **Ambiental** | Los orgánicos enterrados pueden generar metano y desaprovechan energía y compost. | Panel con impacto estimado y supuestos visibles. |
| **Legal** | La Ley N.º 755 prioriza aprovechamiento sobre disposición final. | Operadores validados, trazabilidad y minimización de datos. |

> **Mensaje para el pitch:** GreenSpark no promete construir infraestructura en un día. Demuestra la capa de inteligencia que permite identificar residuos aprovechables, estimar su potencial energético y coordinar su valorización con trazabilidad.
