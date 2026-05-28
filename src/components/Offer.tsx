"use client";

import AnimatedSection from "./AnimatedSection";

const sprintSteps = [
  "Map the workflow end to end with the people who own it",
  "Separate deterministic automation, AI judgment, and human decisions",
  "Build on top of your existing systems, templates, and communication channels",
  "Launch with review gates, evals, cost tracking, and a weekly improvement rhythm",
];

const outputs = [
  "Workflow map",
  "ROI-ranked workflows",
  "Firm context layer",
  "Production workflow",
  "Evals + feedback",
];

export default function Offer() {
  return (
    <section id="offer" className="border-t border-border bg-foreground py-24 lg:py-32 grid-bg relative overflow-hidden">
      <style jsx>{`
        section { --grid-line: rgba(255, 255, 255, 0.04); }
      `}</style>
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection>
            <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
              Core offer
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Identify the right opportunities, then build the agentic workflows.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
              We take a hands-on approach that prioritizes shipping outcomes
              and iterating fast. You get reliable AI systems, not slide decks.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {outputs.map((output) => (
                <span
                  key={output}
                  className="rounded-[3px] border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-white/45"
                >
                  {output}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[13px] font-semibold text-foreground transition-all duration-150 hover:bg-white/90"
            >
              Get Started
              <svg
                className="ml-2 h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <span className="status-dot live" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                    workflow_scope.md
                  </span>
                </div>
                <span className="font-mono text-[11px] text-white/25">
                  4 moves
                </span>
              </div>
              <div className="space-y-4">
                {sprintSteps.map((step, i) => (
                  <div key={step} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06] font-mono text-[10px] font-semibold text-white/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-white/65">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
