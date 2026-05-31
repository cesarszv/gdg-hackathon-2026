## `solucion_propuesta.md` — buenas prácticas para hackathon

Este documento tiene que responder una sola cosa:

> **Qué están construyendo, para quién, cómo funciona y por qué esa solución es mejor que hacer nada o usar alternativas existentes.**

No es todavía arquitectura profunda. No es impacto. No es IA. No es finanzas.
Es el **puente entre el problema y el producto**. Si este documento queda flojo, todo lo demás queda colgado en el aire. 🧱

---

# 1. Objetivo del documento

El `solucion_propuesta.md` debe demostrar que la solución:

1. **Ataca directamente el problema identificado.**
2. **Tiene una propuesta de valor clara.**
3. **Es viable para un hackathon.**
4. **Puede explicarse rápido a jurados.**
5. **Tiene usuarios concretos, no “la sociedad” en abstracto.**
6. **Tiene un flujo de uso entendible.**
7. **No depende de humo técnico.**

La pregunta clave del jurado suele ser:

> “¿Esto realmente resuelve algo o solo es una demo linda?”

Tu documento tiene que cerrar esa duda.

---

# 2. Estructura recomendada

## 1. Título

Claro, directo, sin poesía innecesaria.

```md
# Solución Propuesta: [Nombre del Proyecto]
```

Ejemplo:

```md
# Solución Propuesta: EnergiaLens
```

---

## 2. Resumen ejecutivo

Máximo 5 a 7 líneas.

Debe explicar:

* Qué es la solución.
* A quién ayuda.
* Qué problema resuelve.
* Cómo lo resuelve.
* Qué valor entrega.

Ejemplo de estructura:

```md
[Nombre del proyecto] es una solución que ayuda a [usuario objetivo] a resolver [problema principal] mediante [mecanismo central de la solución]. La propuesta combina [tecnología o enfoque principal] para entregar [beneficio concreto], reduciendo [dolor actual] y facilitando [resultado deseado].
```

No metas palabras vacías como:

* “revolucionario”
* “innovador”
* “disruptivo”
* “inteligente”
* “integral”

Eso sin evidencia es humo. Dale sustancia.

---

## 3. Problema que resuelve

Acá conectás con `problema_identificado.md`.

No repitas todo el problema. Resumilo y enfocá.

```md
## Problema que resuelve

El problema central es que [usuario/sector] enfrenta [dolor principal], lo que genera [consecuencia negativa]. Actualmente, las alternativas disponibles son [limitación de alternativas], por lo que existe una oportunidad para una solución que [necesidad concreta].
```

Buena práctica:

* Mencionar el problema en lenguaje humano.
* Evitar tecnicismos prematuros.
* Mostrar que la solución nace del dolor, no de una tecnología que querían usar porque sí.

---

## 4. Usuario objetivo

Esto es crítico. No digas “cualquier persona”.

Definí usuarios primarios y secundarios.

```md
## Usuario objetivo

### Usuario principal

- Tipo de usuario:
- Necesidad:
- Dolor actual:
- Contexto de uso:
- Qué decisión necesita tomar:

### Usuarios secundarios

- Instituciones:
- Técnicos:
- Operadores:
- Comunidades:
- Autoridades:
```

Ejemplo:

```md
### Usuario principal

Pequeños comercios, hogares o instituciones que necesitan entender su consumo energético, detectar ineficiencias y tomar mejores decisiones sin contar con infraestructura técnica avanzada.
```

---

## 5. Propuesta de valor

Esta sección es el corazón del documento.

Tenés que decir:

> “Nuestra solución vale porque entrega X beneficio específico a Y usuario en Z contexto.”

Usá esta fórmula:

```md
Para [usuario objetivo] que necesita [necesidad], nuestra solución ofrece [beneficio principal] mediante [mecanismo], a diferencia de [alternativa actual], que [limitación].
```

Ejemplo:

```md
Para pequeños usuarios energéticos que necesitan reducir consumo sin conocimientos técnicos, EnergiaLens ofrece diagnóstico visual y recomendaciones accionables mediante análisis asistido por IA, a diferencia de mediciones manuales o reportes técnicos complejos que suelen ser difíciles de interpretar.
```

---

## 6. Descripción de la solución

