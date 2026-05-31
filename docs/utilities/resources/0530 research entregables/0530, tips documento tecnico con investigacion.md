## Documento técnico con investigación para hackathon

La trampa típica: hacer un documento largo, académico y lleno de humo. **Ni en pedo.** En hackathon el jurado necesita entender rápido:

1. **Qué problema investigaste**
2. **Qué evidencia encontraste**
3. **Qué solución construiste**
4. **Por qué tus decisiones técnicas tienen sentido**
5. **Por qué es viable aunque sea un prototipo**

El documento debe ser una mezcla entre **research brief + arquitectura técnica + justificación de implementación**.

---

# Estructura recomendada

## 1. Portada

Simple.

```md
# Documento Técnico e Investigación

## Nombre del proyecto
EnergiaLens SCZ

## Equipo
Nombre de integrantes

## Hackathon
Build With AI 2026 / Google Developer Groups

## Fecha
30 de mayo de 2026
```

---

## 2. Resumen ejecutivo

Máximo media página.

Debe responder:

* ¿Cuál es el problema?
* ¿A quién afecta?
* ¿Qué solución proponen?
* ¿Qué tecnología usan?
* ¿Qué impacto esperan?

Ejemplo:

```md
Este proyecto propone una plataforma de diagnóstico energético urbano asistida por IA, orientada a identificar patrones de consumo, pérdidas de eficiencia y oportunidades de optimización en infraestructura pública o privada. La solución combina análisis de datos, modelos de IA vía API y visualización interactiva para transformar información técnica en recomendaciones accionables.
```

Acá no metas arquitectura todavía. Primero vendé el valor.

---

## 3. Contexto e investigación del problema

Esta es la parte de **research**. No es decoración. Tiene que justificar que el problema existe.

### Qué incluir

* Situación actual
* Datos relevantes
* Causas del problema
* Consecuencias
* Usuarios afectados
* Limitaciones actuales

Estructura piola:

```md
## Contexto del problema

### Situación actual
Explicación breve del estado actual del problema.

### Evidencia encontrada
- Dato 1
- Dato 2
- Dato 3

### Causas principales
- Falta de medición
- Mala distribución de recursos
- Baja visibilidad operativa
- Decisiones sin datos

### Consecuencias
- Mayor costo
- Pérdida de eficiencia
- Impacto ambiental
- Dificultad para priorizar inversiones
```

**Clave:** no pongas datos sin explicar por qué importan. Dato sin interpretación es relleno, boludo.

---

## 4. Definición precisa del problema

Acá bajás el problema a algo concreto.

Mala versión:

> Hay problemas de energía.

Buena versión:

> Las instituciones no cuentan con una herramienta rápida para identificar zonas, equipos o patrones de consumo energético ineficiente, lo que dificulta tomar decisiones preventivas y priorizar mejoras con base en evidencia.

Formato recomendado:

```md
## Problema definido

Actualmente, [usuario/institución] enfrenta [problema específico] debido a [causa principal]. Esto genera [impacto medible o relevante]. El desafío es construir una solución que permita [resultado deseado] usando [restricciones del hackathon].
```

---

## 5. Objetivos del proyecto

Separá objetivo general y específicos.

```md
## Objetivo general

Desarrollar un prototipo funcional que permita analizar datos energéticos y generar recomendaciones asistidas por IA para mejorar la eficiencia y apoyar la toma de decisiones.

## Objetivos específicos

- Procesar datos simulados o reales relacionados con consumo energético.
- Identificar patrones relevantes mediante análisis automatizado.
- Generar recomendaciones explicables usando IA.
- Visualizar resultados en una interfaz clara para usuarios no técnicos.
- Validar la viabilidad técnica del prototipo en un entorno local.
```

No pongas 20 objetivos. Con 4–6 basta.

---

## 6. Alcance y limitaciones

Esta sección es MUY importante en hackathon porque demuestra madurez técnica.

```md
## Alcance

El prototipo permite:
- Cargar o usar datasets simulados.
- Analizar indicadores energéticos.
- Generar recomendaciones mediante IA.
- Visualizar resultados en dashboard.
- Exportar o presentar conclusiones.

## Fuera de alcance

El prototipo no incluye:
- Integración con hardware físico real.
- Sensores IoT desplegados en campo.
- Predicciones certificadas para uso industrial.
- Validación con datos oficiales en tiempo real.
```

