"use client";

import { useEffect, useState } from "react";
import {
  Check,
  FileText,
  Loader,
  Search,
  Shield,
  type LucideIcon,
} from "lucide-react";

type Row =
  | { state: "done"; label: string; rest: string }
  | { state: "active"; label: string; rest: string; meta: string }
  | { state: "queued"; label: string; rest: string; icon: LucideIcon };

type Agent = {
  id: string;
  label: string;
  title: string;
  rows: Row[];
};

const AGENTS: Agent[] = [
  {
    id: "investment-memo",
    label: "Investment memo agent",
    title: "investment-memo-agent · run #1184",
    rows: [
      { state: "done", label: "Extract", rest: "· 142 figures from data room" },
      { state: "done", label: "Validate", rest: "· cross-referenced 9 sources" },
      { state: "active", label: "Analyze", rest: "· building charts & tables", meta: "02:14" },
      { state: "queued", label: "Draft memo", rest: "· firm style guide", icon: FileText },
    ],
  },
  {
    id: "legal-diligence",
    label: "Legal diligence agent",
    title: "legal-diligence-agent · run #0892",
    rows: [
      { state: "done", label: "Ingest", rest: "· 38 docs from legal room" },
      { state: "done", label: "Classify", rest: "· NDAs, SAFEs, side letters" },
      { state: "active", label: "Flag", rest: "· checking fund red lines", meta: "01:47" },
      { state: "queued", label: "Issues list", rest: "· non-standard terms", icon: Shield },
    ],
  },
  {
    id: "company-tear-sheet",
    label: "Company tear sheet agent",
    title: "tear-sheet-agent · run #2207",
    rows: [
      { state: "done", label: "Enrich", rest: "· 24 sources, CRM + web" },
      { state: "done", label: "Score", rest: "· ranked against thesis" },
      { state: "active", label: "Compose", rest: "· assembling tear sheet", meta: "00:58" },
      { state: "queued", label: "Tear sheet", rest: "· one-page summary", icon: Search },
    ],
  },
];

const CYCLE_MS = 4200;

function positionOf(index: number, active: number, len: number) {
  if (index === active) return "center";
  if (index === (active + 1) % len) return "right";
  return "left";
}

function RunRow({ row }: { row: Row }) {
  if (row.state === "done") {
    return (
      <div className="runpanel__row">
        <span
          className="runpanel__ic"
          style={{ background: "var(--positive-wash)", color: "var(--positive-400)" }}
        >
          <Check size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t">
          <b>{row.label}</b> {row.rest}
        </span>
        <span className="runpanel__meta">done</span>
      </div>
    );
  }

  if (row.state === "active") {
    return (
      <div className="runpanel__row">
        <span
          className="runpanel__ic runpanel__pulse"
          style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
        >
          <Loader size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t">
          <b>{row.label}</b> {row.rest}
        </span>
        <span className="runpanel__meta">{row.meta}</span>
      </div>
    );
  }

  const Icon = row.icon;
  return (
    <div className="runpanel__row">
      <span
        className="runpanel__ic"
        style={{ background: "var(--surface-alt)", color: "var(--text-faint)" }}
      >
        <Icon size={15} strokeWidth={2} />
      </span>
      <span className="runpanel__t" style={{ color: "var(--text-faint)" }}>
        <b style={{ color: "var(--text-muted)" }}>{row.label}</b> {row.rest}
      </span>
      <span className="runpanel__meta">queued</span>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="runpanel w-full">
      <div className="runpanel__bar">
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__title">{agent.title}</span>
        <span className="lui-badge lui-badge--accent ml-auto">
          <span className="lui-badge__dot" />
          Running
        </span>
      </div>
      {agent.rows.map((row, i) => (
        <RunRow key={i} row={row} />
      ))}
    </div>
  );
}

export default function AgentCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % AGENTS.length),
      CYCLE_MS,
    );
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <div className="agentcarousel" aria-roledescription="carousel" aria-label="Example agent runs">
      <div className="agentcarousel__stage">
        {AGENTS.map((agent, i) => {
          const pos = positionOf(i, active, AGENTS.length);
          return (
            <div
              key={agent.id}
              className={`agentcarousel__card agentcarousel__card--${pos}`}
              aria-hidden={pos !== "center"}
            >
              <AgentCard agent={agent} />
            </div>
          );
        })}
      </div>

      <div className="agentcarousel__dots" role="tablist" aria-label="Choose an agent">
        {AGENTS.map((agent, i) => (
          <button
            key={agent.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={agent.label}
            className={`agentcarousel__dot ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
