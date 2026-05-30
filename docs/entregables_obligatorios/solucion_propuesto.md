# Solución Propuesta — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

---

## 1. Qué es GreenSpark

**GreenSpark es la plataforma de IA que convierte el residuo orgánico urbano en energía rentable y medible.** Conecta a los grandes generadores de residuo orgánico (restaurantes, supermercados, universidades, mercados, hoteles) con las plantas de biogás/compost que pueden transformarlo, **prediciendo cuánta energía rinde cada residuo, optimizando su recolección y certificando el impacto ambiental.**

> **Propuesta de valor única:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."*

No vendemos una máquina. Vendemos la **capa de inteligencia y coordinación** que activa una cadena de valor energética que hoy está desconectada.

---

## 2. Cómo funciona (flujo principal)

```
1. El generador registra su residuo  →  tipo + volumen (kg/día)
2. La IA predice al instante          →  m³ biogás · kWh · compost · CO₂ evitado · valor en Bs
3. La plataforma lo conecta y enruta  →  planta más conveniente + ruta de recolección optimizada
4. Se recolecta y transforma          →  energía/biogás + compost (lo opera la planta socia)
5. El generador recibe su reporte ESG →  impacto certificado y trazable (lo redacta el agente IA)
```

El residuo deja de ser un **costo + pasivo ambiental** y se convierte en un **insumo energético trazable + activo de sostenibilidad**.

---

## 3. Las 5 funciones clave (dónde vive el valor)

1. **Predicción de potencial energético (IA).** Dado el tipo y volumen de residuo, un modelo de regresión estima biogás, electricidad, compost y CO₂ evitado, ajustando por mezcla, humedad y estacionalidad. *Supera de forma medible a una regla fija.* → *Detalle en `aplicacion_de_ia.md`.*
2. **Optimización logística de recolección (IA combinatoria).** Ruteo entre generadores y plantas con Google OR-Tools (minimiza distancia, costo y emisiones), priorizando por densidad de rendimiento y frescura del residuo.
3. **Dashboard de impacto + reporte ESG automático.** Toneladas desviadas del relleno, kWh generados, CO₂e evitado y valor económico, a nivel generador y ciudad. **Este reporte es lo que el cliente paga.**
4. **Agente conversacional "Asesor GreenSpark" (LLM vía DeepSeek API).** Responde en lenguaje natural ("¿cuánta energía genera mi residuo este mes?"), explica resultados y **redacta el reporte de sostenibilidad**.
5. **Matchmaking generador ↔ planta.** Empareja por cercanía, capacidad y compatibilidad de sustrato. Cada nuevo actor mejora la red (**efecto red**).

---

## 4. Propuesta de valor por actor

| Actor | Qué gana con GreenSpark |
|---|---|
| **Generador urbano (paga)** | Baja su costo de disposición · obtiene reporte ESG verificable · convierte un pasivo en imagen y ahorro |
| **Planta de biogás/compost** | Flujo de sustrato predecible y trazable · más utilización de capacidad |
| **Ciudad / medio ambiente** | Menos metano · menos saturación del relleno · energía y compost locales |
| **Agro cruceño** | Compost de calidad de vuelta al suelo (cierre del círculo) |

---

## 5. Ventaja especial (unfair advantage)

- **Dataset local propietario** de rendimiento energético por sustrato, que mejora con cada operación (las reglas fijas de un competidor no aprenden).
- **Efecto red:** mientras más generadores y plantas, mejores rutas y matches; difícil de replicar rápido.
- **Posición de "capa de inteligencia"**: somos neutrales respecto al hardware; nos integramos con cualquier planta o biodigestor existente.
- **Know-how de economía circular local** y narrativa alineada a ESG/ODS.

---

## 6. Qué se demuestra en la hackathon (MVP) vs. visión

| Horizonte | Alcance |
|---|---|
| **MVP (31/05)** | Plataforma web: registro → predicción IA → match + ruta en mapa → reporte ESG por el agente. 100% software, sin hardware, con datos reales (coeficientes) + operación [SIMULADA] etiquetada. |
| **Piloto (1–3 meses)** | 1 planta real + 5–10 generadores reales; datos primarios; recolección real; reentrenamiento del modelo. |
| **Visión (>12 meses)** | Marketplace multi-ciudad · créditos de carbono · integración con hardware propio (biodigestores modulares / I+D de celdas microbianas). |

> El sueño "Green Spark" original (convertir basura en energía con celdas microbianas) **sigue vivo** como visión de hardware a largo plazo; lo que vendemos y demostramos hoy es la inteligencia que hace rentable y medible todo el círculo.

---

## 7. Por qué esta solución gana

- **100% demostrable y replicable:** es una web app; cualquiera la corre.
- **Comprador real que ya gasta** en el problema (generador urbano).
- **IA real y no decorativa** (predicción + optimización + agente).
- **Escalable como SaaS** y sostenible (economía circular).
- **Local y verificable:** anclada en datos y actores de Santa Cruz.
