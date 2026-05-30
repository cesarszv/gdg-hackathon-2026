# PITCH — GreenSpark ⚡🌱

**Equipo:** HackHeroes · **Mención:** ENERGÍA · Santa Cruz de la Sierra, Bolivia

> **Frase gancho:** *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."*

---

## Pitch de 30 segundos

> Santa Cruz entierra cada día cientos de toneladas de residuo orgánico que liberan metano —28 veces más contaminante que el CO₂— mientras esa energía se desperdicia. El ingenio Guabirá ya convierte biomasa en electricidad y la vende a la red… pero el residuo de restaurantes, supermercados y universidades queda fuera porque **nadie lo conecta ni lo cuantifica**. **GreenSpark** es la plataforma de IA que predice cuánta energía rinde cada residuo, lo conecta con la planta de biogás más cercana, optimiza su recolección y entrega un reporte de sostenibilidad automático. Convertimos basura en energía, ahorro y datos — **100% software, sin hardware.**

---

## Estructura del pitch (lineamientos)

### Problema identificado
Santa Cruz entierra ~700–900 t/día de residuo orgánico [ESTIMACIÓN]; en el relleno emite **metano (~28× CO₂)** y desperdicia su valor energético (~200 kWh/t). Los generadores **pagan** por botarlo, las plantas de biogás no tienen sustrato predecible y **nadie conecta, predice ni cuantifica** la oportunidad.

### Usuario o beneficiario
- **Cliente que paga:** grandes generadores urbanos — restaurantes, supermercados, **universidades**, hoteles, mercados.
- **Lado oferta:** plantas de biogás/compost.
- **Beneficiario:** la ciudad y el medio ambiente.

### Enfoque de solución
Plataforma de IA que: ① **predice** energía/CO₂ por residuo, ② **optimiza** la recolección, ③ **conecta** generador ↔ planta y ④ **redacta el reporte ESG** con un agente conversacional. El residuo deja de ser un costo y pasa a ser energía + un activo de sostenibilidad.

### Demo funcional
La UCB registra su residuo del día → la IA muestra al instante **kWh, m³ de biogás, CO₂ evitado y valor en Bs** → la plataforma la enlaza con la planta más cercana y dibuja la **ruta óptima** en el mapa → el **agente** responde *"¿cuánto ahorra la UCB al mes?"* y genera el reporte ESG.

### Tecnología utilizada
React · FastAPI · SQLite · **scikit-learn** (predicción) · **Google OR-Tools** (ruteo) · **DeepSeek API** (agente) · Open-Meteo · Leaflet/OpenStreetMap. Sin hardware, sin GPU, tiers gratuitos.

### Impacto esperado
Escenario 10% de la ciudad: **~5,8 GWh/año**, **~14.600 t CO₂e/año evitadas**, **~8.760 t/año de compost**. Alineado a los ODS 7, 11, 12 y 13.

### Próximos pasos
1. Piloto con 1 planta + 5–10 generadores reales (1–3 meses).
2. Reentrenar el modelo con datos primarios.
3. Ronda semilla (~$20.000).
4. Expansión a residuo agroindustrial y créditos de carbono.

---

## Guion para el video pitch (máx. 2 min)

| Tiempo | Qué se dice / muestra |
|---|---|
| 0:00–0:20 | **Gancho:** "Cada día Santa Cruz entierra energía y libera metano." Imagen del problema. |
| 0:20–0:40 | **Problema + dato:** 700–900 t/día de orgánico; nadie lo conecta ni cuantifica. |
| 0:40–0:55 | **Solución:** presentamos GreenSpark y su propuesta de valor en una frase. |
| 0:55–1:35 | **Demo en vivo:** registrar residuo → predicción IA → mapa con ruta → agente genera reporte ESG. |
| 1:35–1:50 | **Impacto + negocio:** GWh y CO₂ evitados; cliente que ya paga; LTV/CAC ~16x. |
| 1:50–2:00 | **Cierre:** "Convertimos basura en energía, ahorro y datos. GreenSpark." Logo + equipo. |

---

## Respuestas a objeciones probables del jurado

- **"¿Dónde está el hardware?"** → No lo necesitamos: usamos la capacidad de transformación que **ya existe** (plantas/biodigestores). Nuestro valor es la inteligencia que la activa.
- **"¿La IA no es solo una regla de tres?"** → No: el modelo ajusta por mezcla, humedad y estacionalidad y **supera medible­mente** al coeficiente fijo (mostramos la métrica).
- **"¿Hay comprador real?"** → Sí: el generador urbano **ya paga** por desechar y necesita reporte ESG. Ese es el cliente ancla.
- **"¿Es escalable?"** → Es software SaaS: mismo producto en otras ciudades y en el residuo agroindustrial, con costo marginal bajo.
