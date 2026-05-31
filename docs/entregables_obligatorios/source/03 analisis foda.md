# GreenSpark: Análisis FODA

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Objetivo:** evaluar las condiciones internas y externas que afectan la viabilidad de GreenSpark y convertirlas en decisiones concretas para el MVP, el piloto y la presentación ante el jurado.
>
> **Criterio de honestidad:** este documento distingue datos publicados, inferencias y puntos pendientes de validación. No afirma que toda la fracción orgánica termine enterrada, que ya exista capacidad receptora suficiente ni que los beneficios estimados sean resultados observados.

## 1. Contexto breve del proyecto

Santa Cruz de la Sierra produce **1.909,86 toneladas de residuos por día** y el **50,84%** corresponde a residuos orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO]. La Rendición Pública de Cuentas Final 2025 del GAMSC reporta el entierro sanitario de **571.628,83 toneladas** de residuos sólidos durante esa gestión, un promedio aproximado de **1.566 t/día** [DATO + CÁLCULO]. El destino desagregado de la fracción orgánica todavía debe confirmarse con EMACRUZ.

GreenSpark propone una plataforma B2B de IA que registra residuos orgánicos de grandes generadores urbanos, predice su potencial de valorización, optimiza la recolección, conecta cada flujo con una alternativa compatible y genera reportes de sostenibilidad. El MVP es una capa de inteligencia y coordinación basada en software; no construye ni opera infraestructura física.

## 2. Criterios de lectura

| Etiqueta | Significado |
| --- | --- |
| **[DATO]** | Información publicada por una fuente oficial o técnica verificable. |
| **[DATO + CÁLCULO]** | Resultado derivado de una cifra publicada mediante una operación explícita. |
| **[INFERENCIA]** | Interpretación razonable a partir de los datos disponibles. |
| **[A VALIDAR]** | Hipótesis que exige entrevistas, registros operativos o confirmación institucional. |

## 3. Matriz FODA

| Origen | Factores positivos | Factores negativos |
| --- | --- | --- |
| **Interno** | **Fortalezas:** IA demostrable sin hardware propio; núcleo resiliente frente a fallos del LLM; arquitectura modular; trazabilidad de estimaciones; enfoque B2B acotado. | **Debilidades:** datos iniciales referenciales y simulados; ausencia de validación operativa local; dependencia de operadores externos; marca nueva sin casos de éxito; dependencia parcial de APIs externas. |
| **Externo** | **Oportunidades:** flujo orgánico urbano relevante; prioridad legal de aprovechamiento; interés municipal en compostaje y biogás; precedente regional de biomasa; necesidad de coordinar actores dispersos. | **Amenazas:** segregación inconsistente; capacidad receptora no confirmada; cambios en la infraestructura municipal; bloqueos y escasez de combustible; presión cambiaria sobre servicios tecnológicos; exigencias legales y sanitarias. |

## 4. Fortalezas

### F1. IA real y visible durante la demo

El diseño del MVP integra tres componentes con una función concreta: un modelo de regresión para estimar rendimiento, OR-Tools para optimizar rutas y un agente conversacional mediante DeepSeek API para explicar resultados y redactar reportes. La demo debe permitir que el jurado compruebe el flujo completo desde el registro del residuo hasta la recomendación.

**Decisión que habilita:** centrar la demo en una operación simple y verificable: registrar residuo → predecir → emparejar → enrutar → explicar.

### F2. MVP demostrable sin construir hardware

La plataforma no necesita fabricar un biodigestor ni desplegar sensores durante la hackathon. Funciona como una capa de inteligencia que puede integrarse posteriormente con plantas de compostaje, biodigestores u otros operadores validados.

**Decisión que habilita:** invertir el tiempo disponible en el flujo funcional y presentar el hardware como una integración futura, no como una capacidad existente.

### F3. Núcleo resiliente frente a fallos del LLM

El diseño desacopla la predicción y el ruteo del agente conversacional. Si DeepSeek no responde, el sistema debe conservar los resultados numéricos y la ruta.

**Decisión que habilita:** demostrar primero el motor cuantitativo y tratar el agente como una capa adicional de interpretación.

### F4. Arquitectura modular y liviana en activos físicos

