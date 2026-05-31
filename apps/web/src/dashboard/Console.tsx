import { useState } from "react";
import { Link } from "react-router-dom";
import { ScenariosPanel } from "./panels/ScenariosPanel";
import { SimulatorPanel } from "./panels/SimulatorPanel";
import { AgentChatPanel } from "./panels/AgentChatPanel";
import "./dashboard.css";

type Tab = "escenarios" | "simulador" | "agente";

const TABS: { id: Tab; label: string }[] = [
  { id: "escenarios", label: "Escenarios" },
  { id: "simulador", label: "Simulador" },
  { id: "agente", label: "Asesor IA" },
];

export function Console() {
  const [tab, setTab] = useState<Tab>("escenarios");

  return (
    <div className="console">
      <header className="console__bar">
        <div className="container console__bar-inner">
          <Link to="/" className="console__brand">
            <span aria-hidden>&#9889;</span> GreenSpark <span style={{ color: "var(--color-text-secondary)", fontWeight: 400, fontSize: 13 }}>· Spark Console</span>
          </Link>
          <span className="console__sim-note">MVP investigativo · resultados SIMULADOS</span>
        </div>
      </header>

      <div className="container">
        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${tab === t.id ? "tab--active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {tab === "escenarios" && <ScenariosPanel />}
        {tab === "simulador" && <SimulatorPanel />}
        {tab === "agente" && <AgentChatPanel />}
      </div>
    </div>
  );
}
