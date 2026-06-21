import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont as loadOutfit } from "@remotion/google-fonts/Outfit";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily: outfit } = loadOutfit("normal", {
  weights: ["400", "700", "800"],
  subsets: ["latin"],
});
const { fontFamily: inter } = loadInter("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});
const { fontFamily: mono } = loadMono("normal", {
  weights: ["400", "600"],
  subsets: ["latin"],
});

// ─── Design tokens ───────────────────────────────────────────────────────────
const BG = "#0d1a10";
const GREEN = "#2e9e5e";
const GREEN_DARK = "#1b7a3d";
const WHITE = "#ffffff";
const WHITE70 = "rgba(255,255,255,0.70)";
const WHITE40 = "rgba(255,255,255,0.40)";
const GLOW = "rgba(46,158,94,0.14)";

// ─── Easing ──────────────────────────────────────────────────────────────────
const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);

function fadeIn(frame: number, start = 0, duration = 25) {
  return interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
}

function slideUp(frame: number, start = 0, duration = 25, amount = 28) {
  return interpolate(frame, [start, start + duration], [amount, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
}

function scaleIn(frame: number, start = 0, duration = 30, from = 0.92) {
  return interpolate(frame, [start, start + duration], [from, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
}

function fadeOut(frame: number, totalFrames: number, duration = 20) {
  const start = totalFrames - duration;
  return interpolate(frame, [start, totalFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ─── Shared components ───────────────────────────────────────────────────────

/** Full-frame dark background with centered radial glow */
const Background: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => (
  <AbsoluteFill
    style={{
      background: BG,
      opacity,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${GLOW}, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
  </AbsoluteFill>
);

/** Eyebrow label (monospace, green) */
const Eyebrow: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({
  children,
  style,
}) => (
  <p
    style={{
      fontFamily: mono,
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: GREEN,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </p>
);

/** Screenshot in a rounded card with green shadow */
const ScreenCard: React.FC<{
  src: string;
  scale?: number;
  opacity?: number;
  style?: React.CSSProperties;
}> = ({ src, scale = 1, opacity = 1, style }) => (
  <div
    style={{
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(46,158,94,0.2), 0 0 60px rgba(46,158,94,0.08)`,
      transform: `scale(${scale})`,
      opacity,
      transformOrigin: "top center",
      ...style,
    }}
  >
    <Img src={staticFile(src)} style={{ width: "100%", display: "block" }} />
  </div>
);

// ─── Scene 1: Intro (0–240) ───────────────────────────────────────────────────
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const presentsOpacity = interpolate(frame, [0, 20, 60, 80], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });

  const titleOpacity = fadeIn(frame, 80, 30);
  const titleScale = scaleIn(frame, 80, 40, 0.88);
  const titleBlur = interpolate(frame, [80, 120], [8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineOpacity = fadeIn(frame, 130, 25);
  const taglineY = slideUp(frame, 130, 25, 20);

  const exitOpacity = fadeOut(frame, 240, 30);

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* "HackHeroes presenta..." */}
        <p
          style={{
            fontFamily: outfit,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: WHITE40,
            opacity: presentsOpacity,
            marginBottom: 0,
            position: "absolute",
            top: "36%",
          }}
        >
          <span style={{ color: GREEN, fontWeight: 800 }}>HackHeroes</span>
          &nbsp; presenta…
        </p>

        {/* Main logo */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            filter: `blur(${titleBlur}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: outfit,
              fontSize: 140,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: 0,
              color: WHITE,
            }}
          >
            Green
            <span
              style={{
                background: `linear-gradient(135deg, ${GREEN_DARK}, ${GREEN})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: `drop-shadow(0 0 32px rgba(46,158,94,0.5))`,
              }}
            >
              Spark
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: inter,
            fontSize: 24,
            color: WHITE70,
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            marginTop: 28,
            maxWidth: 680,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Plataforma de IA que convierte residuos bioorgánicos en decisiones energéticas medibles
        </p>

        {/* Lightning bolt glow */}
        <div
          style={{
            position: "absolute",
            fontSize: 32,
            opacity: titleOpacity * 0.6,
            top: "calc(50% - 110px)",
            left: "calc(50% + 140px)",
            filter: `drop-shadow(0 0 12px ${GREEN})`,
          }}
        >
          ⚡
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 2: Problem (240–660) ───────────────────────────────────────────────
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const eyebrowOpacity = fadeIn(frame, 0, 20);
  const titleOpacity = fadeIn(frame, 18, 25);
  const titleY = slideUp(frame, 18, 25, 24);
  const leadOpacity = fadeIn(frame, 40, 25);

  const card1Opacity = fadeIn(frame, 70, 22);
  const card1Y = slideUp(frame, 70, 22, 32);
  const card2Opacity = fadeIn(frame, 90, 22);
  const card2Y = slideUp(frame, 90, 22, 32);
  const card3Opacity = fadeIn(frame, 110, 22);
  const card3Y = slideUp(frame, 110, 22, 32);

  const exitOpacity = fadeOut(frame, 420, 25);

  const statNum = (val: string, label: string, highlight = false) => (
    <div
      style={{
        background: highlight
          ? `linear-gradient(135deg, ${GREEN_DARK}, ${GREEN})`
          : "rgba(255,255,255,0.05)",
        border: highlight ? "none" : `1px solid rgba(46,158,94,0.2)`,
        borderRadius: 16,
        padding: "36px 32px",
        flex: 1,
        boxShadow: highlight
          ? `0 16px 40px rgba(46,158,94,0.3)`
          : `0 8px 24px rgba(0,0,0,0.3)`,
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontSize: 56,
          fontWeight: 600,
          color: WHITE,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {val}
      </div>
      <div
        style={{
          fontFamily: inter,
          fontSize: 17,
          color: highlight ? "rgba(255,255,255,0.85)" : WHITE70,
          marginTop: 14,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 120px",
          gap: 0,
        }}
      >
        <div style={{ opacity: eyebrowOpacity }}>
          <Eyebrow>01 — Problema identificado</Eyebrow>
        </div>

        <h2
          style={{
            fontFamily: outfit,
            fontSize: 62,
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "16ch",
            margin: "20px 0 0",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          971 toneladas de energía orgánica se pudren cada día en Santa Cruz
        </h2>

        <p
          style={{
            fontFamily: inter,
            fontSize: 20,
            color: WHITE70,
            maxWidth: "58ch",
            lineHeight: 1.6,
            margin: "20px 0 0",
            opacity: leadOpacity,
          }}
        >
          Universidades, colegios y restaurantes pagan facturas de luz crecientes mientras casi mil
          toneladas de materia orgánica van al vertedero sin aprovechar.
        </p>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
          }}
        >
          <div style={{ opacity: card1Opacity, transform: `translateY(${card1Y}px)`, display: "flex", flex: 1 }}>
            {statNum("1.909,86", "toneladas de residuos por día en SCZ")}
          </div>
          <div style={{ opacity: card2Opacity, transform: `translateY(${card2Y}px)`, display: "flex", flex: 1 }}>
            {statNum("50,84%", "es orgánico compostable")}
          </div>
          <div style={{ opacity: card3Opacity, transform: `translateY(${card3Y}px)`, display: "flex", flex: 1 }}>
            {statNum("~971 t", "de materia orgánica desaprovechada al día", true)}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 3: Landing (660–1200) ──────────────────────────────────────────────
const LandingScene: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = fadeIn(frame, 0, 20);
  const screenOpacity = fadeIn(frame, 15, 30);
  const screenScale = scaleIn(frame, 15, 40, 0.93);
  const screenY = slideUp(frame, 15, 35, 40);

  // Slow zoom in on the screenshot
  const slowScale = interpolate(frame, [0, 540], [1, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitOpacity = fadeOut(frame, 540, 25);

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 60,
          gap: 0,
        }}
      >
        <div style={{ opacity: labelOpacity, textAlign: "center", marginBottom: 32 }}>
          <Eyebrow>02 — Solución</Eyebrow>
          <h2
            style={{
              fontFamily: outfit,
              fontSize: 48,
              fontWeight: 800,
              color: WHITE,
              margin: "12px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            La plataforma GreenSpark
          </h2>
        </div>

        <div
          style={{
            width: "88%",
            opacity: screenOpacity,
            transform: `translateY(${screenY}px) scale(${screenScale * slowScale})`,
            transformOrigin: "top center",
          }}
        >
          <ScreenCard src="landing-problem.png" />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 4: Scenarios (1200–1740) ───────────────────────────────────────────
const ScenariosScene: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = fadeIn(frame, 0, 20);
  const screenOpacity = fadeIn(frame, 18, 30);
  const screenY = slideUp(frame, 18, 30, 40);

  const badge1Opacity = fadeIn(frame, 100, 20);
  const badge2Opacity = fadeIn(frame, 120, 20);
  const badge3Opacity = fadeIn(frame, 140, 20);

  const exitOpacity = fadeOut(frame, 540, 25);

  const badge = (text: string, delay: number, op: number) => (
    <div
      style={{
        background: "rgba(46,158,94,0.15)",
        border: `1px solid rgba(46,158,94,0.35)`,
        borderRadius: 999,
        padding: "10px 20px",
        fontFamily: mono,
        fontSize: 15,
        fontWeight: 600,
        color: GREEN,
        opacity: op,
        letterSpacing: "0.04em",
      }}
    >
      {text}
    </div>
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 60,
        }}
      >
        <div style={{ opacity: labelOpacity, textAlign: "center", marginBottom: 24 }}>
          <Eyebrow>03 — Spark Console</Eyebrow>
          <h2
            style={{
              fontFamily: outfit,
              fontSize: 48,
              fontWeight: 800,
              color: WHITE,
              margin: "12px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Escenarios MFC registrados
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
            {badge("8 escenarios", 100, badge1Opacity)}
            {badge("6 sustratos", 120, badge2Opacity)}
            {badge("192 lecturas de sensores", 140, badge3Opacity)}
          </div>
        </div>

        <div
          style={{
            width: "90%",
            opacity: screenOpacity,
            transform: `translateY(${screenY}px)`,
          }}
        >
          <ScreenCard src="dashboard-scenarios.png" />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 5: Simulator (1740–2400) ───────────────────────────────────────────
const SimulatorScene: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = fadeIn(frame, 0, 20);
  const screenOpacity = fadeIn(frame, 18, 30);
  const screenY = slideUp(frame, 18, 30, 40);

  const metric1Opacity = fadeIn(frame, 120, 22);
  const metric2Opacity = fadeIn(frame, 140, 22);
  const metric3Opacity = fadeIn(frame, 160, 22);

  const exitOpacity = fadeOut(frame, 660, 25);

  const metricCard = (value: string, unit: string, label: string, op: number) => (
    <div
      style={{
        background: "rgba(46,158,94,0.1)",
        border: `1px solid rgba(46,158,94,0.25)`,
        borderRadius: 12,
        padding: "20px 28px",
        opacity: op,
        flex: 1,
      }}
    >
      <div style={{ fontFamily: mono, fontSize: 42, fontWeight: 600, color: GREEN, lineHeight: 1 }}>
        {value}
        <span style={{ fontSize: 18, color: WHITE40, marginLeft: 6 }}>{unit}</span>
      </div>
      <div style={{ fontFamily: inter, fontSize: 14, color: WHITE70, marginTop: 8 }}>{label}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 56,
        }}
      >
        <div style={{ opacity: labelOpacity, textAlign: "center", marginBottom: 20 }}>
          <Eyebrow>04 — Simulador de predicción</Eyebrow>
          <h2
            style={{
              fontFamily: outfit,
              fontSize: 46,
              fontWeight: 800,
              color: WHITE,
              margin: "12px 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Baseline determinista en acción
          </h2>
          <p style={{ fontFamily: inter, fontSize: 17, color: WHITE70, margin: 0 }}>
            Resultados etiquetados como{" "}
            <span style={{ fontFamily: mono, color: GREEN, fontWeight: 600 }}>[SIMULADOS]</span>{" "}
            — basados en literatura, no mediciones
          </p>
        </div>

        {/* Metric callouts */}
        <div
          style={{
            display: "flex",
            gap: 20,
            width: "88%",
            marginBottom: 24,
          }}
        >
          {metricCard("52.72", "mV", "Voltaje proyectado", metric1Opacity)}
          {metricCard("8.26", "mW", "Potencia proyectada", metric2Opacity)}
          {metricCard("5.13", "mA", "Corriente proyectada", metric3Opacity)}
        </div>

        <div
          style={{
            width: "88%",
            opacity: screenOpacity,
            transform: `translateY(${screenY}px)`,
          }}
        >
          <ScreenCard src="dashboard-simulator.png" />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 6: Agent (2400–2940) ───────────────────────────────────────────────
const AgentScene: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = fadeIn(frame, 0, 20);
  const screenOpacity = fadeIn(frame, 18, 30);
  const screenY = slideUp(frame, 18, 30, 40);

  const quoteOpacity = fadeIn(frame, 120, 25);
  const quoteY = slideUp(frame, 120, 25, 20);

  const exitOpacity = fadeOut(frame, 540, 25);

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 56,
        }}
      >
        <div style={{ opacity: labelOpacity, textAlign: "center", marginBottom: 24 }}>
          <Eyebrow>05 — Asesor IA</Eyebrow>
          <h2
            style={{
              fontFamily: outfit,
              fontSize: 48,
              fontWeight: 800,
              color: WHITE,
              margin: "12px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Explicación trazable sin inventar cifras
          </h2>
        </div>

        <div
          style={{
            width: "88%",
            opacity: screenOpacity,
            transform: `translateY(${screenY}px)`,
            marginBottom: 28,
          }}
        >
          <ScreenCard src="dashboard-agent.png" />
        </div>

        <div
          style={{
            opacity: quoteOpacity,
            transform: `translateY(${quoteY}px)`,
            background: "rgba(46,158,94,0.08)",
            border: `1px solid rgba(46,158,94,0.2)`,
            borderLeft: `4px solid ${GREEN}`,
            borderRadius: 10,
            padding: "18px 28px",
            width: "88%",
            fontFamily: mono,
            fontSize: 15,
            color: WHITE70,
            lineHeight: 1.6,
          }}
        >
          El agente recibe resultados calculados por el backend — no inventa potencia, ahorro ni
          emisiones. Si falta un dato, lo declara.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 7: Impact (2940–3300) ──────────────────────────────────────────────
const ImpactScene: React.FC = () => {
  const frame = useCurrentFrame();

  const eyebrowOpacity = fadeIn(frame, 0, 20);
  const titleOpacity = fadeIn(frame, 18, 25);
  const titleY = slideUp(frame, 18, 25, 24);

  const m1Opacity = fadeIn(frame, 60, 22);
  const m1Y = slideUp(frame, 60, 22, 28);
  const m2Opacity = fadeIn(frame, 85, 22);
  const m2Y = slideUp(frame, 85, 22, 28);
  const m3Opacity = fadeIn(frame, 110, 22);
  const m3Y = slideUp(frame, 110, 22, 28);

  const disclaimerOpacity = fadeIn(frame, 160, 20);
  const exitOpacity = fadeOut(frame, 360, 25);

  const impactCard = (icon: string, value: string, label: string, tag: string, op: number, y: number) => (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid rgba(46,158,94,0.2)`,
        borderRadius: 16,
        padding: "40px 36px",
        flex: 1,
        opacity: op,
        transform: `translateY(${y}px)`,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
      <div
        style={{
          fontFamily: mono,
          fontSize: 44,
          fontWeight: 600,
          color: GREEN,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      <div style={{ fontFamily: inter, fontSize: 16, color: WHITE70, marginTop: 12, lineHeight: 1.5 }}>
        {label}
      </div>
      <div
        style={{
          display: "inline-block",
          marginTop: 16,
          fontFamily: mono,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          color: "#d4930a",
          background: "rgba(212,147,10,0.12)",
          padding: "4px 10px",
          borderRadius: 6,
        }}
      >
        {tag}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <Background />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 120px",
        }}
      >
        <div style={{ opacity: eyebrowOpacity }}>
          <Eyebrow>06 — Impacto potencial</Eyebrow>
        </div>

        <h2
          style={{
            fontFamily: outfit,
            fontSize: 58,
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "18ch",
            margin: "20px 0 48px",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Si el 10% de SCZ participara en la plataforma
        </h2>

        <div style={{ display: "flex", gap: 24 }}>
          {impactCard("⚡", "5,8 GWh", "por año de energía potencial generada", "META_EXPLORATORIA", m1Opacity, m1Y)}
          {impactCard("🌿", "14.600 t", "de CO₂e potencialmente evitadas por año", "META_EXPLORATORIA", m2Opacity, m2Y)}
          {impactCard("♻️", "971 t/día", "de materia orgánica que podrían valorizarse", "DATO SCZ", m3Opacity, m3Y)}
        </div>

        <p
          style={{
            fontFamily: inter,
            fontSize: 14,
            color: WHITE40,
            marginTop: 28,
            opacity: disclaimerOpacity,
            fontStyle: "italic",
          }}
        >
          Valores calculados como [META_EXPLORATORIA]. No son resultados medidos ni garantizados.
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Scene 8: Outro (3300–3600) ───────────────────────────────────────────────
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = fadeIn(frame, 0, 20);
  const logoOpacity = fadeIn(frame, 20, 35);
  const logoScale = scaleIn(frame, 20, 40, 0.9);
  const subOpacity = fadeIn(frame, 60, 30);
  const subY = slideUp(frame, 60, 30, 16);
  const tagOpacity = fadeIn(frame, 90, 25);

  return (
    <AbsoluteFill>
      {/* Gradient CTA background (matches app CTA section) */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, #0a2e17 0%, #145c2e 40%, #1b7a3d 70%, #2e9e5e 100%)`,
          opacity: bgOpacity,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.07), transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(46,158,94,0.15), transparent 60%)`,
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 0,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <h1
            style={{
              fontFamily: outfit,
              fontSize: 130,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: WHITE,
              lineHeight: 1,
              margin: 0,
              textShadow: "0 4px 32px rgba(0,0,0,0.2)",
            }}
          >
            Green
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.4))",
              }}
            >
              Spark
            </span>
          </h1>
        </div>

        <p
          style={{
            fontFamily: inter,
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            marginTop: 28,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          Convertimos residuos bioorgánicos en decisiones energéticas medibles
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 48,
            opacity: tagOpacity,
          }}
        >
          {["HackHeroes", "Build With AI 2026", "Santa Cruz de la Sierra", "Mención Energía"].map(
            (t) => (
              <div
                key={t}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontFamily: inter,
                  fontSize: 15,
                  fontWeight: 500,
                  color: WHITE,
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ─── Main composition ─────────────────────────────────────────────────────────
export const GreenSparkDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG }}>
      <Sequence from={0} durationInFrames={240}>
        <IntroScene />
      </Sequence>

      <Sequence from={240} durationInFrames={420}>
        <ProblemScene />
      </Sequence>

      <Sequence from={660} durationInFrames={540}>
        <LandingScene />
      </Sequence>

      <Sequence from={1200} durationInFrames={540}>
        <ScenariosScene />
      </Sequence>

      <Sequence from={1740} durationInFrames={660}>
        <SimulatorScene />
      </Sequence>

      <Sequence from={2400} durationInFrames={540}>
        <AgentScene />
      </Sequence>

      <Sequence from={2940} durationInFrames={360}>
        <ImpactScene />
      </Sequence>

      <Sequence from={3300} durationInFrames={300}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