La arquitectura propuesta separa el frontend, el backend, el modelo, el optimizador y las APIs externas. Esta estructura facilita reemplazar coeficientes, incorporar datos reales y migrar desde un piloto hacia una operación más amplia sin rehacer el producto completo.

**Decisión que habilita:** mantener módulos y supuestos versionados para poder validar y corregir cada componente por separado.

### F5. Transparencia sobre estimaciones y simulaciones

El proyecto ya distingue datos publicados, estimaciones y datos simulados. Esta práctica evita prometer resultados no comprobados y fortalece la defensa técnica frente al jurado.

**Decisión que habilita:** etiquetar en la interfaz las operaciones **[SIMULADAS]** y separar impacto estimado de impacto verificado.

### F6. Segmento inicial acotado

El MVP no intenta resolver toda la gestión de residuos de la ciudad. Se enfoca en grandes generadores urbanos, como restaurantes, supermercados, universidades, mercados y hoteles, cuya generación puede registrarse y cuya disposición a pagar debe validarse.

**Decisión que habilita:** diseñar el piloto alrededor de pocos generadores ancla con capacidad de segregar residuos de forma consistente.

## 5. Oportunidades

### O1. Flujo orgánico urbano relevante

Según el PMGIRS 2023 citado por el GAMSC, Santa Cruz de la Sierra genera **1.909,86 t/día** de residuos y el **50,84%** corresponde a orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO]. Esta cifra no demuestra cuánto material puede recuperarse de inmediato, pero sí justifica investigar una solución de trazabilidad y valorización.

**Implicación:** priorizar la captura de datos por generador, tipo de residuo, volumen, frecuencia y nivel de contaminación.

### O2. Prioridad legal de aprovechamiento

La Ley N.º 755 de Gestión Integral de Residuos prioriza la prevención, la reducción de la generación, el aprovechamiento y una disposición final sanitaria y ambientalmente segura [DATO]. GreenSpark se alinea con esa jerarquía al facilitar la derivación de residuos aprovechables hacia alternativas de valorización.

**Implicación:** incluir trazabilidad básica y conectar únicamente operadores previamente validados.

### O3. Interés municipal explícito en compostaje y biogás

EMACRUZ lanzó CompostArte en octubre de 2024 para fomentar el compostaje doméstico, comunitario e institucional [DATO]. Además, el GAMSC presentó en mayo de 2024 un proyecto de tratamiento mecánico-biológico en San Miguel de los Junos con tratamiento aeróbico, anaeróbico y generación de biogás [DATO]. En una publicación municipal del **17 de mayo de 2025**, la infraestructura todavía fue descrita como una planta que **será construida** [DATO].

**Implicación:** presentar GreenSpark como una capa complementaria de información y coordinación. Su operación inicial no debe depender de que la planta municipal ya esté disponible.

### O4. Precedente regional de generación eléctrica con biomasa

La AETN registra el uso de bagazo de caña como fuente primaria de generación eléctrica en el SIN durante 2024 e incluye a Guabirá Energía S.A. entre las generadoras que utilizaron biomasa [DATO]. Esto demuestra que la valorización energética de biomasa tiene antecedentes regionales.

**Implicación:** usar el precedente como contexto energético, sin afirmar que Guabirá puede recibir residuos orgánicos urbanos ni que forma parte de GreenSpark.

### O5. Necesidad de coordinar actores dispersos

Los residuos orgánicos son perecederos, heterogéneos y distribuidos entre múltiples generadores. Su aprovechamiento exige conocer ubicación, volumen, frecuencia, contaminación y compatibilidad con cada alternativa receptora [INFERENCIA].

**Implicación:** mantener el emparejamiento y la optimización logística como funciones centrales, no como accesorios visuales.

### O6. Interés potencial en trazabilidad y reportes de sostenibilidad

Las empresas e instituciones pueden valorar reportes que documenten la gestión de sus residuos y su impacto estimado [INFERENCIA A VALIDAR]. Todavía no corresponde afirmar una demanda comercial comprobada.

**Implicación:** validar durante el piloto si el reporte resuelve un dolor real, cuánto valor aporta y qué actores estarían dispuestos a pagar.

## 6. Debilidades

### D1. Datos iniciales referenciales y simulados

