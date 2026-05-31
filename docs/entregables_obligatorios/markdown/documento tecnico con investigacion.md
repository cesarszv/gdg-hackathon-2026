# GreenSpark: Documento técnico con investigación

**Equipo:** HackHeroes
**Hackathon:** Build With AI 2026
**Mención:** Energía
**Lugar:** Santa Cruz de la Sierra, Bolivia
**Fecha:** 31 de mayo de 2026

> **En una frase:** GreenSpark diseña y simula una ruta de economía circular basada inicialmente en reactores MFC para investigar la conversión de residuos bioorgánicos en electricidad y, cuando exista evidencia y volumen suficiente, evaluar biodigestores para escalar capacidad.

## 0. Nota de honestidad técnica

Este documento distingue cuatro tipos de información:

- **[DATO]:** información publicada por una fuente verificable.
- **[CÁLCULO]:** operación explícita derivada de un dato.
- **[SIMULACIÓN]:** resultado generado por un modelo o escenario, todavía no observado en un reactor local.
- **[META EXPLORATORIA]:** objetivo sujeto a medición y validación.

GreenSpark no presenta un reactor físico construido por el equipo ni electricidad medida durante la hackathon. El entregable es un diseño respaldado por investigación, una simulación conceptual y una hoja de ruta experimental. Tampoco afirma que el subproducto sea un fertilizante comercial: su posible uso agronómico requiere caracterización, estabilización y revisión regulatoria.

## 1. Resumen ejecutivo

Santa Cruz de la Sierra produce **1.909,86 t/día** de residuos y el **50,84%** corresponde a residuos orgánicos compostables: aproximadamente **971 t/día** [DATO + CÁLCULO]. En mayo de 2026 se inauguró una planta municipal de compostaje con capacidad inicial de hasta **7 t/día** y Swisscontact reportó más de **20 t/día** de residuos bioorgánicos en el Mercado Nuevo Abasto [DATO]. Estos avances demuestran que existe interés local y un flujo aprovechable, pero no agotan la necesidad de nuevas rutas circulares.

GreenSpark propone tres fases:

1. **Investigación universitaria:** diseño y simulación de reactores de celdas de combustible microbianas (MFC).
2. **Pilotos instrumentados:** módulos MFC con colegios privados, restaurantes y agroindustrias.
3. **Escalamiento:** evaluación de biodigestores o configuraciones híbridas cuando exista suficiente volumen segregado.

El aporte de IA consiste en comparar escenarios, estimar rendimiento eléctrico proyectado, recomendar experimentos y traducir resultados en métricas de sostenibilidad. Su valor aumenta a medida que el piloto físico incorpora mediciones locales.

## 2. Problema local

Santa Cruz enfrenta una brecha de valorización: existe materia bioorgánica relevante, pero faltan datos locales para decidir qué tecnología implementar, con qué sustratos y a qué escala. Una institución no debería invertir en infraestructura energética únicamente a partir de una promesa. Necesita medir variables, comparar escenarios y definir un camino de escalamiento.

### 2.1 Evidencia

| Evidencia | Interpretación |
| --- | --- |
| **1.909,86 t/día** de residuos sólidos y **50,84%** de orgánicos compostables según PMGIRS 2023. | La materia bioorgánica es un flujo local relevante. |
| Planta municipal de compostaje con capacidad inicial de hasta **7 t/día**. | Existen avances locales, pero también espacio para rutas complementarias. |
| Más de **20 t/día** de residuos bioorgánicos reportados en el Mercado Nuevo Abasto. | Hay generadores concentrados que pueden facilitar estudios futuros. |
| DS 4477, modificado por DS 5167 y DS 5549. | Bolivia reconoce generación distribuida, autoconsumo e inyección regulada de excedentes. |

### 2.2 Cliente inicial

El primer cliente no es toda la ciudad. Son **universidades privadas** capaces de financiar investigación aplicada y utilizar su campus como laboratorio vivo. Su incentivo combina aprendizaje, reputación, participación estudiantil y métricas de sostenibilidad.

## 3. Fundamento técnico

### 3.1 Qué es un reactor MFC

Una celda de combustible microbiana o **MFC** es un sistema bioelectroquímico. En la cámara anódica, microorganismos oxidan materia orgánica y liberan electrones. Estos circulan por un circuito externo hacia el cátodo y producen corriente eléctrica. El sistema permite estudiar simultáneamente tratamiento de sustrato y recuperación de energía.

```text
Residuo bioorgánico acondicionado
   → cámara anódica: actividad microbiana
   → liberación de electrones y protones
   → circuito externo: corriente eléctrica
   → cámara catódica: reacción de reducción
```

### 3.2 Qué puede afirmarse

