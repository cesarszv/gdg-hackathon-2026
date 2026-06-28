## Documento **Lean Canvas** para hackathon

Bancá: el **Lean Canvas no es un business plan comprimido**. Es una herramienta para demostrar que tu proyecto **entiende un problema real**, propone una solución defendible y tiene una hipótesis de negocio/impacto razonable. En hackathon, el jurado no quiere leer humo corporativo; quiere ver **claridad, foco y criterio**.

---

# 1. Objetivo del documento

El documento debe responder esto:

> **¿Existe un problema importante, para un usuario claro, con una solución viable, diferenciada y medible?**

En un hackathon, el Lean Canvas sirve para justificar:

* **Qué problema atacás**
* **A quién le duele**
* **Por qué tu solución tiene sentido**
* **Por qué ahora**
* **Cómo se podría escalar o sostener**
* **Qué métricas prueban que funciona**
* **Qué riesgos quedan pendientes**

---

# 2. Estructura recomendada

## 1. Portada breve

Nada de portada universitaria eterna, dejate de joder. Una página simple:

```md
# Lean Canvas — Nombre del Proyecto

Hackathon: [Nombre del hackathon]
Equipo: [Nombre del equipo]
Categoría: [Energía / Agua / Agro / Salud / etc.]
Fecha: [Fecha]
Versión: v1.0
```

---

## 2. Resumen ejecutivo

Máximo **1 página**.

Debe explicar:

* Qué problema resuelve el proyecto.
* Para quién.
* Cómo lo resuelve.
* Qué valor genera.
* Por qué es viable en el contexto del hackathon.

Ejemplo de estructura:

```md
[Nombre del proyecto] es una solución orientada a [tipo de usuario] que busca resolver [problema principal] mediante [tecnología / enfoque]. La propuesta combina [elementos clave] para entregar [beneficio principal medible].

El proyecto se enfoca inicialmente en [segmento específico], porque allí el problema es más frecuente, costoso o crítico. La solución es viable para un MVP porque utiliza [recursos disponibles], evitando dependencias complejas como [hardware propio / infraestructura costosa / datos imposibles].
```

---

# 3. Lean Canvas completo

El Lean Canvas clásico tiene **9 bloques**. Para hackathon conviene presentarlo así:

---

## 1. Problema

Acá tenés que escribir **dolores reales**, no frases genéricas.

Mal:

> La gente consume mucha energía.

Bien:

> Pequeños negocios no tienen visibilidad clara sobre sus patrones de consumo energético, lo que dificulta detectar desperdicio, estimar costos futuros y tomar decisiones preventivas.

Incluí:

* Problema principal.
* 2 o 3 problemas secundarios.
* Evidencia o razonamiento.
* Consecuencia si no se resuelve.

Formato recomendado:

```md
### Problema principal

[Descripción concreta del problema]

### Problemas secundarios

1. [Problema secundario 1]
2. [Problema secundario 2]
3. [Problema secundario 3]

### Consecuencias

- [Impacto económico]
- [Impacto operativo]
- [Impacto social / ambiental]
```

---

## 2. Segmento de clientes / usuarios

No pongas “todo el mundo”. Eso es de amateur.

En hackathon, definí:

* Usuario principal.
* Usuario secundario.
* Beneficiario indirecto.
* Early adopter.

Ejemplo:

```md
### Usuario principal

Pequeños comercios urbanos con consumo eléctrico relevante pero sin sistemas avanzados de monitoreo.

### Early adopters

Negocios que ya sienten presión por costos energéticos altos y buscan reducir gastos operativos.

### Beneficiarios indirectos

- Comunidad local
- Empresas distribuidoras
- Instituciones públicas
- Medio ambiente
```

**Clave:** usuario no siempre es igual a cliente. En proyectos sociales o de impacto, puede haber beneficiarios, operadores y financiadores distintos.

---

## 3. Propuesta única de valor

Este bloque es el corazón. Tiene que ser una frase fuerte, concreta y defendible.

Fórmula útil:

```md
Ayudamos a [usuario] a lograr [resultado] mediante [solución diferencial], sin [dolor actual].
```

Ejemplo:

```md
Ayudamos a pequeños negocios a entender y optimizar su consumo energético mediante análisis predictivo e inteligencia artificial, sin necesidad de instalar hardware especializado desde el primer día.
```

Tiene que sonar como una promesa clara, no como slogan vacío.

---

## 4. Solución

Acá describís el MVP, no la fantasía de versión 2035.

Separá:

* Qué hace ahora.
* Qué simula.
* Qué podría hacer después.
* Qué NO hace todavía.

Ejemplo:

