# GreenSpark: Solución propuesta

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

## 1. Qué es GreenSpark

**GreenSpark es una plataforma de IA que convierte los residuos orgánicos urbanos en energía rentable y medible.** Conecta a grandes generadores de residuos, como restaurantes, supermercados, universidades, mercados y hoteles, con plantas de biogás o compost que pueden transformarlos. La plataforma **predice cuánta energía produce cada residuo, optimiza su recolección y certifica el impacto ambiental**.

> **Propuesta de valor única:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad, en un clic."*

GreenSpark no vende una máquina. Ofrece la **capa de inteligencia y coordinación** que activa una cadena de valor energética que hoy está desconectada.

## 2. Flujo principal

```text
1. El generador registra sus residuos → tipo + volumen (kg/día)
2. La IA predice su rendimiento       → m³ de biogás · kWh · compost · CO₂ evitado · valor en Bs
3. La plataforma conecta y enruta     → planta más conveniente + ruta de recolección optimizada
4. La planta recolecta y transforma   → energía o biogás + compost
5. El generador recibe su reporte ESG → impacto certificado y trazable, redactado por el agente de IA
```

Los residuos dejan de ser un **costo y un pasivo ambiental** para convertirse en un **insumo energético trazable y un activo de sostenibilidad**.

## 3. Funciones clave

### 3.1 Predicción del potencial energético

Un modelo de regresión estima el biogás, la electricidad, el compost y el CO₂ evitado según el tipo y el volumen de residuo. También considera la mezcla, la humedad y la estacionalidad. El modelo supera de forma medible una regla fija. Consulta el detalle en [aplicación de IA](<./aplicacion de ia.md>).

### 3.2 Optimización logística de la recolección

Google OR-Tools calcula las rutas entre generadores y plantas para reducir la distancia, el costo y las emisiones. También prioriza la densidad de rendimiento y la frescura de los residuos.

### 3.3 Panel de impacto y reporte ESG automático

El panel muestra las toneladas desviadas del relleno, los kWh generados, el CO₂e evitado y el valor económico por generador y para toda la ciudad. **Este reporte es el principal valor por el que paga el cliente.**

### 3.4 Agente conversacional "Asesor GreenSpark"

Un LLM mediante DeepSeek API responde preguntas en lenguaje natural, explica los resultados y **redacta el reporte de sostenibilidad**. Por ejemplo: *"¿Cuánta energía generan mis residuos este mes?"*

### 3.5 Emparejamiento entre generador y planta

La plataforma conecta a cada generador con una planta según su cercanía, capacidad y compatibilidad de sustrato. Cada nuevo actor mejora la red y produce un **efecto de red**.

## 4. Propuesta de valor por actor

| Actor | Beneficio |
| --- | --- |
| **Generador urbano: cliente que paga** | Reduce su costo de disposición, obtiene un reporte ESG verificable y convierte un pasivo en ahorro y reputación. |
| **Planta de biogás o compost** | Recibe un flujo de sustrato predecible y trazable, y aprovecha mejor su capacidad. |
| **Ciudad y medio ambiente** | Reduce las emisiones de metano y la saturación del relleno, y obtiene energía y compost locales. |
| **Agro cruceño** | Recibe compost de calidad que vuelve al suelo y cierra el ciclo. |

## 5. Ventaja difícil de copiar

- **Dataset local propietario:** reúne el rendimiento energético por sustrato y mejora con cada operación. Las reglas fijas de un competidor no aprenden.
- **Efecto de red:** más generadores y plantas permiten calcular mejores rutas y emparejamientos.
- **Neutralidad de hardware:** la plataforma se integra con cualquier planta o biodigestor existente.
- **Conocimiento local de economía circular:** la narrativa se alinea con criterios ESG y ODS.

## 6. Alcance por etapa

| Horizonte | Alcance |
| --- | --- |
| **MVP: 31/05** | Plataforma web con registro, predicción mediante IA, emparejamiento, ruta en mapa y reporte ESG redactado por el agente. Funciona completamente mediante software, sin hardware, con coeficientes reales y una operación [SIMULADA] claramente etiquetada. |
| **Piloto: 1–3 meses** | Una planta real, entre 5 y 10 generadores reales, datos primarios, recolección real y reentrenamiento del modelo. |
| **Visión: más de 12 meses** | Marketplace para varias ciudades, créditos de carbono e integración con hardware propio, como biodigestores modulares o I+D de celdas microbianas. |

> La idea original de "Green Spark", convertir basura en energía mediante celdas microbianas, **se mantiene como visión de hardware a largo plazo**. La propuesta actual vende y demuestra la inteligencia que vuelve rentable y medible todo el ciclo.

## 7. Razones para elegir esta solución

- **Demostrable y replicable:** es una aplicación web que cualquier persona puede ejecutar.
- **Comprador real:** el generador urbano ya gasta en resolver el problema.
- **IA real y útil:** combina predicción, optimización y un agente.
- **Escalable como SaaS:** sostiene un modelo de economía circular.
- **Local y verificable:** se basa en datos y actores de Santa Cruz.