El modelo parte de coeficientes de literatura y variaciones sintéticas. Esto permite demostrar el flujo técnico, pero no reemplaza mediciones locales por tipo de residuo ni garantiza precisión operativa.

**Mitigación:** comparar el modelo con un baseline, versionar los coeficientes y reentrenar con datos primarios durante el piloto.

### D2. Ausencia de validación operativa con generadores reales

Todavía no se cuenta con mediciones confirmadas de volumen segregable, frecuencia, contaminación, costo actual de disposición ni disposición a pagar por segmento.

**Mitigación:** entrevistar a generadores y registrar datos primarios antes de proyectar adopción o ahorro.

### D3. Capacidad receptora fuera del control de la plataforma

GreenSpark no transforma físicamente los residuos. Depende de plantas y operadores con capacidad, permisos y compatibilidad de sustrato.

**Mitigación:** incorporar un proceso de validación de operadores y limitar el piloto a rutas cuya recepción esté confirmada.

### D4. Marca nueva sin evidencia de resultados observados

El proyecto todavía no tiene clientes, operaciones trazables ni casos de éxito. Las métricas mostradas en el MVP representan estimaciones o simulaciones.

**Mitigación:** separar claramente el potencial estimado del impacto verificado y construir el primer caso de estudio con un piloto pequeño.

### D5. Dependencia parcial de APIs externas

El agente conversacional depende de DeepSeek API y la estacionalidad puede apoyarse en Open-Meteo. La disponibilidad, latencia o costo de estos servicios puede variar.

**Mitigación:** mantener el núcleo numérico independiente del LLM, almacenar respuestas cuando sea razonable y definir una salida degradada comprensible.

### D6. Alcance limitado del equipo después de la hackathon

La validación comercial, la coordinación con operadores, el cumplimiento y el reentrenamiento del modelo requieren trabajo posterior que excede la construcción del MVP.

**Mitigación:** limitar el piloto a una zona, una alternativa receptora confirmada y entre 5 y 10 generadores.

## 7. Amenazas

### A1. Segregación insuficiente o inconsistente en origen

La disponibilidad real de residuos separados por tipo de generador todavía debe medirse. Si el material llega contaminado o mezclado, pierde valor para compostaje o biodigestión [A VALIDAR].

**Respuesta:** incorporar instrucciones simples, registrar contaminación y empezar con generadores ancla capaces de separar residuos de forma consistente.

### A2. Capacidad receptora insuficiente o no confirmada

Las fuentes públicas consultadas no demuestran que existan actualmente suficientes operadores autorizados con capacidad disponible para absorber los flujos proyectados [HALLAZGO DE INVESTIGACIÓN A VALIDAR].

**Respuesta:** no prometer cobertura urbana; validar ubicación, capacidad, permisos y sustratos aceptados antes de habilitar un emparejamiento real.

### A3. Evolución incierta de la infraestructura municipal

El GAMSC proyectó una planta mecánico-biológica con capacidad mínima de **1.200 t/día**, pero su estado operativo actual debe confirmarse directamente con EMACRUZ. Su puesta en marcha podría abrir oportunidades de integración y también cambiar el segmento prioritario de GreenSpark [DATO + INFERENCIA].

**Respuesta:** diseñar integraciones flexibles y posicionar la plataforma como una capa interoperable, no como sustituto de la infraestructura municipal.

### A4. Bloqueos y disponibilidad de combustible

EMACRUZ informó en julio y agosto de 2024 que bloqueos en el ingreso a San Miguel de los Junos y problemas de abastecimiento de diésel afectaron la recolección de residuos [DATO]. La logística urbana puede sufrir interrupciones externas.

**Respuesta:** permitir reoptimizar rutas, registrar incidencias y evitar presentar una ruta calculada como una garantía de ejecución.

### A5. Presión cambiaria sobre costos tecnológicos

La Memoria 2025 del Banco Central de Bolivia documenta una ampliación de la brecha entre el tipo de cambio oficial y el paralelo, junto con una mayor segmentación del mercado cambiario [DATO]. Las APIs cobradas en USD pueden encarecerse en bolivianos.

**Respuesta:** limitar llamadas al LLM, definir presupuestos de consumo, conservar una alternativa sin LLM y validar precios localmente.

### A6. Requisitos legales, sanitarios y operativos

