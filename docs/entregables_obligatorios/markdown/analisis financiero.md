# GreenSpark: Análisis financiero

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Criterio de honestidad:** el equipo todavía no cuenta con cotizaciones, entrevistas suficientes ni mediciones locales para fijar precios, ahorros o rentabilidad. Este documento define el modelo económico, los incentivos y los datos que deben validarse antes de presentar una proyección financiera.

## 1. Resumen ejecutivo

GreenSpark propone un modelo **B2B por fases**. La primera venta no depende de producir electricidad comercial: una universidad privada puede pagar por investigación aplicada, simulación, métricas y una hoja de ruta experimental. Después, el proyecto monetiza pilotos MFC y monitoreo. En la fase 3, si el volumen segregado y la demanda lo justifican, puede evaluar proyectos con biodigestores o soluciones híbridas.

## 2. Quién paga y por qué

| Etapa | Cliente | Razón para pagar | Evidencia requerida |
| --- | --- | --- | --- |
| **Fase 1** | Universidad privada | Investigación aplicada, participación estudiantil, visibilidad y reporte de sostenibilidad. | Entrevistas, carta de interés y alcance de convenio. |
| **Fase 2** | Colegio privado | Educación ambiental y piloto demostrativo. | Presupuesto institucional y validación de uso. |
| **Fase 2** | Restaurante | Métrica de circularidad y alternativa para residuos frecuentes. | Volumen segregable, costo actual y disposición a pagar. |
| **Fase 2 y 3** | Agroindustria | Valorización de residuos concentrados, análisis energético y posible escalamiento. | Volumen, estacionalidad, consumo y costo energético. |

## 3. Fuentes de ingresos

| Fuente | Modelo | Etapa |
| --- | --- | --- |
| Investigación aplicada | Convenio por alcance y duración | Fase 1 |
| Simulador y reporte institucional | Licencia o servicio periódico | Fase 1 |
| Piloto MFC | Diseño, materiales, instalación y puesta en marcha | Fase 2 |
| Monitoreo | Suscripción por telemetría, alertas y reporte | Fase 2 |
| Prefactibilidad de biodigestor | Consultoría técnica | Fase 3 |
| Implementación y operación | Proyecto o contrato de servicio | Fase 3 |
| Valor energético | Ahorro compartido o participación contractual | Fase 3, solo después de medir |

## 4. Incentivos: por qué conviene participar

| Actor | Sin GreenSpark | Con GreenSpark |
| --- | --- | --- |
| **Universidad** | La sostenibilidad queda en campañas aisladas. | Obtiene investigación visible, datos locales y una hoja de ruta experimental. |
| **Restaurante** | El residuo bioorgánico se gestiona como descarte. | Puede registrar circularidad y participar en una ruta de valorización. |
| **Agroindustria** | Evalúa inversiones con información incompleta. | Compara escenarios antes de destinar capital a infraestructura. |
| **Sector agropecuario** | No recibe un insumo validado. | Participa en la caracterización de un posible subproducto agronómico. |
| **GreenSpark** | No dispone de dataset local. | Acumula conocimiento útil para mejorar diseño, pilotos y escalamiento. |

## 5. Fórmulas financieras

### Fase 1: convenio universitario

```text
Ingreso fase 1 =
  diseño investigativo
  + licencia o servicio de simulación
  + reporte institucional
  + acompañamiento técnico
```

### Fase 2: piloto MFC

```text
Margen piloto =
  precio de implementación
  - materiales
  - sensores
  - ensamblaje
  - caracterización
  - soporte
```

### Fase 3: escalamiento

```text
Ahorro energético validado =
  kWh medidos de autoconsumo
  × tarifa aplicable
  - costos de operación y mantenimiento
```

```text
Valor de excedentes =
  energía elegible inyectada
  × mecanismo de retribución aplicable
  - adecuaciones y costos regulatorios
```

El DS 4477, modificado por los DS 5167 y 5549, permite estudiar generación distribuida y retribución por excedentes. No garantiza que un proyecto MFC alcance potencia, conexión o rentabilidad suficientes.

## 6. Metas energéticas y comunicación financiera

| Horizonte | Meta correcta | Formulación incorrecta |
| --- | --- | --- |
| **Fases 1 y 2** | Explorar aporte de hasta **10%** sobre cargas seleccionadas, sujeto a validación. | "Ahorramos 10% de la factura de cualquier institución." |
| **Fase 3** | Evaluar aporte de hasta **20%** sobre cargas seleccionadas mediante mayor capacidad, sujeto a prefactibilidad. | "Garantizamos 20% de ahorro con biodigestores." |

## 7. Datos que faltan para construir una proyección

| Dato | Cómo obtenerlo |
| --- | --- |
| Costo de diseño y ensamblaje MFC | Cotizar materiales, electrodos, sensores y mano de obra. |
| Consumo de cargas seleccionadas | Medición o facturación del cliente. |
| Tarifa eléctrica aplicable | Factura del cliente y distribuidor correspondiente. |
| Potencia estable del piloto | Ensayo físico con telemetría. |
| Volumen y composición del residuo | Pesaje y caracterización por generador. |
| Costo del biodigestor | Cotización y estudio de prefactibilidad. |
| Disposición a pagar | Entrevistas y propuesta comercial. |

## 8. Escenarios para validar

| Escenario | Supuesto | Decisión |
| --- | --- | --- |
| **Conservador** | La universidad compra únicamente investigación y simulación. | Validar si existe valor institucional aun sin ahorro medido. |
| **Base** | La universidad financia un piloto MFC instrumentado. | Medir rendimiento y costo real por módulo. |
| **Escalamiento** | Una agroindustria dispone de sustrato suficiente para evaluar biodigestor. | Construir prefactibilidad y modelo contractual. |

## 9. Próximos pasos financieros

1. Entrevistar al menos a tres universidades privadas.
2. Cotizar un prototipo MFC básico e instrumentación.
3. Definir cargas eléctricas seleccionadas para la primera medición.
4. Medir residuos disponibles por actor.
5. Construir un flujo de caja únicamente después de obtener precios y costos verificables.

> **Conclusión:** GreenSpark no necesita inventar una rentabilidad para demostrar potencial. Necesita probar que una universidad paga por aprender, que el piloto produce datos útiles y que esos datos reducen el riesgo de escalar.