```md
### MVP propuesto

La solución permite:

1. Registrar o cargar datos de consumo energético.
2. Visualizar patrones de consumo.
3. Detectar posibles anomalías o desperdicios.
4. Generar recomendaciones asistidas por IA.
5. Simular escenarios de ahorro energético.

### Alcance actual

El prototipo funciona con datos cargados manualmente o simulados.

### Alcance futuro

Integración con sensores IoT, medidores inteligentes o APIs de empresas distribuidoras.
```

Esto es importante: **decir qué no hacés también aumenta credibilidad**.

---

## 5. Canales

¿Cómo llega la solución al usuario?

Para hackathon, no te vayas al marketing humo. Pensá canales realistas.

Ejemplos:

* Web app.
* App móvil.
* Dashboard administrativo.
* WhatsApp bot.
* Alianzas con municipios.
* Alianzas con cooperativas eléctricas.
* Cámaras de comercio.
* Pilotos con pequeños negocios.

Formato:

```md
### Canales iniciales

- Demo web para validación rápida.
- Pilotos con negocios locales.
- Presentación a instituciones públicas o privadas interesadas en eficiencia energética.

### Canales futuros

- Integración con proveedores de energía.
- Distribución vía programas municipales de sostenibilidad.
- Modelo SaaS para empresas pequeñas y medianas.
```

---

## 6. Fuentes de ingreso / sostenibilidad

En hackathon no siempre se evalúa “ingreso” como startup pura. Puede ser **sostenibilidad económica**.

Opciones:

| Modelo              | Cuándo sirve                                      |
| ------------------- | ------------------------------------------------- |
| SaaS mensual        | Empresas o comercios pagan por usar la plataforma |
| Freemium            | Entrada gratuita con funciones premium            |
| B2B institucional   | Municipios, ONGs o empresas financian el uso      |
| Licenciamiento      | Venta a gobiernos, universidades o distribuidoras |
| Proyecto de impacto | Financiado por fondos climáticos o innovación     |

Ejemplo:

```md
### Modelo inicial

El proyecto puede operar como SaaS básico para pequeños negocios, con un plan gratuito limitado y un plan pago con análisis avanzado.

### Modelo alternativo

También puede implementarse mediante convenios con gobiernos locales o programas de eficiencia energética.
```

---

## 7. Estructura de costos

No pongas costos inventados sin lógica. El jurado huele eso.

Dividí:

```md
### Costos tecnológicos

- Hosting
- Base de datos
- APIs de IA
- Almacenamiento
- Dominio

### Costos operativos

- Soporte
- Capacitación
- Validación con usuarios
- Mantenimiento

### Costos futuros

- Integración con hardware
- Sensores
- Certificaciones
- Seguridad avanzada
```

Para hackathon, conviene aclarar:

> Durante el MVP se prioriza el uso de APIs y datos simulados para reducir costos iniciales y validar la propuesta antes de invertir en hardware.

Eso es una decisión arquitectónica madura, no una limitación vergonzosa.

---

## 8. Métricas clave

Acá muchos meten cualquier pavada. Las métricas tienen que probar que el proyecto funciona.

Dividilas en:

### Métricas de uso

* Usuarios activos.
* Negocios registrados.
* Frecuencia de consulta del dashboard.
* Recomendaciones generadas.

### Métricas de impacto

* Porcentaje estimado de ahorro energético.
* Reducción estimada de costos.
* Detección de anomalías.
* Tiempo ahorrado en análisis.

### Métricas de validación

* Usuarios que entienden la recomendación.
* Usuarios que aplicarían la recomendación.
* Número de pilotos interesados.
* Feedback cualitativo.

Ejemplo:

```md
### Métricas clave del MVP

1. Porcentaje de anomalías detectadas correctamente.
2. Estimación de ahorro energético mensual.
3. Número de recomendaciones generadas por usuario.
4. Nivel de comprensión del usuario sobre las recomendaciones.
5. Tiempo requerido para obtener un diagnóstico inicial.
```

---

## 9. Ventaja injusta

Este bloque es delicado. No digas “usamos IA”, porque eso ya no es ventaja. Cualquiera usa IA. Eso no impresiona.

Una ventaja injusta puede ser:

* Dataset propio.
* Conocimiento local.
* Dominio técnico del equipo.
* Alianzas.
* Experiencia en el problema.
* Integración difícil de copiar.
* Modelo adaptado al contexto local.
* UX superior para usuarios no técnicos.

Ejemplo:

```md
La ventaja del proyecto está en combinar análisis energético, recomendaciones explicables con IA y adaptación al contexto local, permitiendo que usuarios no técnicos entiendan decisiones de ahorro sin requerir infraestructura compleja inicial.
```

---

# 4. Orden recomendado del documento

Para entregar como PDF o Markdown, usá este orden:

```md
# Lean Canvas — [Nombre del Proyecto]

## 1. Resumen Ejecutivo
## 2. Contexto del Problema
## 3. Lean Canvas
   3.1 Problema
   3.2 Segmento de Usuarios
   3.3 Propuesta Única de Valor
   3.4 Solución
   3.5 Canales
   3.6 Fuentes de Ingreso / Sostenibilidad
   3.7 Estructura de Costos
   3.8 Métricas Clave
   3.9 Ventaja Injusta
## 4. Hipótesis Principales
## 5. Riesgos y Validaciones Pendientes
## 6. Conclusión
```

---

# 5. Sección extra recomendada para hackathon: hipótesis

Esto suma mucho porque demuestra criterio.

```md
## Hipótesis principales

| Hipótesis | Cómo se validaría | Estado |
|---|---|---|
| Los pequeños negocios necesitan entender mejor su consumo energético | Entrevistas o encuestas rápidas | Pendiente |
| Una recomendación explicada con IA aumenta la probabilidad de acción | Test de usuario con prototipo | Parcial |
| El uso de datos simulados permite validar la lógica antes de instalar hardware | Demo funcional | Validado en MVP |
| El ahorro estimado puede justificar el costo de la solución | Simulación financiera | Pendiente |
```

Esto muestra madurez. No vendés humo: mostrás qué sabés, qué asumís y qué falta validar.

---

# 6. Sección extra: riesgos

También conviene incluir riesgos. El jurado serio valora esto.

```md
## Riesgos identificados

### Riesgos técnicos

- Falta de datos reales de consumo.
- Dependencia inicial de APIs externas.
- Precisión limitada en simulaciones sin sensores reales.

### Riesgos de adopción

- Usuarios no técnicos pueden desconfiar de recomendaciones automáticas.
- Negocios pequeños pueden no tener registros históricos de consumo.

### Riesgos económicos

- El ahorro generado debe superar el costo de uso.
- La integración con hardware puede elevar costos futuros.
```

Y después agregás mitigaciones:

```md
## Mitigaciones

- Usar datos simulados realistas durante el MVP.
- Explicar cada recomendación con lenguaje simple.
- Diseñar la arquitectura para permitir integración futura con sensores.
- Validar primero con usuarios pequeños antes de escalar.
```

---

# 7. Buenas prácticas

## Hacé esto ✅

* Sé específico.
* Usá lenguaje de negocio, no solo técnico.
* Separá MVP de visión futura.
* Definí usuario principal con precisión.
* Mencioná métricas medibles.
* Aceptá riesgos y explicá mitigaciones.
* Mostrá cómo la IA agrega valor real.
* Conectá problema, solución, impacto y viabilidad.

---

## Evitá esto ❌

* “Nuestra solución es para todos”.
* “Usamos IA para optimizar todo”.
* “Vamos a revolucionar la energía”.
* “No tenemos competencia”.
* “El modelo de negocio será publicidad”.
* “La app predice todo automáticamente”.
* “Con más datos mejora”, sin explicar cuáles datos ni cómo.

Eso es chamuyo de pitch berreta.

---

# 8. Plantilla rápida para cada bloque

```md
## Problema

[Problema concreto que afecta a un usuario específico]

## Segmento de usuarios

[Usuario principal, early adopter y beneficiarios indirectos]

## Propuesta única de valor

[Frase clara de valor diferencial]

## Solución

[Funciones principales del MVP]

## Canales

[Cómo llega la solución al usuario]

## Fuentes de ingreso / sostenibilidad

[Cómo se sostiene económicamente o institucionalmente]

## Estructura de costos

[Costos técnicos, operativos y futuros]

## Métricas clave

[Indicadores para medir uso, impacto y validación]

## Ventaja injusta

[Elemento difícil de copiar o contexto diferencial del equipo/proyecto]
```

---

# 9. Qué debería ocupar más espacio

| Sección            | Peso recomendado |
| ------------------ | ---------------: |
| Problema           |              20% |
| Usuarios           |              15% |
| Propuesta de valor |              15% |
| Solución           |              20% |
| Métricas           |              15% |
| Costos / ingresos  |              10% |
| Ventaja injusta    |               5% |

En hackathon, el jurado necesita entender rápido **el problema, el usuario, la solución y cómo se mide el impacto**. Lo demás acompaña.

---

# 10. Cierre recomendado

Terminá con una conclusión corta:

```md
El Lean Canvas muestra que [nombre del proyecto] aborda un problema concreto en [segmento], proponiendo una solución viable para un MVP de hackathon y escalable hacia una implementación real. La propuesta prioriza validación rápida, bajo costo inicial y medición de impacto mediante indicadores claros de ahorro, adopción y utilidad para el usuario.
```

---

## Mi recomendación directa

Para un hackathon, tu Lean Canvas debería tener **2 versiones**:

1. **Versión visual de 1 página**
   Para que el jurado entienda todo rápido.

2. **Versión explicada de 3 a 5 páginas**
   Para defender decisiones, riesgos, métricas y sostenibilidad.

No lo conviertas en tesis. Tiene que ser **afilado, defendible y fácil de evaluar**.