La gestión y el tratamiento de residuos exigen cumplimiento normativo. GreenSpark no debe conectar operadores sin validar su habilitación ni tratar una estimación digital como evidencia suficiente de transformación física.

**Respuesta:** incorporar validación de operadores, minimización de datos y trazabilidad desde el piloto.

### A7. Competidores o soluciones institucionales con mayor acceso a datos

Operadores existentes, plataformas logísticas o iniciativas públicas podrían desarrollar funciones similares y contar con mejor acceso a información operativa [INFERENCIA].

**Respuesta:** concentrar la ventaja en datos locales de calidad, facilidad de integración, trazabilidad y experiencia de uso; no basar la defensa únicamente en la idea.

## 8. Cruce estratégico FODA

### 8.1 Estrategias FO: usar fortalezas para aprovechar oportunidades

| Cruce | Estrategia | Decisión concreta |
| --- | --- | --- |
| **F1 + O1** | Usar la IA demostrable para convertir un flujo urbano abstracto en decisiones por generador y tipo de residuo. | Mostrar en la demo cómo dos residuos con el mismo peso producen estimaciones distintas según sus características. |
| **F2 + O3** | Presentar GreenSpark como una capa de coordinación que complementa iniciativas municipales y privadas sin esperar nueva infraestructura. | Ejecutar el MVP con operadores **[SIMULADOS]** claramente etiquetados y diseñar la integración real para el piloto. |
| **F4 + O5** | Aprovechar la arquitectura modular para conectar múltiples generadores y alternativas receptoras. | Mantener separados el registro, la predicción, el emparejamiento y el ruteo. |
| **F5 + O6** | Convertir estimaciones trazables en un reporte comprensible para clientes potenciales. | Mostrar supuestos visibles y distinguir impacto estimado de impacto verificado. |

### 8.2 Estrategias DO: reducir debilidades aprovechando oportunidades

| Cruce | Estrategia | Decisión concreta |
| --- | --- | --- |
| **D1 + O1** | Usar el volumen potencial como justificación para levantar datos primarios, no como sustituto de ellos. | Diseñar el piloto para capturar tipo, peso, frecuencia, contaminación y destino real. |
| **D2 + O6** | Validar simultáneamente el dolor operativo y el valor comercial del reporte. | Entrevistar a restaurantes, supermercados, universidades, mercados y hoteles antes de cerrar precios. |
| **D3 + O3** | Aprovechar el interés institucional para mapear alternativas receptoras y requisitos de integración. | Confirmar con EMACRUZ y operadores privados qué capacidades existen y qué flujos aceptan. |
| **D4 + O5** | Convertir el primer piloto trazable en evidencia comercial y técnica. | Publicar un caso con toneladas desviadas, calidad del residuo, ruta real e impacto verificado. |

### 8.3 Estrategias FA: usar fortalezas para mitigar amenazas

| Cruce | Estrategia | Decisión concreta |
| --- | --- | --- |
| **F3 + A5** | Evitar que el valor central dependa del costo o disponibilidad del LLM. | Mantener predicción, impacto y ruteo disponibles cuando DeepSeek falle. |
| **F4 + A3** | Adaptarse a cambios en la infraestructura municipal sin rehacer el producto. | Modelar plantas y operadores como integraciones configurables. |
| **F5 + A6** | Reducir el riesgo de sobreprometer cumplimiento o impacto. | Etiquetar estimaciones y exigir validación antes de reportar resultados observados. |
| **F6 + A1** | Reducir la complejidad inicial concentrándose en generadores con capacidad de segregación. | Seleccionar entre 5 y 10 generadores ancla para el piloto. |

### 8.4 Estrategias DA: reducir debilidades y evitar amenazas

| Cruce | Estrategia | Decisión concreta |
| --- | --- | --- |
| **D1 + A1** | Evitar predicciones engañosas cuando el residuo llega contaminado. | Incorporar `nivel_contaminacion` como entrada y bloquear recomendaciones cuando falten datos mínimos. |
| **D3 + A2** | No ofrecer una ruta de valorización sin recepción confirmada. | Habilitar emparejamientos reales solo para operadores validados; usar etiquetas **[SIMULADO]** en la demo. |
| **D5 + A5** | Controlar la exposición a servicios externos cobrados en USD. | Aplicar límites de uso, caché y una salida sin LLM. |
| **D6 + A6** | Evitar un piloto demasiado amplio para la capacidad del equipo. | Iniciar en una zona acotada y documentar un procedimiento mínimo de cumplimiento. |