Acá explicás qué es el producto.

No entres todavía en arquitectura de backend, bases de datos o APIs. Eso va en `arquitectura_tecnologica.md`.

```md
## Descripción de la solución

La solución consiste en [descripción general del sistema]. Permite que el usuario [acción principal], reciba [resultado], y pueda [decisión o acción posterior].
```

Podés dividirlo así:

```md
### Componentes principales

1. Interfaz de usuario
2. Captura o carga de datos
3. Motor de análisis
4. Generación de recomendaciones
5. Visualización de resultados
6. Reporte o simulación
```

---

## 7. Flujo de uso

Esta sección vende mucho en hackathon porque demuestra que pensaron el producto como experiencia real.

```md
## Flujo de uso

1. El usuario ingresa a la plataforma.
2. Carga o selecciona información inicial.
3. El sistema analiza los datos.
4. Se genera un diagnóstico.
5. El usuario recibe recomendaciones priorizadas.
6. Puede visualizar impacto estimado.
7. Puede exportar o compartir resultados.
```

También podés ponerlo como tabla:

| Paso | Acción del usuario        | Respuesta del sistema | Valor generado               |
| ---- | ------------------------- | --------------------- | ---------------------------- |
| 1    | Ingresa datos básicos     | Valida información    | Reduce fricción              |
| 2    | Carga evidencia o consumo | Procesa datos         | Genera contexto              |
| 3    | Revisa diagnóstico        | Muestra hallazgos     | Facilita decisión            |
| 4    | Consulta recomendaciones  | Prioriza acciones     | Convierte análisis en acción |

Esto es más sólido que escribir tres párrafos lindos.

---

## 8. Funcionalidades principales

Separá lo esencial de lo secundario. En hackathon, esto importa muchísimo.

```md
## Funcionalidades principales

### Funcionalidades del MVP

- Función 1:
- Función 2:
- Función 3:
- Función 4:

### Funcionalidades futuras

- Función futura 1:
- Función futura 2:
- Función futura 3:
```

Buena práctica: marcá qué entra en la demo y qué queda como visión futura.

Ejemplo:

| Funcionalidad                    |     MVP | Futuro | Justificación         |
| -------------------------------- | ------: | -----: | --------------------- |
| Diagnóstico inicial              |       ✅ |        | Núcleo de la solución |
| Recomendaciones con IA           |       ✅ |        | Diferencial principal |
| Simulación avanzada              | Parcial |      ✅ | Puede escalar luego   |
| Integración con sensores físicos |         |      ✅ | Requiere hardware     |

Esto evita que parezca que están prometiendo una nave espacial con dos días de laburo. Ponete las pilas con esto: **el jurado detecta humo rápido**.

---

## 9. Diferenciador de la solución

Acá respondés:

> “¿Por qué esto no es una app más?”

Puede estar basado en:

* Enfoque local.
* Simplicidad.
* Bajo costo.
* Uso práctico de IA.
* Visualización clara.
* Priorización de acciones.
* Adaptación al contexto del usuario.
* Rapidez para tomar decisiones.

```md
## Diferenciador

La solución se diferencia porque no se limita a mostrar datos, sino que transforma información técnica en recomendaciones comprensibles, priorizadas y accionables para el usuario.
```

Mal diferenciador:

```md
Usamos inteligencia artificial.
```

Eso solo no diferencia nada. Hoy todos usan IA. La diferencia es **para qué**, **cómo**, **con qué entrada**, **qué salida genera** y **cómo mejora la decisión**.

---

## 10. Alcance del MVP

Esta sección es obligatoria. Define los límites.

```md
## Alcance del MVP

El MVP incluye:

- [x] Funcionalidad principal 1
- [x] Funcionalidad principal 2
- [x] Visualización básica
- [x] Recomendaciones iniciales

El MVP no incluye todavía:

- [ ] Integración con hardware real
- [ ] Modelo predictivo entrenado con dataset propietario
- [ ] Escalamiento multiusuario avanzado
- [ ] Automatización física de dispositivos
```

Esto te hace ver serio. No estás vendiendo humo; estás diciendo: “esto hacemos ahora, esto después”. Eso es arquitectura de producto, no fantasía.

---

## 11. Supuestos de la solución

