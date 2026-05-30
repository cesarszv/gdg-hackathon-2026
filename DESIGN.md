# Manual de Identidad Visual y Sistema de Diseño: GreenSpark ⚡🌱

**Proyecto:** GreenSpark · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia  
**Propósito:** Capa de Inteligencia Artificial para la Conversión de Residuos Orgánicos en Energía Rentable y Medible.

---

## 1. Concepto Creativo y Atmósfera: *"Bio-Cibernética Cruceña"*

La identidad visual de **GreenSpark** no es la de una ONG ecológica tradicional con tonos tierra apagados y tipografías rústicas. GreenSpark representa **ciencia, alta tecnología, matemática optimizada e innovación de vanguardia**. 

Nuestra atmósfera se define como **"Bio-Cibernética Cruceña"**:
*   **Cibernética y Ciencia:** Reflejada a través de fondos oscuros profundos (el vacío espacial, el software de deep learning, la precisión matemática de DeepSeek y Google OR-Tools) y líneas de luz estructuradas.
*   **Bioluminiscencia y Energía:** El residuo orgánico no es basura; es energía latente. Visualizamos esta energía a través de un **verde tecnológico ultra-brillante (bioluminiscente)** que simula la energía liberada por electrones en celdas microbianas.
*   **Cercanía y Orgullo Local:** Conectamos la selva y el llano cruceño (naturaleza vibrante, vegetación densa de Santa Cruz) con el asfalto de la metrópoli que crece exponencialmente. Es tecnología de altísimo nivel, pero de carácter accesible, transparente y humana para los ciudadanos, empresas e instituciones académicas locales.

---

## 2. Paleta de Colores y Roles Semánticos

Para lograr un impacto de primer nivel y evitar colores genéricos, hemos diseñado una paleta cromática sofisticada con valores específicos listados a continuación:

```mermaid
graph TD
    classDef volt fill:#00FF87,stroke:#00A859,stroke-width:2px,color:#000000;
    classDef navy fill:#0A0F1D,stroke:#00FF87,stroke-width:1px,color:#FFFFFF;
    classDef obsidian fill:#05070A,stroke:#1E293B,stroke-width:1px,color:#FFFFFF;
    classDef white fill:#FFFFFF,stroke:#E2E8F0,stroke-width:2px,color:#000000;
    classDef accent fill:#00E5FF,stroke:#00838F,stroke-width:1px,color:#000000;

    V[Green Spark Volt<br>#00FF87]:::volt
    N[Cyber Navy<br>#0A0F1D]:::navy
    O[Obsidian Black<br>#05070A]:::obsidian
    W[Pure Spark White<br>#FFFFFF]:::white
    A[Bioluminescent Cyan<br>#00E5FF]:::accent

    V --> |Acentos y Energía| W
    N --> |Fondo Principal App| O
    A --> |Datos y Fluidez| N
```

### 2.1. Colores Principales

*   **Green Spark Volt (`#00FF87` / HSL 152°, 100%, 50%)**
    *   **Descripción:** Un verde neón, bioluminiscente, con un leve matiz hacia el cian. Representa la descarga eléctrica, el flujo de electrones de las celdas microbianas, la vida natural de Santa Cruz y la energía limpia digitalizada.
    *   **Rol:** Acciones primarias, botones de llamada a la acción (CTA), estados activos, elementos luminosos de interfaz (glow effects), y acentos tipográficos clave.
*   **Cyber Navy (`#0A0F1D` / HSL 225°, 48%, 8%)**
    *   **Descripción:** Un azul marino extremadamente oscuro, al borde del negro, que emula las consolas de desarrollo avanzadas y los laboratorios científicos de datos.
    *   **Rol:** Fondos principales de aplicaciones web, paneles laterales, y contenedores estructurados (Cards).
*   **Pure Spark White (`#FFFFFF` / HSL 0°, 0%, 100%)**
    *   **Descripción:** Blanco puro, de alto contraste.
    *   **Rol:** Tipografía principal en interfaces de modo oscuro, fondos de papelería física, y áreas de descanso visual.

### 2.2. Colores Secundarios y de Apoyo

*   **Obsidian Black (`#05070A` / HSL 220°, 33%, 3%)**
    *   **Descripción:** Negro absoluto con un mínimo matiz azul.
    *   **Rol:** Fondos de página web completa en interfaces dark mode para crear una ilusión de profundidad infinita junto con el Cyber Navy.
