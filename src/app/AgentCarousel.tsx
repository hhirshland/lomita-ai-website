"use client";

import { Check, FileText, Loader } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType, TouchEvent } from "react";

type RowState = "done" | "active" | "queued";

type Row = {
  state: RowState;
  label: string;
  text: string;
  meta: string;
  icon?: ComponentType<{ size?: number; strokeWidth?: number }>;
};

type Panel = {
  title: string;
  rows: Row[];
};

const PANELS: Panel[] = [
  {
    title: "investment-memo-agent · run #1184",
    rows: [
      { state: "done", label: "Extract", text: "142 figures from data room", meta: "done" },
      { state: "done", label: "Validate", text: "cross-referenced 9 sources", meta: "done" },
      { state: "active", label: "Analyze", text: "building charts & tables", meta: "02:14" },
      { state: "queued", label: "Draft memo", text: "firm style guide", meta: "queued", icon: FileText },
    ],
  },
  {
    title: "legal-diligence-agent · run #0473",
    rows: [
      { state: "done", label: "Ingest", text: "38 contracts from legal room", meta: "done" },
      { state: "done", label: "Classify", text: "214 clauses tagged", meta: "done" },
      { state: "active", label: "Flag", text: "matching against fund red lines", meta: "01:38" },
      { state: "queued", label: "Issues list", text: "counsel-ready export", meta: "queued", icon: FileText },
    ],
  },
  {
    title: "tear-sheet-agent · run #0921",
    rows: [
      { state: "done", label: "Enrich", text: "27 sources reconciled", meta: "done" },
      { state: "done", label: "Score", text: "thesis fit vs. fund filters", meta: "done" },
      { state: "active", label: "Compose", text: "metrics, summary & comps", meta: "00:52" },
      { state: "queued", label: "Tear sheet", text: "one-pager export", meta: "queued", icon: FileText },
    ],
  },
];

const CYCLE_MS = 4200;
const SWIPE_MIN_PX = 48;

function RowIcon({ row }: { row: Row }) {
  if (row.state === "done") {
    return (
      <span
        className="runpanel__ic"
        style={{ background: "var(--positive-wash)", color: "var(--positive-400)" }}
      >
        <Check size={15} strokeWidth={2} />
      </span>
    );
  }
  if (row.state === "active") {
    return (
      <span
        className="runpanel__ic runpanel__pulse"
        style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
      >
        <Loader size={15} strokeWidth={2} />
      </span>
    );
  }
  const Icon = row.icon ?? FileText;
  return (
    <span
      className="runpanel__ic"
      style={{ background: "var(--surface-alt)", color: "var(--text-faint)" }}
    >
      <Icon size={15} strokeWidth={2} />
    </span>
  );
}

function RunPanelCard({ panel }: { panel: Panel }) {
  return (
    <div className="runpanel w-full">
      <div className="runpanel__bar">
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__title">{panel.title}</span>
        <span className="lui-badge lui-badge--accent ml-auto">
          <span className="lui-badge__dot" />
          Running
        </span>
      </div>

      {panel.rows.map((row) => (
        <div className="runpanel__row" key={row.label}>
          <RowIcon row={row} />
          <span
            className="runpanel__t"
            style={row.state === "queued" ? { color: "var(--text-faint)" } : undefined}
          >
            <b style={row.state === "queued" ? { color: "var(--text-muted)" } : undefined}>
              {row.label}
            </b>{" "}
            · {row.text}
          </span>
          <span className="runpanel__meta">{row.meta}</span>
        </div>
      ))}
    </div>
  );
}

const POSITIONS = ["center", "right", "left"] as const;

export default function AgentCarousel() {
  const [active, setActive] = useState(0);
  const reducedRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Keyed on `active` so any manual navigation (swipe, dot) restarts the
  // timer instead of rotating away from the card the user just picked.
  useEffect(() => {
    if (reducedRef.current) return;
    const id = window.setTimeout(() => {
      setActive((i) => (i + 1) % PANELS.length);
    }, CYCLE_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  const positionFor = useCallback(
    (index: number) => POSITIONS[(index - active + PANELS.length) % PANELS.length],
    [active],
  );

  const onTouchStart = useCallback((e: TouchEvent) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onTouchEnd = useCallback((e: TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Ignore taps and mostly-vertical gestures so page scrolling stays free.
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return;
    const step = dx < 0 ? 1 : -1;
    setActive((i) => (i + step + PANELS.length) % PANELS.length);
  }, []);

  return (
    <div className="agentcarousel">
      <div
        className="agentcarousel__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null;
        }}
      >
        {PANELS.map((panel, i) => {
          const pos = positionFor(i);
          return (
            <div
              key={panel.title}
              className={`agentcarousel__card agentcarousel__card--${pos}`}
              aria-hidden={pos !== "center"}
            >
              <RunPanelCard panel={panel} />
            </div>
          );
        })}
      </div>

      <div className="agentcarousel__dots" role="tablist" aria-label="Agent runs">
        {PANELS.map((panel, i) => (
          <button
            key={panel.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={panel.title}
            className={`agentcarousel__dot${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