Muy importante para hackathon, sobre todo si no tienen hardware o datos reales.

```md
## Supuestos

La solución parte de los siguientes supuestos:

1. El usuario puede cargar información básica o simulada.
2. Los datos iniciales pueden provenir de fuentes manuales, públicas o estimadas.
3. El sistema prioriza recomendaciones orientativas, no certificaciones técnicas.
4. La validación inicial se realiza mediante escenarios simulados.
5. En una etapa posterior se podría integrar hardware, sensores o datos en tiempo real.
```

No escondas las limitaciones. Convertí las limitaciones en criterio técnico.

---

## 12. Beneficios esperados

No desarrolles demasiado, porque eso va fuerte en `impacto_esperado.md`.

Acá solo poné los beneficios directos.

| Dimensión | Beneficio                                |
| --------- | ---------------------------------------- |
| Usuario   | Entiende mejor su problema               |
| Técnica   | Centraliza análisis y recomendaciones    |
| Económica | Ayuda a priorizar acciones de bajo costo |
| Ambiental | Promueve reducción de desperdicio        |
| Operativa | Facilita toma de decisiones              |

---

## 13. Alternativas consideradas

Esto suma muchísimo porque demuestra criterio.

```md
## Alternativas consideradas

| Alternativa | Ventaja | Limitación | Motivo de descarte |
|---|---|---|---|
| Medición manual | Simple | Poco escalable | No genera recomendaciones |
| Sensores físicos | Preciso | Requiere hardware | No viable para el tiempo del hackathon |
| App solo informativa | Fácil de construir | Bajo impacto | No ayuda a decidir |
| Dashboard tradicional | Visual | Puede ser técnico | No convierte datos en acciones |
```

Este apartado es poderoso porque muestra que no eligieron la solución “porque sí”.

---

## 14. Validación inicial

Aunque sea hackathon, necesitás explicar cómo sabrán si la solución tiene sentido.

```md
## Validación inicial

La solución puede validarse mediante:

1. Casos simulados.
2. Comparación entre escenarios antes/después.
3. Pruebas con usuarios potenciales.
4. Evaluación de claridad de recomendaciones.
5. Medición del tiempo necesario para entender el diagnóstico.
```

Métricas posibles:

| Métrica                                 | Qué mide             |
| --------------------------------------- | -------------------- |
| Tiempo hasta obtener diagnóstico        | Facilidad de uso     |
| Número de recomendaciones útiles        | Calidad de salida    |
| Reducción estimada de consumo/costo     | Impacto potencial    |
| Comprensión del usuario                 | Claridad UX          |
| Precisión de clasificación/priorización | Calidad del análisis |

---

# 3. Plantilla lista para usar

```md
# Solución Propuesta: [Nombre del Proyecto]

## 1. Resumen ejecutivo

[Nombre del proyecto] es una solución que ayuda a [usuario objetivo] a resolver [problema principal] mediante [mecanismo central]. La propuesta permite [beneficio principal], facilitando [resultado esperado] y reduciendo [dolor actual].

## 2. Problema que resuelve

El problema central identificado es [problema]. Esto afecta a [usuarios o sector] porque [consecuencia]. Las alternativas actuales presentan limitaciones como [limitaciones], por lo que se propone una solución enfocada en [enfoque].

## 3. Usuario objetivo

### Usuario principal

- Tipo de usuario:
- Necesidad:
- Dolor actual:
- Contexto de uso:
- Decisión que necesita tomar:

### Usuarios secundarios

- Usuario secundario 1:
- Usuario secundario 2:
- Usuario secundario 3:

## 4. Propuesta de valor

Para [usuario objetivo] que necesita [necesidad], nuestra solución ofrece [beneficio principal] mediante [mecanismo], a diferencia de [alternativa actual], que [limitación].

## 5. Descripción de la solución

La solución consiste en [descripción general]. Permite que el usuario [acción], reciba [resultado] y pueda [decisión o acción posterior].

### Componentes principales

1. [Componente 1]
2. [Componente 2]
3. [Componente 3]
4. [Componente 4]

## 6. Flujo de uso

| Paso | Acción del usuario | Respuesta del sistema | Valor generado |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |

## 7. Funcionalidades principales

### Funcionalidades del MVP

- [ ] Funcionalidad 1
- [ ] Funcionalidad 2
- [ ] Funcionalidad 3
- [ ] Funcionalidad 4

### Funcionalidades futuras

- [ ] Funcionalidad futura 1
- [ ] Funcionalidad futura 2
- [ ] Funcionalidad futura 3

## 8. Diferenciador

La solución se diferencia porque [diferenciador principal]. No se limita a [alternativa básica], sino que permite [valor superior].

## 9. Alcance del MVP

### Incluido en el MVP

- [x] 
- [x] 
- [x] 

### Fuera del MVP

- [ ] 
- [ ] 
- [ ] 

## 10. Supuestos

La solución parte de los siguientes supuestos:

1. 
2. 
3. 
4. 

## 11. Beneficios esperados

| Dimensión | Beneficio |
|---|---|
| Usuario |  |
| Técnica |  |
| Económica |  |
| Ambiental |  |
| Operativa |  |

## 12. Alternativas consideradas

| Alternativa | Ventaja | Limitación | Motivo de descarte |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |

## 13. Validación inicial

La solución puede validarse mediante:

1. 
2. 
3. 
4. 

### Métricas iniciales

| Métrica | Qué mide | Cómo se evalúa |
|---|---|---|
|  |  |  |
|  |  |  |
```