*   **Bioluminescent Cyan (`#00E5FF` / HSL 186°, 100%, 50%)**
    *   **Descripción:** Cian eléctrico vibrante.
    *   **Rol:** Gráficas estadísticas de generación de energía (kWh), rutas logísticas de recolección en mapas, e indicadores de rendimiento de IA.
*   **Eco-Fibre Gray (`#F1F5F9` / HSL 210°, 40%, 96%)**
    *   **Descripción:** Gris neutro frío muy claro.
    *   **Rol:** Fondos para correspondencia física impresa y reportes ejecutivos en papel ecológico.

---

## 3. Tipografía del Sistema

La tipografía debe comunicar precisión matemática junto con amabilidad digital.

1.  **Tipografía de Títulos e Identidad:** **`Outfit`** (Google Fonts)
    *   *Por qué:* Una sans-serif geométrica con terminaciones limpias y curvas sutiles que le dan un aspecto futurista pero muy cercano.
    *   *Uso:* Títulos de secciones, logotipos, nombres de módulos, y números grandes en indicadores de impacto (KPIs).
2.  **Tipografía de Cuerpo de Texto:** **`Inter`** (Google Fonts)
    *   *Por qué:* Diseñada específicamente para legibilidad extrema en pantallas digitales a tamaños pequeños.
    *   *Uso:* Párrafos de reportes, chats conversacionales con el Asesor IA, tablas de datos, y descripciones técnicas.
3.  **Tipografía Monoespaciada para Datos:** **`JetBrains Mono`** o **`Fira Code`**
    *   *Por qué:* Acentúa la naturaleza de desarrollo tecnológico y precisión del proyecto.
    *   *Uso:* Coeficientes de rendimiento de residuos, coordenadas de GPS en rutas optimizadas y valores de regresión matemática de IA.

---

## 4. Estilo de Componentes de Interfaz de Usuario (UI)

Nuestros componentes de software de vanguardia siguen directrices estrictas para proyectar un diseño premium:

*   **Contenedores y Tarjetas (Cards):** Fondo con un gradiente lineal sutil de `#0A0F1D` a `#070B14`, bordes finos de 1px en `#1E293B` y esquinas redondeadas elegantes (`border-radius: 12px`). Sin sombras pesadas; en su lugar, se utiliza un efecto de iluminación perimetral (`glow`) verde de 2px cuando está activo o seleccionado.
*   **Botones Primarios:** Fondo sólido `#00FF87` con tipografía `Outfit Bold` en `#05070A`. Transición suave (`transition: all 0.3s ease`) que al pasar el mouse (`hover`) incrementa la bioluminiscencia con una sombra difuminada: `box-shadow: 0 0 15px rgba(0, 255, 135, 0.6)`.
*   **Mapas y Rutas de Recolección (Google OR-Tools):** El mapa (Leaflet/OSM) debe tener un estilo visual oscuro personalizado (Dark Map Tile) donde las calles sean de color gris carbón y las rutas optimizadas trazadas por la IA brillen en **Bioluminescent Cyan (`#00E5FF`)**, mientras que las plantas receptoras de biogás se marcan con pines pulsantes en **Green Spark Volt (`#00FF87`)**.
*   **El Chat del Asesor de Sostenibilidad IA:** El diálogo con el LLM (DeepSeek API) imita una interfaz científica moderna: burbujas de diálogo del agente con un degradado oscuro, textos en blanco de alta legibilidad, y un indicador de "Agente pensando..." animado con una onda de frecuencia en verde bioluminiscente.

---

## 5. Identidad Corporativa y Kit de Ventas Institucional (B2B)

El proceso de venta de GreenSpark a grandes generadores (como la Universidad Católica Boliviana - UCB, Universidad Privada de Santa Cruz - UPSA, o corporaciones afiliadas a CAINCO y FEGASACRUZ) requiere de una presencia física tan innovadora como el software mismo. La papelería es el primer puente físico del impacto digital de GreenSpark.

### 5.1. El Sobre de Presentación: *"La Revelación Tecnológica"*
*   **Exterior:** Papel kraft reciclado de fibra de caña (insumo icónico de Santa Cruz) prensado de alta densidad en color **Cyber Navy mate**. En el centro, destaca el logo de GreenSpark en estampado metálico caliente (*hot stamping*) de color verde cian fluorescente. El diseño es minimalista, sin textos redundantes, solo el logo de GreenSpark brillante sobre el fondo oscuro y un patrón digital geométrico de circuitos que se desvanecen en los bordes.
*   **El Cierre:** Un sello circular de lacre ecológico o sticker holográfico con un código QR que dice: *"Escanea para medir el impacto latente de tus residuos antes de abrir"*.
*   **Interior:** Al abrir el sobre, el revestimiento interno es de un color **Blanco Algodón Ecológico** texturizado que expone la siguiente frase en tipografía geométrica limpia: 
    > *"Estás abriendo la puerta a la soberanía energética de Santa Cruz de la Sierra."*