Esto no debilita el proyecto. Lo hace más creíble. El que promete todo en 48 horas parece improvisado.

---

## 7. Investigación técnica

Acá justificás tecnologías, métodos y alternativas.

### Subestructura recomendada

```md
## Investigación técnica

### Opciones evaluadas

| Necesidad | Alternativa 1 | Alternativa 2 | Decisión |
|---|---|---|---|
| IA | Modelo local | API externa | API externa |
| Frontend | React | Angular | React |
| Backend | FastAPI | Express | FastAPI |
| Datos | Sensores reales | Dataset simulado | Dataset simulado |
| Visualización | Gráficos básicos | Dashboard interactivo | Dashboard interactivo |

### Criterios de decisión

- Tiempo disponible
- Complejidad de implementación
- Robustez del prototipo
- Costo
- Explicabilidad
- Facilidad de presentación
```

Esto es arquitectura real: **decidir con restricciones**, no elegir tecnologías porque están de moda.

---

## 8. Justificación del uso de IA

Esta sección debe ser quirúrgica. No digas “usamos IA porque el hackathon es de IA”. Eso es mediocre.

### Buen enfoque

```md
## Justificación del uso de IA

La IA se utiliza porque el problema requiere interpretar información técnica y convertirla en recomendaciones comprensibles para usuarios no especializados.

La IA aporta valor en tres niveles:

1. Análisis asistido de patrones.
2. Generación de explicaciones en lenguaje natural.
3. Priorización de recomendaciones según impacto potencial.

No se usa IA para reemplazar reglas técnicas básicas, sino para aumentar la capacidad de interpretación y comunicación del sistema.
```

### Pregunta clave

El jurado va a pensar:

> ¿Esto necesitaba IA o la metieron a la fuerza?

Tu documento tiene que responder eso antes de que lo pregunten.

---

## 9. Arquitectura de la solución

Acá ponés el diseño técnico.

```md
## Arquitectura de la solución

### Componentes principales

- Frontend: interfaz de usuario y visualización de datos.
- Backend: procesamiento, validación y exposición de APIs.
- Módulo de IA: generación de recomendaciones y explicaciones.
- Módulo de datos: datasets simulados, normalización e indicadores.
- Dashboard: presentación visual de métricas y resultados.

### Flujo general

1. El usuario carga o selecciona un escenario energético.
2. El backend procesa los datos.
3. El sistema calcula indicadores técnicos.
4. La IA interpreta resultados y genera recomendaciones.
5. El frontend muestra gráficos, alertas y acciones sugeridas.
```

Podés agregar un diagrama Mermaid:

````md
```mermaid
flowchart TD
    A[Usuario] --> B[Frontend]
    B --> C[Backend API]
    C --> D[Módulo de análisis de datos]
    C --> E[Módulo de IA]
    D --> F[Indicadores energéticos]
    E --> G[Recomendaciones explicables]
    F --> B
    G --> B
````

````

---

## 10. Stack tecnológico

No hagas una lista vacía de tecnologías. Justificá cada una.

```md
## Stack tecnológico

| Capa | Tecnología | Justificación |
|---|---|---|
| Frontend | React | Permite construir una interfaz interactiva rápidamente. |
| Backend | FastAPI | Facilita crear APIs limpias y rápidas en Python. |
| IA | API de modelo LLM | Reduce complejidad operativa frente a correr modelos locales. |
| Datos | JSON/CSV simulado | Adecuado para prototipo sin hardware real. |
| Visualización | Recharts / Chart.js | Permite representar métricas de forma clara. |
| Deploy local | Monorepo | Simplifica integración en poco tiempo. |
````

La columna de **justificación** es la parte que más importa.

---

## 11. Modelo de datos o estructura de información

Aunque sea simple, documentalo.

