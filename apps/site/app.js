document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Drawer Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    
    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileDrawer.classList.toggle('open');
            
            // Toggle hamburger icon rotation
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileDrawer.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close drawer when clicking a link
        const mobileLinks = mobileDrawer.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 3. Hero Background Particle Canvas (2D)
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
        const ctx = heroCanvas.getContext('2d');
        let particles = [];
        const particleCount = 40;

        const resizeCanvas = () => {
            heroCanvas.width = heroCanvas.offsetWidth;
            heroCanvas.height = heroCanvas.offsetHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * heroCanvas.width;
                this.y = heroCanvas.height + Math.random() * 50;
                this.size = Math.random() * 2 + 1;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.alpha = Math.random() * 0.3 + 0.1;
                this.color = '#00ff73';
            }

            update() {
                this.y -= this.speedY;
                if (this.y < 0) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
            // Pre-warm particles so they are scattered at start
            particles[i].y = Math.random() * heroCanvas.height;
        }

        const animateParticles = () => {
            ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }

    // 4. Waste Stat Counter Trigger with GSAP ScrollTrigger
    const wasteCounter = document.getElementById('waste-counter');
    const wasteProgress = document.getElementById('waste-progress');
    
    if (wasteCounter && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: '.section-problem',
            start: 'top 70%',
            onEnter: () => {
                // Count up animation
                let count = { val: 0 };
                gsap.to(count, {
                    val: 971,
                    duration: 2,
                    ease: 'power3.out',
                    onUpdate: () => {
                        wasteCounter.textContent = Math.floor(count.val);
                    }
                });

                // Progress bar fill animation
                if (wasteProgress) {
                    wasteProgress.style.width = '82%';
                }
            }
        });
    } else if (wasteCounter) {
        // Fallback if GSAP is not loaded
        wasteCounter.textContent = "971";
        if (wasteProgress) wasteProgress.style.width = '82%';
    }

    // 5. Interactive Solution Steps & Console display
    const flowStepItems = document.querySelectorAll('.flow-step-item');
    const consoleDisplay = document.getElementById('console-display');

    const consoleStepContent = {
        1: `
<div class="console-cmd">greenspark init-scenario --type=bio-organic-mix</div>
<div class="console-log">[INFO] Cargando parámetros del sustrato de residuo...</div>
<div class="console-log">[DATA] Sustrato: Cáscaras de naranja + Lodo Anaeróbico</div>
<div class="console-log">[DATA] Humedad inicial: 82.5%</div>
<div class="console-log">[DATA] Rango de pH registrado: 6.80</div>
<div class="console-log">[DATA] Temperatura del reactor: 28.5 °C</div>
<div class="console-log">[DATA] Conductividad eléctrica estimada: 1.45 S/m</div>
<div class="console-result">
    <strong>[ÉXITO]</strong> Escenario inicial validado y registrado correctamente.<br>
    <strong>ID Escenario:</strong> ESC-2026-09A<br>
    <strong>Estado:</strong> LISTO PARA PREDICCIÓN
</div>
        `,
        2: `
<div class="console-cmd">greenspark predict-performance --scenario-id=ESC-2026-09A</div>
<div class="console-log">[INFO] Iniciando inferencia en pipeline de modelado físico...</div>
<div class="console-log">[MODEL] Cargando regresor Random Forest y Gradient Boosting...</div>
<div class="console-log">[MODEL] Procesando correlaciones no lineales de humedad vs conductividad...</div>
<div class="console-graph">
    <strong>Densidad de corriente estimada:</strong>
    <div class="console-graph-bar">
        <div class="console-graph-name">Actual Sim.</div>
        <div class="console-graph-visual"><div class="console-graph-fill" style="width: 83%"></div></div>
        <div class="console-graph-val">415 mA/m²</div>
    </div>
    <div class="console-graph-bar">
        <div class="console-graph-name">Baseline Ref.</div>
        <div class="console-graph-visual"><div class="console-graph-fill secondary" style="width: 58%"></div></div>
        <div class="console-graph-val">290 mA/m²</div>
    </div>
</div>
<div class="console-result">
    <strong>[RESULTADOS]</strong> Inferencia finalizada.<br>
    <strong>Voltaje máximo:</strong> 0.824 V &nbsp;·&nbsp; <strong>Estabilidad:</strong> Alta (14d)<br>
    <strong>Confianza:</strong> 91.4% (Asignado tag: <span style="color: #f59e0b; font-weight: bold;">SIMULADO</span>)
</div>
        `,
        3: `
<div class="console-cmd">greenspark recommend-next --target=max-power</div>
<div class="console-log">[INFO] Analizando matriz de covarianza de simulaciones...</div>
<div class="console-log">[RECOM] Evaluando 58 alternativas de experimentación física...</div>
<div class="console-log">[RECOM] Priorizando según potencial de potencia vs facilidad física...</div>
<div class="console-log">&gt;&gt; Propuesta 1: Adicionar inóculo de bacteria Geobacter (+5% v/v)</div>
<div class="console-log">&gt;&gt; Propuesta 2: Modificar buffer fosfatos para amortiguar pH en 6.90</div>
<div class="console-result">
    <strong>[RECOMENDACIÓN CIENTÍFICA]</strong><br>
    Se recomienda validar físicamente el escenario <strong>EXP-VALIDATE-03</strong>.<br>
    <strong>Acción:</strong> Añadir 5% de inóculo bacteriano nativo a la muestra actual.<br>
    <strong>Variable crítica a monitorear:</strong> Tasa de consumo de DQO (Demanda Química de Oxígeno).
</div>
        `,
        4: `
<div class="console-cmd">greenspark calculate-impact --scenario-id=ESC-2026-09A</div>
<div class="console-log">[INFO] Recuperando predicciones del escenario...</div>
<div class="console-log">[STATS] Extrapolando volumen diario de sustrato disponible (971 t/día)...</div>
<div class="console-log">[STATS] Eficiencia de conversión bio-eléctrica: 34.2%</div>
<div class="console-result">
    <strong>[MÉTRICAS DE IMPACTO AMBIENTAL]</strong><br>
    <strong>Residuos orgánicos aprovechados:</strong> 12.4 Kg/día por celda unitaria.<br>
    <strong>Energía proyectada anual:</strong> 840 kWh (Suficiente para 3 bombillas LED 24/7).<br>
    <strong>Reducción CO2 equivalente:</strong> 240.5 Kg/año (Evita emisión de gas metano en vertedero).
</div>
        `,
        5: `
<div class="console-cmd">greenspark generate-report --format=markdown</div>
<div class="console-log">[INFO] Enviando datos estructurados al agente explicativo (LLM)...</div>
<div class="console-log">[LLM] Construyendo explicación contextual sin alucinación numérica...</div>
<div class="console-log">[LLM] Estructurando justificación física y resumen financiero...</div>
<div class="console-result" style="font-family: inherit; font-size: 0.8rem; line-height: 1.4;">
    <strong>REPORTE GENERADO (#ESC-2026-09A):</strong><br>
    "El escenario evaluado a partir de cáscaras de naranja y lodos anaeróbicos muestra una densidad de corriente de 415 mA/m² y voltaje de 0.824 V, ubicándolo en el percentil superior del baseline teórico regional. La estabilidad de voltaje de 14 días indica viabilidad alta para prototipos semi-continuos. Se justifica la fase experimental física."
</div>
        `
    };

    const updateConsole = (stepId) => {
        if (consoleDisplay) {
            consoleDisplay.innerHTML = consoleStepContent[stepId];
        }
    };

    // Set initial console content
    updateConsole(1);

    flowStepItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            flowStepItems.forEach(i => i.classList.remove('active'));
            // Add active to current
            item.classList.add('active');
            
            const stepId = item.getAttribute('data-step');
            updateConsole(stepId);
        });
    });

    // 6. Interactive Architecture Panel Switching
    const archNodes = document.querySelectorAll('.arch-node');
    const archPanelDefault = document.getElementById('arch-panel-default');
    const archPanelContent = document.getElementById('arch-panel-content');
    const archTitle = document.getElementById('arch-title');
    const archTech = document.getElementById('arch-tech');
    const archDesc = document.getElementById('arch-desc');
    const archRole = document.getElementById('arch-role');

    const architectureData = {
        browser: {
            title: "Navegador del Usuario",
            tech: "HTML5 / CSS3 / Vanilla JS",
            desc: "Representa el navegador cliente donde se visualiza la plataforma. Se conecta mediante peticiones HTTP asíncronas para transferir información en formato JSON hacia el backend. Cuenta con validaciones del lado del cliente para asegurar consistencia en rangos de pH, temperatura y humedad.",
            role: "Punto de entrada de usuario y renderizado interactivo."
        },
        frontend: {
            title: "Frontend React Console",
            tech: "React 18 / TypeScript / Vite / GSAP",
            desc: "Una aplicación de una sola página (SPA) que alberga la consola de simulación, la configuración de parámetros del bioreactor, el visualizador gráfico de curvas de potencia y el panel de trazabilidad. Está diseñada para ofrecer una interfaz fluida e interactiva con micro-interacciones responsivas.",
            role: "Control de vistas, simulación interactiva y presentación visual de datos."
        },
        api: {
            title: "API REST FastAPI",
            tech: "FastAPI / Pydantic / Python 3.10+",
            desc: "Módulo principal del backend. Recibe las llamadas REST del cliente, las valida físicamente (evitando incoherencias) y distribuye la carga de trabajo hacia los modelos predictivos de Machine Learning y el algoritmo recomendador. Se encarga del enrutamiento y control general del pipeline de datos.",
            role: "Orquestación del backend, control de seguridad y enrutamiento."
        },
        validation: {
            title: "Filtro de Validación Física",
            tech: "Python Numpy / Custom Logic",
            desc: "Fase de control inicial. Evalúa si la combinación de variables es biológicamente viable. Por ejemplo: rechaza escenarios donde el reactor opera a 80°C con bacterias Geobacter (que son mesófilas y morirían), protegiendo al modelo predictivo de extrapolar datos absurdos.",
            role: "Reglas de negocio físicas y control de consistencia científica."
        },
        ml: {
            title: "Módulo Machine Learning",
            tech: "pandas / scikit-learn / Random Forest & Gradient Boosting",
            desc: "Pipeline de datos que carga modelos predictivos previamente entrenados con experimentos reales de celdas MFC. Evalúa variables como tipo de residuo, humedad, pH y temperatura para inferir la densidad de corriente eléctrica proyectada y la estabilidad temporal.",
            role: "Predicción cuantitativa y regresión de potencia bioeléctrica."
        },
        recommender: {
            title: "Recomendador Inteligente",
            tech: "Python Custom Optimization Heuristics",
            desc: "Algoritmo que clasifica y ordena experimentos recomendados. Evalúa el costo de sustratos, viabilidad física y rendimiento esperado para sugerirle al investigador qué mezcla o alteración del reactor debe validar físicamente en primer lugar para maximizar sus probabilidades de éxito.",
            role: "Priorización inteligente de celdas de combustible físicas."
        },
        sqlite: {
            title: "Persistencia (Base de Datos)",
            tech: "SQLite 3 / SQLAlchemy ORM",
            desc: "Base de datos local donde se almacenan los escenarios de simulación creados por los usuarios, las predicciones del modelo asociadas y los logs de trazabilidad. Permite auditar el historial de simulaciones realizadas por la institución.",
            role: "Historial de simulaciones, persistencia y trazabilidad científica."
        },
        llm: {
            title: "Agente Explicativo (IA Generativa)",
            tech: "Gemini Pro / API Rest (Opcional)",
            desc: "Genera reportes técnicos legibles en lenguaje institucional para presentar a directivos. Utiliza un diseño robusto: **nunca realiza cálculos matemáticos** (que podrían alucinar); solo toma el output numérico verificado del backend y lo traduce a prosa coherente. Si este módulo falla o no hay conexión a internet, la plataforma sigue operando con normalidad basándose en el backend determinístico.",
            role: "Generación de lenguaje natural formal e institucional sin alucinaciones numéricas."
        }
    };

    archNodes.forEach(node => {
        node.addEventListener('click', () => {
            const key = node.getAttribute('data-info');
            const data = architectureData[key];
            
            if (data && archPanelDefault && archPanelContent) {
                // Hide placeholder
                archPanelDefault.classList.add('hidden');
                // Show content
                archPanelContent.classList.remove('hidden');
                
                // Update panel details
                archTitle.textContent = data.title;
                archTech.textContent = data.tech;
                archDesc.textContent = data.desc;
                archRole.textContent = data.role;

                // Add subtle animate feedback to panel
                archPanelContent.style.animation = 'none';
                setTimeout(() => {
                    archPanelContent.style.animation = 'fadeIn 0.4s ease-out forwards';
                }, 10);
            }
        });
    });

    // 7. Three.js MFC Bioreactor 3D Simulation
    const mfcCanvas = document.getElementById('mfc-canvas');
    if (mfcCanvas && typeof THREE !== 'undefined') {
        const width = mfcCanvas.clientWidth;
        const height = mfcCanvas.clientHeight;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 7);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: mfcCanvas, antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Group for rotation
        const reactorGroup = new THREE.Group();
        scene.add(reactorGroup);

        // Bioreactor outer cylinder (Translucent Chamber)
        const cylinderGeom = new THREE.CylinderGeometry(1.5, 1.5, 3.5, 32, 1, true);
        const cylinderMat = new THREE.MeshPhysicalMaterial({
            color: 0x1e293b,
            transparent: true,
            opacity: 0.15,
            roughness: 0.1,
            metalness: 0.1,
            transmission: 0.6, // Glass-like
            ior: 1.2,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        const chamber = new THREE.Mesh(cylinderGeom, cylinderMat);
        reactorGroup.add(chamber);

        // Chamber borders (Metal rings)
        const ringGeom = new THREE.CylinderGeometry(1.52, 1.52, 0.15, 32);
        const metalMat = new THREE.MeshStandardMaterial({
            color: 0x334155,
            roughness: 0.4,
            metalness: 0.8
        });
        const topRing = new THREE.Mesh(ringGeom, metalMat);
        topRing.position.y = 1.75;
        reactorGroup.add(topRing);

        const bottomRing = topRing.clone();
        bottomRing.position.y = -1.75;
        reactorGroup.add(bottomRing);

        // Anode (Organic source electrode - left side, green glow)
        const anodeGeom = new THREE.BoxGeometry(0.3, 2.5, 0.8);
        const anodeMat = new THREE.MeshStandardMaterial({
            color: 0x10b981,
            roughness: 0.6,
            metalness: 0.9,
            emissive: 0x064e3b,
            emissiveIntensity: 0.5
        });
        const anode = new THREE.Mesh(anodeGeom, anodeMat);
        anode.position.x = -0.6;
        reactorGroup.add(anode);

        // Cathode (Electrode - right side, blue glow)
        const cathodeGeom = new THREE.BoxGeometry(0.3, 2.5, 0.8);
        const cathodeMat = new THREE.MeshStandardMaterial({
            color: 0x0ea5e9,
            roughness: 0.6,
            metalness: 0.9,
            emissive: 0x0369a1,
            emissiveIntensity: 0.5
        });
        const cathode = new THREE.Mesh(cathodeGeom, cathodeMat);
        cathode.position.x = 0.6;
        reactorGroup.add(cathode);

        // Membrane center plane
        const membraneGeom = new THREE.PlaneGeometry(0.05, 3.2);
        const membraneMat = new THREE.MeshStandardMaterial({
            color: 0xf59e0b,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide
        });
        const membrane = new THREE.Mesh(membraneGeom, membraneMat);
        membrane.rotation.y = Math.PI / 2;
        reactorGroup.add(membrane);

        // Bacteria / Electron Particles inside Anode side
        const particleCount = 60;
        const particleGeom = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const speeds = [];

        for (let i = 0; i < particleCount; i++) {
            // Randomly scatter particles on the left (anode) chamber
            const px = -0.6 + (Math.random() - 0.5) * 0.6;
            const py = (Math.random() - 0.5) * 3.0;
            const pz = (Math.random() - 0.5) * 1.2;
            
            positions[i * 3] = px;
            positions[i * 3 + 1] = py;
            positions[i * 3 + 2] = pz;

            // Speed vector (float upward and toward anode)
            speeds.push({
                y: Math.random() * 0.01 + 0.005,
                x: (Math.random() - 0.5) * 0.006,
                z: (Math.random() - 0.5) * 0.006
            });
        }

        particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Particle Material (Glowing bio-particles)
        const pMaterial = new THREE.PointsMaterial({
            color: 0x00ff73,
            size: 0.08,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particleSystem = new THREE.Points(particleGeom, pMaterial);
        reactorGroup.add(particleSystem);

        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Directional Light
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        // Green Point light (bio energy)
        const greenLight = new THREE.PointLight(0x00ff73, 1.2, 8);
        greenLight.position.set(-1.5, 0, 1);
        reactorGroup.add(greenLight);

        // Blue Point light (cathode potential)
        const blueLight = new THREE.PointLight(0x0ea5e9, 1.2, 8);
        blueLight.position.set(1.5, 0, 1);
        reactorGroup.add(blueLight);

        // Interactive mouse rotation variables
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        mfcCanvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        mfcCanvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };

            reactorGroup.rotation.y += deltaMove.x * 0.007;
            reactorGroup.rotation.x += deltaMove.y * 0.007;

            // Clamp vertical rotation to avoid flipping upside down
            reactorGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, reactorGroup.rotation.x));

            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch support for mobile rotation
        mfcCanvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        });

        mfcCanvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;

            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };

            reactorGroup.rotation.y += deltaMove.x * 0.007;
            reactorGroup.rotation.x += deltaMove.y * 0.007;
            reactorGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, reactorGroup.rotation.x));

            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        });

        mfcCanvas.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Resize handler inside loop
        const resizeRendererToDisplaySize = () => {
            const width = mfcCanvas.clientWidth;
            const height = mfcCanvas.clientHeight;
            const needResize = mfcCanvas.width !== width || mfcCanvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            resizeRendererToDisplaySize();

            // Self-rotate slightly when NOT being dragged
            if (!isDragging) {
                reactorGroup.rotation.y += 0.005;
            }

            // Animate particles (bacteria cells moving upwards)
            const positionsAttr = particleGeom.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                // Move particle upwards
                positionsAttr.setY(i, positionsAttr.getY(i) + speeds[i].y);
                positionsAttr.setX(i, positionsAttr.getX(i) + speeds[i].x);
                positionsAttr.setZ(i, positionsAttr.getZ(i) + speeds[i].z);

                // If particle reaches top, reset to bottom
                if (positionsAttr.getY(i) > 1.7) {
                    positionsAttr.setY(i, -1.7);
                    positionsAttr.setX(i, -0.6 + (Math.random() - 0.5) * 0.6);
                    positionsAttr.setZ(i, (Math.random() - 0.5) * 1.2);
                }
            }
            positionsAttr.needsUpdate = true;

            // Render
            renderer.render(scene, camera);
        };
        animate();

        // 8. Voltage telemetry readout simulation
        const liveVoltageEl = document.getElementById('live-voltage');
        if (liveVoltageEl) {
            setInterval(() => {
                // Fluctuates between 0.819 V and 0.832 V
                const val = (0.819 + Math.random() * 0.013).toFixed(3);
                liveVoltageEl.textContent = `${val} V`;
            }, 600);
        }
    }
});