### 5.2. La Carta de Incorporación Institucional
*   **Material:** Impresa en papel ecológico certificado de residuo agroindustrial cruceño (como bagazo de caña de azúcar de los ingenios del norte integrado). Tiene una textura orgánica táctil de alta calidad.
*   **Estructura y Redacción:**
    *   **Encabezado:** Logo GreenSpark a la izquierda, y a la derecha en tipografía monoespaciada gris: `RED-SPARK // SOCIO-INNOVADOR // UCB-SCZ-2026`.
    *   **Destinatario:** *A las Autoridades Académicas / Directores de Sostenibilidad de la Universidad Católica Boliviana Sede Santa Cruz.*
    *   **El Mensaje (Cuerpo de la Carta):**
        > *"Nos complace certificar que su institución ha sido seleccionada para formar parte de la Red de Innovación Energética de Alto Nivel de GreenSpark. A partir de hoy, los residuos generados en sus comedores y áreas comunes ya no serán catalogados como basura o costos logísticos de desecho. 
        > 
        > Mediante nuestro sistema de Inteligencia Artificial predictivo, hemos identificado que los residuos orgánicos diarios de su campus tienen el potencial de iluminar aulas y laboratorios mediante un flujo de energía descentralizada y limpia, retornando además abono de alta calidad para el suelo de nuestro departamento.
        > 
        > Ustedes ya no son solo un centro educativo; son una celda energética activa de la Santa Cruz del mañana."*
    *   **El Token de Acceso Físico:** La carta incluye, incrustada en un troquel central, la **"GreenSpark Circle Key"**: una tarjeta inteligente premium de bambú oscuro con un chip NFC integrado y un acabado mate. Al acercar el celular de las autoridades o los estudiantes a la tarjeta, se abre instantáneamente el portal dinámico de GreenSpark con el dashboard en tiempo real de su propia institución, mostrando las toneladas desviadas del relleno sanitario y los kWh generados.

---

## 6. Identidad y Marketing en Redes Sociales: *"Cercanía de Alto Impacto"*

La estrategia en plataformas digitales (Instagram, LinkedIn, TikTok) debe equilibrar la rigurosidad de la IA con la calidez del cruceño, humanizando los datos complejos mediante analogías cotidianas y visuales explosivos.

### 6.1. Identidad Visual en Redes
*   **Grillas de Contenido:** Diseños con un fuerte uso de la retícula (*grid system*). Los marcos o bordes de las publicaciones emplean líneas delgadas y brillantes en verde neón y azul cian que dividen el espacio de forma limpia, emulando la precisión de un mapa logístico de optimización.
*   **Tipografía en Imágenes:** Títulos gigantes en `Outfit Extra Bold` blanco con palabras clave resaltadas en verde `#00FF87` con un sutil efecto de sombra luminosa detrás de las letras para despegarse del fondo oscuro.
*   **Imágenes de Contraste Extremo:** Fotos de alta calidad del paisaje de Santa Cruz (los verdes intensos del Urubó, el bullicio de los mercados populares como el Abasto o la Ramada, o el campus universitario de la UCB) editadas con un filtro de alta fidelidad tecnológica, integrando elementos digitales e infografías superpuestas en 3D que parecen flotar en el entorno.

### 6.2. Estrategia de Contenidos y Conexión Emocional (Cercanía)
*   **Táctica 1: La Humanización del kWh ("¿Qué significa este dato para mí?")**
    *   *Concepto:* En lugar de decir "Generamos 150 kWh al mes", publicamos un carrusel dinámico:
        *   *Slide 1:* *"¿Qué tienen en común tu almuerzo en Equipetrol y cargar tu celular por un año?"* (Fondo oscuro, foto premium de una hamburguesa típica cruceña con un aura verde brillante).
        *   *Slide 2:* *"Ayer, la zona de Equipetrol desechó 500 kg de residuos orgánicos de restaurantes. Nuestra IA predijo que equivalen a 100 kWh de energía."* (Gráfica cian interactiva superpuesta en el mapa de Equipetrol).
        *   *Slide 3:* *"Esa energía es suficiente para cargar 8.300 smartphones de cruceños de 0% a 100%."* (Ilustración simple digital de smartphones flotando con cables bioluminiscentes).
        *   *Slide 4:* *"El futuro no se bota, se transforma. Únete a la red."* (Botón/CTA limpio).