```md
## Modelo de datos

### Entidades principales

#### EnergyReading

| Campo | Tipo | Descripción |
|---|---|---|
| id | string | Identificador de lectura |
| location | string | Ubicación o zona |
| timestamp | datetime | Fecha y hora |
| consumption_kwh | number | Consumo energético |
| cost | number | Costo estimado |
| source | string | Fuente de datos |

#### Recommendation

| Campo | Tipo | Descripción |
|---|---|---|
| id | string | Identificador |
| severity | string | Nivel de prioridad |
| finding | string | Problema detectado |
| recommendation | string | Acción sugerida |
| expected_impact | string | Impacto estimado |
```

Esto demuestra que pensaron el sistema, no solo hicieron pantallas lindas.

---

## 12. Lógica del sistema

Acá explicás el “cómo piensa” el prototipo.

```md
## Lógica de funcionamiento

El sistema procesa los datos en cuatro etapas:

1. Normalización de datos.
2. Cálculo de indicadores.
3. Detección de patrones o anomalías.
4. Generación de recomendaciones asistidas por IA.

### Indicadores usados

- Consumo total.
- Consumo promedio.
- Variación por zona.
- Costo estimado.
- Nivel de prioridad.
- Potencial de ahorro.
```

Si usan reglas + IA, decilo claramente:

```md
El sistema utiliza reglas determinísticas para cálculos técnicos y usa IA para explicar, priorizar y redactar recomendaciones. Esto evita depender completamente del modelo y mejora la confiabilidad del prototipo.
```

Eso suena MUCHO más serio.

---

## 13. Prompts o diseño de interacción con IA

Si usan LLMs, documenten los prompts. No todo el prompt necesariamente, pero sí la estrategia.

```md
## Diseño del uso de IA

### Entrada enviada al modelo

- Indicadores calculados.
- Resumen del escenario.
- Restricciones técnicas.
- Nivel de detalle requerido.

### Salida esperada

- Diagnóstico breve.
- Recomendaciones priorizadas.
- Explicación comprensible.
- Riesgos o advertencias.

### Controles aplicados

- Se limita el contexto enviado.
- Se estructuran las respuestas en JSON.
- Se valida que la salida contenga campos obligatorios.
- Los cálculos numéricos no dependen directamente del modelo.
```

Punto importante: **no dejen que la IA invente números**. La IA explica; el sistema calcula.

---

## 14. Validación del prototipo

Aunque no tengan hardware, pueden validar con escenarios simulados.

```md
## Validación

El prototipo fue evaluado mediante escenarios simulados:

| Escenario | Condición | Resultado esperado |
|---|---|---|
| Alto consumo nocturno | Consumo elevado fuera de horario | Alerta de posible desperdicio |
| Pico de demanda | Aumento repentino | Recomendación de revisión |
| Zona eficiente | Consumo estable | Prioridad baja |
| Costo elevado | Tarifa alta + consumo alto | Recomendación de optimización |
```

Esto es clave para defender el proyecto. Sin validación, parece demo de juguete.

---

## 15. Riesgos técnicos y mitigaciones

Otra sección que da seriedad.

```md
## Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Datos simulados poco realistas | Reduce credibilidad | Basar escenarios en patrones plausibles |
| Alucinaciones del modelo IA | Recomendaciones incorrectas | Validar salida y separar cálculos de generación textual |
| Falta de hardware | Menor validación física | Simulación documentada y arquitectura extensible |
| Poco tiempo | Funcionalidad limitada | Priorizar flujo principal end-to-end |
```

---

## 16. Impacto esperado

Conectalo con el tema del hackathon.

```md
## Impacto esperado

La solución puede contribuir a:

- Reducir desperdicio energético.
- Mejorar la toma de decisiones.
- Priorizar inversiones de eficiencia.
- Traducir datos técnicos a lenguaje comprensible.
- Escalar hacia integraciones futuras con sensores o sistemas reales.
```

Acá podés conectar con agua, agricultura, salud, transporte, etc., si tu proyecto impacta indirectamente en otros ejes.

---

## 17. Roadmap

Hackathon = prototipo. Pero hay que mostrar evolución.

```md
## Roadmap

### Fase 1 — Hackathon
- Dashboard funcional.
- Dataset simulado.
- Recomendaciones IA.
- Demo local.

### Fase 2 — Validación
- Integración con datos reales.
- Mejoras en indicadores.
- Pruebas con usuarios.

### Fase 3 — Escalamiento
- Integración IoT.
- Monitoreo en tiempo real.
- Modelo predictivo.
- Reportes automáticos.
```