## 9. Priorización de factores críticos

| Factor | Tipo | Impacto | Probabilidad | Urgencia para el MVP | Prioridad | Acción inmediata |
| --- | --- | --- | --- | --- | --- | --- |
| Datos iniciales referenciales y simulados | Debilidad | Alto | Alta | Alta | **Crítica** | Etiquetar simulaciones y mostrar comparación contra baseline. |
| Segregación inconsistente en origen | Amenaza | Alto | Alta | Alta | **Crítica** | Registrar contaminación e iniciar con generadores ancla. |
| Capacidad receptora no confirmada | Amenaza | Alto | Media-Alta | Alta | **Crítica** | No prometer cobertura; validar operadores antes del piloto. |
| IA visible y demostrable | Fortaleza | Alto | Alta | Alta | **Crítica** | Preparar el flujo de demo de punta a punta. |
| Flujo orgánico urbano relevante | Oportunidad | Alto | Alta | Media | **Alta** | Usarlo como justificación del problema, no como impacto logrado. |
| Dependencia parcial del LLM | Debilidad | Medio | Media | Alta | **Alta** | Implementar una salida degradada sin agente. |
| Estado operativo de la planta municipal | Amenaza / oportunidad | Medio-Alto | Media | Media | **Alta** | Confirmar con EMACRUZ antes del piloto. |
| Bloqueos y disponibilidad de combustible | Amenaza | Medio | Media | Media | **Media** | Permitir reoptimización y registrar incidencias. |
| Presión cambiaria sobre APIs en USD | Amenaza | Medio | Media-Alta | Media | **Media** | Limitar consumo y validar precios en Bs. |
| Reportes de sostenibilidad como producto pagable | Oportunidad | Medio-Alto | Desconocida | Media | **Alta** | Validar disposición a pagar mediante entrevistas. |

## 10. Implicaciones para la solución propuesta

El análisis FODA obliga a mantener un alcance preciso. GreenSpark debe presentarse como un **prototipo funcional de software** que demuestra cómo la IA mejora la toma de decisiones sobre residuos orgánicos, no como una operación industrial ya desplegada.

### 10.1 Decisiones para el MVP

1. **Demostrar una sola historia completa:** registrar un residuo, estimar su potencial, asignar una alternativa receptora **[SIMULADA]**, optimizar la ruta y generar una explicación.
2. **Separar cálculo y redacción:** el backend calcula las cifras; el LLM las interpreta sin inventar valores.
3. **Mostrar honestidad visual:** toda operación simulada y toda métrica estimada debe estar etiquetada.
4. **Mantener resiliencia:** si DeepSeek falla, la predicción, el panel y el ruteo continúan funcionando.
5. **Evitar cobertura ficticia:** la demo puede mostrar operadores simulados, pero el piloto solo debe habilitar operadores reales previamente validados.

### 10.2 Decisiones para el piloto

1. Empezar con **una zona acotada**, **una alternativa receptora confirmada** y entre **5 y 10 generadores**.
2. Capturar datos primarios: tipo de residuo, peso, frecuencia, contaminación, ruta, destino y resultado observado.
3. Validar con cada operador su capacidad, permisos y requisitos de recepción.
4. Medir si el reporte de sostenibilidad resuelve un dolor real y si existe disposición a pagar.
5. Reentrenar el modelo con evidencia local y comparar nuevamente contra el baseline.

### 10.3 Posicionamiento frente al jurado

> GreenSpark no promete construir infraestructura en un día. Demuestra la capa de inteligencia que permite identificar residuos orgánicos aprovechables, estimar su potencial, coordinar su derivación y documentar el impacto con trazabilidad.

## 11. Conclusión

GreenSpark parte de una oportunidad local verificable: Santa Cruz de la Sierra genera un volumen relevante de residuos orgánicos compostables, mantiene una operación significativa de entierro sanitario y ya reconoce institucionalmente la necesidad de aprovechar mejor esos residuos. La Ley N.º 755, CompostArte y el proyecto municipal de tratamiento mecánico-biológico refuerzan la pertinencia del problema.

