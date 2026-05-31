import type { KeyboardEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedTab = searchParams.get("tab");
  const tab = TABS.some((candidate) => candidate.id === requestedTab)
    ? requestedTab as Tab
    : "escenarios";
  const activePanelId = `panel-${tab}`;

  function selectTab(nextTab: Tab) {
    const nextParams = new URLSearchParams(searchParams);
    if (nextTab === "escenarios") nextParams.delete("tab");
    else nextParams.set("tab", nextTab);
    setSearchParams(nextParams, { replace: true });
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentTab: Tab) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const currentIndex = TABS.findIndex((candidate) => candidate.id === currentTab);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? TABS.length - 1
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    const nextTab = TABS[nextIndex].id;

    selectTab(nextTab);
    requestAnimationFrame(() => document.getElementById(`tab-${nextTab}`)?.focus());
  }

  return (
    <div className="console">
      <a className="skip-link" href="#console-content">Saltar al contenido</a>
      <header className="console__bar">
        <div className="container console__bar-inner">
          <Link to="/" className="console__brand">
            <span aria-hidden>&#9889;</span> GreenSpark <span style={{ color: "var(--color-text-secondary)", fontWeight: 400, fontSize: 13 }}>· Spark Console</span>
          </Link>
          <span className="console__sim-note">MVP investigativo · resultados SIMULADOS</span>
        </div>
      </header>

      <div className="container">
        <nav className="tabs" aria-label="Secciones de Spark Console">
          <div role="tablist" aria-label="Herramientas científicas">
          {TABS.map((t) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              className={`tab ${tab === t.id ? "tab--active" : ""}`}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => selectTab(t.id)}
              onKeyDown={(event) => onTabKeyDown(event, t.id)}
            >
              {t.label}
            </button>
          ))}
          </div>
        </nav>

        <main id="console-content" tabIndex={-1}>
          <section id={activePanelId} role="tabpanel" aria-labelledby={`tab-${tab}`}>
          {tab === "escenarios" && <ScenariosPanel />}
          {tab === "simulador" && <SimulatorPanel />}
          {tab === "agente" && <AgentChatPanel />}
          </section>
        </main>
      </div>
    </div>
  );
}