*   **Táctica 2: El Tablero de Honor Universitario (#RedGreenSpark)**
    *   Publicaciones dedicadas a celebrar la integración de universidades locales. Por ejemplo: *"La UCB Sede Santa Cruz enciende la innovación"* con fotos del rector sosteniendo la tarjeta de madera NFC y capturas elegantes de su dashboard personalizado. Esto genera sana competencia de sostenibilidad entre universidades (UCB vs. UPSA vs. UAGRM) y promueve que los mismos estudiantes compartan las publicaciones sintiendo orgullo de pertenencia.
*   **Táctica 3: Detrás del Algoritmo (Cultura "Build in Public")**
    *   Videos cortos en formato Reel/TikTok de los desarrolladores de GreenSpark en Santa Cruz explicando cómo funciona scikit-learn o Google OR-Tools para optimizar las rutas de recolección de basura cruceña por el 4to anillo. Un tono cercano, relajado, sin jerga excesiva, mostrando las pantallas de código reales con el diseño oscuro de GreenSpark.

---

## 7. Ecosistema de la Marca y Canales de Comunicación

El siguiente diagrama ilustra cómo fluye la identidad de la marca a través de todos nuestros canales físicos y digitales, asegurando una experiencia coherente y del más alto nivel:

```mermaid
graph TD
    classDef main fill:#0A0F1D,stroke:#00FF87,stroke-width:2px,color:#FFFFFF;
    classDef physical fill:#F1F5F9,stroke:#0A0F1D,stroke-width:2px,color:#000000;
    classDef digital fill:#05070A,stroke:#00E5FF,stroke-width:2px,color:#FFFFFF;

    BRAND[Identidad GreenSpark<br>"Bio-Cibernética Cruceña"]:::main

    %% Canales Físicos
    BRAND --> |Papelería y Presencia B2B| PHYS_MKT[Canal Físico / Corporativo]:::physical
    PHYS_MKT --> ENV[Sobre de Alta Costura Cyber Navy<br>y Lacre QR]:::physical
    PHYS_MKT --> LET[Carta Reciclada de Caña<br>con Lenguaje Épico y Cercano]:::physical
    PHYS_MKT --> KEY[Tarjeta NFC de Bambú Oscuro<br>GreenSpark Circle Key]:::physical

    %% Canales Digitales
    BRAND --> |Interfaces y Social Media| DIG_MKT[Canal Digital / Aplicaciones]:::digital
    DIG_MKT --> WEB[Plataforma Web React/FastAPI<br>Dashboard de Impacto Dark Mode]:::digital
    DIG_MKT --> SOC[Redes Sociales - Instagram/LinkedIn<br>Infografías de Alto Impacto y SparkFacts]:::digital
    DIG_MKT --> CHAT[Asesor Sostenible IA<br>Diálogo Inteligente con DeepSeek API]:::digital

    %% Puntos de Retorno e Impacto
    KEY --> |Escaneo / Tap NFC| WEB
    ENV --> |Lector QR| WEB
    SOC --> |Tráfico Orgánico| WEB
```

---

## 8. Principios de Diseño para Generación de Nuevas Vistas

Cuando se diseñen nuevas pantallas o componentes para la plataforma GreenSpark, el equipo técnico debe seguir estos cinco principios irrenunciables:

1.  **Oscuridad como Lienzo:** Todo nace del Cyber Navy (`#0A0F1D`). Las interfaces claras o blancas en pantalla están prohibidas para mantener la estética científica y reducir el cansancio visual del usuario en monitoreo constante.
2.  **Luz Funcional, no Decorativa:** El uso del verde brillante (`#00FF87`) debe estar justificado por la importancia de la acción o la presencia de datos críticos. Si todo brilla, nada es importante.
3.  **Trazabilidad Científica:** Cada dato, porcentaje o predicción energética debe incluir un pequeño pie de página que indique la fiabilidad del modelo (ej. *"Predicción de regresión IA con +/- 3% de desviación basada en humedad local"*). Esto construye confianza con socios e inversionistas.
4.  **Localismo Orgulloso:** Al ilustrar mapas o dar ejemplos, usa nombres y locaciones reales de Santa Cruz de la Sierra (Equipetrol, El Trompillo, Plan 3000, Banzer, etc.). Demostramos un entendimiento íntimo del territorio.
5.  **Cero Falsificaciones:** En línea con las reglas de la Hackathon, la visualización debe reflejar la IA de forma transparente y honesta.