---

## 18. Conclusión técnica

Cerrá fuerte.

```md
## Conclusión

El proyecto demuestra la viabilidad de una solución asistida por IA para transformar datos energéticos en recomendaciones accionables. Aunque el prototipo no integra hardware real, la arquitectura propuesta permite escalar hacia sensores, datos en tiempo real y validación en campo. La principal fortaleza técnica está en separar cálculos determinísticos de interpretación asistida por IA, reduciendo riesgos y aumentando explicabilidad.
```

---

# Orden recomendado del documento

Usá este orden:

```md
# Documento Técnico e Investigación

1. Portada
2. Resumen ejecutivo
3. Contexto e investigación del problema
4. Definición precisa del problema
5. Objetivos
6. Alcance y limitaciones
7. Investigación técnica
8. Justificación del uso de IA
9. Arquitectura de la solución
10. Stack tecnológico
11. Modelo de datos
12. Lógica del sistema
13. Diseño del uso de IA
14. Validación del prototipo
15. Riesgos y mitigaciones
16. Impacto esperado
17. Roadmap
18. Conclusión
19. Referencias
```

---

# Mejores prácticas

## 1. No escribas como tesis

Hackathon no es paper académico. El jurado no quiere 30 páginas de relleno. Quiere claridad.

Ideal:

* 6 a 12 páginas si es PDF.
* 1 a 2 páginas si es anexo técnico resumido.
* Diagramas antes que párrafos eternos.
* Tablas para decisiones técnicas.
* Evidencia concreta, no discurso genérico.

---

## 2. Separá investigación de opinión

Mala práctica:

> Creemos que la energía es importante.

Buena práctica:

> La eficiencia energética es relevante porque afecta costos, sostenibilidad y capacidad operativa. Por eso, el sistema prioriza identificar consumos anómalos y oportunidades de ahorro.

---

## 3. Justificá cada decisión técnica

No digas:

> Usamos React porque sí.

Decí:

> Usamos React porque permite construir dashboards interactivos rápidamente, cuenta con buen ecosistema de visualización y reduce el tiempo de desarrollo en contexto de hackathon.

---

## 4. Mostrá trade-offs

Esto suma puntos. Ejemplo:

```md
Se evaluó correr un modelo local, pero se descartó por restricciones de tiempo, hardware y configuración. Se eligió una API externa para priorizar confiabilidad, velocidad de integración y calidad de respuesta durante el hackathon.
```

Eso demuestra criterio de ingeniería.

---

## 5. No sobreprometas

No digas:

> Nuestro sistema resolverá la crisis energética.

Decí:

> El prototipo demuestra una forma viable de apoyar decisiones de eficiencia energética mediante análisis de datos e IA explicable.

Mucho más defendible.

---

## 6. Usá diagramas

Mínimo deberías tener:

* Diagrama de arquitectura.
* Flujo de usuario.
* Flujo de datos.
* Tabla de stack.
* Tabla de riesgos.
* Tabla de validación.

---

## 7. Documentá las restricciones

Las restricciones no son excusas. Son parte del diseño.

Ejemplo:

```md
Debido al tiempo limitado del hackathon y la ausencia de hardware físico, se priorizó una simulación realista sobre una integración IoT incompleta. Esta decisión permite demostrar el flujo completo de valor sin comprometer estabilidad.
```

Esto está bien planteado.

---

# Lo que NO debe faltar

| Elemento              | Importancia |
| --------------------- | ----------: |
| Problema claro        |        Alta |
| Evidencia investigada |        Alta |
| Justificación de IA   |    Muy alta |
| Arquitectura          |    Muy alta |
| Trade-offs            |        Alta |
| Limitaciones          |        Alta |
| Validación            |    Muy alta |
| Impacto               |        Alta |
| Roadmap               |       Media |
| Referencias           |  Media-alta |

---

# Fórmula ganadora

El documento debería dejar esta idea:

> Investigamos un problema real, diseñamos una solución viable, usamos IA donde realmente agrega valor, construimos un prototipo defendible y sabemos exactamente qué falta para escalarlo.

Eso es lo que diferencia un proyecto serio de una demo improvisada con ChatGPT pegado encima.