- Las MFC convierten directamente materia orgánica en electricidad en condiciones experimentales.
- El rendimiento depende del sustrato, el diseño, los materiales, el pH, la temperatura y la resistencia externa.
- La literatura reporta experimentos con residuos alimentarios y aguas residuales.
- Algunos sistemas bioelectroquímicos permiten recuperar nutrientes, por ejemplo fósforo en forma de estruvita.

### 3.3 Qué no puede afirmarse todavía

- Que GreenSpark genera electricidad medida en Santa Cruz.
- Que una MFC cubrirá automáticamente una fracción determinada del consumo institucional.
- Que el remanente puede aplicarse directamente al agro.
- Que una instalación MFC está lista para inyectar energía a la red.

La literatura reciente identifica desafíos de comercialización: baja potencia, costos de materiales, transferencia de electrones, configuración del reactor y escalamiento.

## 4. Hipótesis a validar

| Código | Hipótesis | Método de validación |
| --- | --- | --- |
| **H1** | Una universidad privada pagaría por una fase de investigación aplicada y métricas de sostenibilidad. | Entrevistas, carta de interés y propuesta de convenio. |
| **H2** | Los residuos locales pueden segregarse con consistencia suficiente para alimentar experimentos MFC. | Registro de tipo, masa, frecuencia y contaminación. |
| **H3** | Un modelo puede priorizar escenarios experimentales mejor que una regla fija. | Comparación mediante MAE, RMSE y R² frente a baseline. |
| **H4** | Un piloto físico permite construir un dataset local útil para mejorar recomendaciones. | Medición de voltaje, corriente, potencia, pH, temperatura y estabilidad. |
| **H5** | El volumen segregado puede justificar una evaluación posterior de biodigestores. | Inventario por generador y estudio de prefactibilidad. |
| **H6** | El subproducto posee potencial agronómico aprovechable después del tratamiento correspondiente. | Caracterización fisicoquímica, estabilización y revisión regulatoria. |

## 5. Variables del modelo MFC

| Grupo | Variables |
| --- | --- |
| **Sustrato** | tipo de residuo, masa, humedad, concentración orgánica o COD cuando esté disponible, nivel de contaminación |
| **Operación** | pH, temperatura, tiempo de retención, frecuencia de alimentación |
| **Reactor** | volumen de cámara, área de electrodo, material, separación entre electrodos, resistencia externa |
| **Resultados** | voltaje, corriente, potencia, densidad de potencia, estabilidad temporal, remoción de materia orgánica |
| **Circularidad** | residuo procesado, energía proyectada o medida, subproducto recuperado, estado de validación agronómica |

## 6. Solución por fases

| Fase | Alcance | Cliente | Resultado defendible |
| --- | --- | --- | --- |
| **1. Investigación y simulación** | Diseño conceptual MFC, escenarios asistidos por IA, reporte y protocolo experimental. | Universidades privadas. | Priorización de experimentos y hoja de ruta local. |
| **2. Piloto MFC** | Reactor físico instrumentado, ingestión de sensores y reentrenamiento. | Colegios privados, restaurantes y agroindustrias. | Rendimiento medido, métricas y recomendaciones basadas en datos locales. |
| **3. Escalamiento** | Prefactibilidad de biodigestores o soluciones híbridas y revisión de conexión regulada. | Instituciones y empresas con volumen suficiente. | Decisión de inversión basada en sustrato, demanda y regulación. |

## 7. Metas energéticas

| Horizonte | Formulación correcta |
| --- | --- |
| **Fases 1 y 2** | Explorar escenarios que podrían contribuir hasta **10%** de cargas eléctricas seleccionadas [META EXPLORATORIA]. |
| **Fase 3** | Evaluar soluciones de mayor capacidad que podrían contribuir hasta **20%** de cargas seleccionadas [META EXPLORATORIA]. |

Estas metas no equivalen a ahorro garantizado sobre la factura total. Para calcular ahorro económico se necesita conocer energía medida, perfil horario, tarifa aplicable y costos de implementación.

## 8. Aplicación de IA

La IA responde una pregunta concreta: **¿qué escenario conviene validar primero?**

1. Recibe variables del sustrato, operación y reactor.
2. Estima potencia y estabilidad proyectadas.
3. Compara configuraciones.
4. Recomienda un siguiente experimento y explica sus supuestos.
5. Cuando existan sensores, detecta desviaciones entre rendimiento esperado y medido.
6. El agente generativo redacta un reporte institucional con datos del backend, sin inventar cifras.

Consulta el detalle en [aplicación de IA](<./aplicacion de ia.md>).

## 9. Arquitectura propuesta

```text
[ Interfaz institucional ]
          │
          ▼
[ API de simulación y reportes ]
          │
          ├──► [ dataset de literatura + escenarios etiquetados ]
          ├──► [ modelo predictivo + baseline ]
          ├──► [ recomendador de experimentos ]
          └──► [ agente explicativo ]

Fase 2:
[ sensores del reactor MFC ] ──► [ telemetría ] ──► [ dataset local ]
```