La fortaleza principal del proyecto es su capacidad de demostrar valor mediante software e IA sin depender de hardware propio. Sus riesgos más importantes también son claros: los datos iniciales todavía son referenciales, la segregación debe validarse por generador y la capacidad receptora real no está confirmada. Por eso, la estrategia correcta para la hackathon es presentar un MVP ejecutable, transparente y acotado; y plantear un piloto posterior con datos primarios, operadores validados e impacto medido.

## 12. Fuentes consultadas

| Fuente | Uso en este documento |
| --- | --- |
| [GAMSC: campaña CompostArte y datos del PMGIRS 2023](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517) | Volumen diario de residuos, proporción de orgánicos compostables e iniciativa local de compostaje. |
| [GAMSC: proyecto de Planta Municipal de Tratamiento Mecánico y Biológico](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=337) | Ubicación, capacidad proyectada, tratamiento aeróbico y anaeróbico, biogás y reducción proyectada del entierro sanitario. |
| [GAMSC: Día Mundial del Reciclaje, 17/05/2025](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=708) | Estado publicado de la planta como infraestructura futura. |
| [GAMSC: Rendición Pública de Cuentas Final 2025](https://www.gmsantacruz.gob.bo/Publicaciones-Municipales/rendicion_de_cuentas_2025_final.pdf) | Entierro sanitario reportado durante la gestión 2025. |
| [GAMSC: bloqueos y escasez de diésel afectan la recolección, 26/07/2024](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=421) | Riesgo logístico por interrupciones externas. |
| [GAMSC: bloqueo al relleno sanitario, 14/08/2024](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=437) | Identificación de San Miguel de los Junos como relleno operativo y riesgo de bloqueo. |
| [Servicio Estatal de Autonomías: Ley N.º 755 de Gestión Integral de Residuos](https://sea.gob.bo/digesto/CompendioII/N/142_L_755.pdf) | Jerarquía normativa de prevención, aprovechamiento y disposición final segura. |
| [Servicio Estatal de Autonomías: Reglamento General de la Ley N.º 755](https://sea.gob.bo/digesto/CompendioII/N/144_L_755.pdf) | Definiciones y marco regulatorio general aplicable a la gestión de residuos. |
| [AETN: aprovechamiento de energías primarias por empresas del SIN durante 2024](https://anuariodig.aetn.gob.bo/informacion-estadistica/aprovechamiento-de-energias-primarias-por-empresas-del-sistema-interconectado-nacional-s-i-n/) | Precedente regional de generación eléctrica con biomasa. |
| [Banco Central de Bolivia: Memoria 2025, Capítulo 2](https://www.bcb.gob.bo/webdocs/publicacionesbcb/2026/04/04/Cap.%202.pdf) | Riesgo cambiario para costos tecnológicos denominados en USD. |
| [EPA: información clave sobre gas de relleno sanitario](https://www.epa.gov/lmop/key-information-about-landfill-gas-and-lmop) | Contexto técnico sobre metano generado por la descomposición de residuos orgánicos en rellenos. |

## 13. Versión condensada para una diapositiva

### FODA estratégico

| **Fortalezas** | **Oportunidades** |
| --- | --- |
| IA demostrable sin hardware propio. | ~971 t/día de orgánicos compostables [DATO + CÁLCULO]. |
| Predicción y ruteo independientes del LLM. | Ley N.º 755 prioriza el aprovechamiento. |
| Arquitectura modular e interoperable. | CompostArte y proyecto municipal con biogás. |
| Simulaciones y estimaciones etiquetadas. | Necesidad de coordinar actores dispersos. |

| **Debilidades** | **Amenazas** |
| --- | --- |
| Datos iniciales referenciales y simulados. | Segregación inconsistente en origen. |
| Sin operaciones ni clientes validados todavía. | Capacidad receptora no confirmada. |
| Dependencia de operadores externos. | Cambios en infraestructura y logística urbana. |
| Dependencia parcial de APIs externas. | Presión cambiaria sobre servicios en USD. |

> **Mensaje para el pitch:** GreenSpark convierte una brecha de coordinación en una oportunidad medible: registra residuos, estima su potencial, optimiza su derivación y documenta el impacto sin prometer infraestructura que todavía no opera.