---

# 4. Errores comunes

## Error 1: Empezar hablando de tecnología

Mal:

> “Usaremos React, Node, Gemini y PostgreSQL…”

Eso va después. Primero explicá **qué resuelve**. La tecnología es el medio, no la propuesta.

---

## Error 2: Decir que el usuario es “todo el mundo”

No. Eso es flojo.

Mejor:

> “Pequeños comercios con consumo energético irregular y baja capacidad técnica para interpretar datos.”

Eso sí es concreto.

---

## Error 3: Confundir solución con impacto

Solución:

> “Sistema que diagnostica consumo y genera recomendaciones.”

Impacto:

> “Reducción estimada de costos, desperdicio energético y emisiones.”

No mezcles documentos.

---

## Error 4: Prometer más de lo que pueden construir

En hackathon, vender humo te puede matar.

Mejor decir:

> “El MVP valida el flujo principal con datos simulados y deja preparada la arquitectura para integrar sensores reales.”

Eso suena serio, viable y honesto.

---

## Error 5: Usar IA como decoración

Mal:

> “La solución usa IA para ser más inteligente.”

Bien:

> “La IA interpreta patrones de consumo, clasifica ineficiencias y genera recomendaciones priorizadas según costo, impacto y factibilidad.”

Ahí sí hay una función real.

---

# 5. Checklist final

Antes de entregar el `solucion_propuesta.md`, revisá esto:

| Pregunta                          | Debe estar claro |
| --------------------------------- | ---------------: |
| ¿Qué están construyendo?          |                ✅ |
| ¿Para quién?                      |                ✅ |
| ¿Qué problema resuelve?           |                ✅ |
| ¿Cómo lo usa el usuario?          |                ✅ |
| ¿Cuál es el valor diferencial?    |                ✅ |
| ¿Qué entra en el MVP?             |                ✅ |
| ¿Qué queda fuera?                 |                ✅ |
| ¿Por qué esta solución y no otra? |                ✅ |
| ¿Cómo se valida inicialmente?     |                ✅ |
| ¿La IA tiene una función real?    |                ✅ |

---

# 6. Orden ideal dentro del documento

El orden recomendado sería:

```txt
1. Resumen ejecutivo
2. Problema que resuelve
3. Usuario objetivo
4. Propuesta de valor
5. Descripción de la solución
6. Flujo de uso
7. Funcionalidades principales
8. Diferenciador
9. Alcance del MVP
10. Supuestos
11. Beneficios esperados
12. Alternativas consideradas
13. Validación inicial
```

Ese orden funciona porque primero ubicás al lector, después vendés la solución, después la aterrizás y recién al final justificás límites y validación.

---

## Regla brutal para este documento

Cada párrafo debería poder pasar este test:

> **¿Esto ayuda al jurado a entender por qué nuestra solución merece existir?**

Si la respuesta es no, sacalo. No rellenes. No escribas como estudiante queriendo llegar a 5 páginas. Escribí como equipo que sabe qué está construyendo.