Consulta el detalle en [arquitectura tecnológica](<./arquitectura tecnologica.md>).

## 10. Modelo de economía circular

```text
Residuo bioorgánico segregado
   → investigación y piloto MFC
       → electricidad proyectada y luego medida
       → datos locales para mejorar decisiones
       → subproducto con potencial agronómico sujeto a validación
   → cuando el volumen lo justifica:
       evaluación de biodigestor o solución híbrida
       → mayor capacidad energética
       → autoconsumo y posible retribución regulada de excedentes
```

## 11. Incentivos por actor

| Actor | Aporta | Recibe |
| --- | --- | --- |
| **Universidad** | Financiamiento investigativo, espacio y participación académica. | Innovación visible, datos, formación y reporte de sostenibilidad. |
| **Restaurante** | Residuo separado y registros. | Métrica de circularidad y ruta futura para reducir residuos desaprovechados. |
| **Agroindustria** | Sustrato concentrado y contexto operativo. | Evaluación energética y posible valorización agronómica. |
| **Sector agropecuario** | Requisitos de uso y validación en campo. | Potencial insumo circular caracterizado. |
| **GreenSpark** | Diseño, simulación, monitoreo y conocimiento acumulado. | Convenios, implementación y servicios de seguimiento. |

## 12. Marco regulatorio

El **DS 4477** estableció condiciones generales para generación distribuida y retribución por energía inyectada. El **DS 5167** incorporó modificaciones en 2024 y el **DS 5549**, publicado en 2026, actualizó definiciones y condiciones, incluyendo autoconsumo, excedentes y generación distribuida de media escala.

Para GreenSpark, la secuencia correcta es:

1. investigar y medir;
2. priorizar autoconsumo en cargas seleccionadas;
3. evaluar requisitos técnicos, registro y adecuaciones;
4. estudiar retribución por excedentes únicamente si el escalamiento lo permite.

## 13. Riesgos y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| Potencia MFC insuficiente para una aplicación propuesta. | Validar por etapas y limitar las metas a cargas seleccionadas. |
| Datos simulados interpretados como resultados. | Etiquetar escenarios y separar predicción de medición. |
| Sustrato contaminado o variable. | Registrar composición y establecer criterios de aceptación. |
| Uso agronómico prematuro. | Caracterizar y estabilizar el subproducto antes de ofrecerlo. |
| Lectura incompleta del marco eléctrico. | Citar DS 4477, DS 5167 y DS 5549; consultar al distribuidor y a la AETN al escalar. |

## 14. Fuentes consultadas

### Contexto local y normativa

- [GAMSC: campaña CompostArte y datos del PMGIRS 2023](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517)
- [Swisscontact: planta municipal de compostaje, 14/05/2026](https://www.swisscontact.org/es/noticias/un-nuevo-rumbo-para-los-residuos-organicos-santa-cruz-inaugura-su-planta-de-compostaje)
- [Swisscontact: Semilla Urbana, 28/04/2026](https://www.swisscontact.org/es/noticias/nace-una-alternativa-sostenible-para-la-gestion-y-aprovechamiento-de-los-residuos-organicos)
- [AETN: Decreto Supremo N.º 4477](https://www.aetn.gob.bo/docfly/app/webroot/uploads/norma-rloza-2021-05-27-i.pdf)
- [AETN: Decreto Supremo N.º 5167](https://www.aetn.gob.bo/docfly/app/webroot/uploads/AETN24-0611151515%28admin%29.pdf)
- [AETN: Decreto Supremo N.º 5549](https://www.aetn.gob.bo/docfly/app/webroot/uploads/26/8998-P5JK.pdf)

### Fundamento MFC y recuperación de nutrientes

- [Bioresources and Bioprocessing: revisión crítica de MFC para bioenergía sostenible, 2025](https://link.springer.com/article/10.1186/s13068-025-02649-y)
- [Bioresources and Bioprocessing: MFC con residuos alimentarios, 2024](https://link.springer.com/article/10.1186/s13068-024-02500-6)
- [Processes: revisión de producción energética y recuperación de nutrientes mediante MFC](https://www.mdpi.com/2227-9717/9/8/1318)
- [PubMed: recuperación de fósforo como estruvita mediante MFC](https://pubmed.ncbi.nlm.nih.gov/21411312/)

## 15. Decisión recomendada

La propuesta defendible para la hackathon es presentar GreenSpark como una **ruta de innovación aplicada**, no como una central eléctrica terminada. La primera venta es investigación útil para una universidad. La evidencia obtenida permite diseñar un piloto MFC y decidir con criterio cuándo escalar hacia biodigestores.
