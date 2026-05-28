"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Map",
    description:
      "Follow the work from intake to output across email, docs, CRM, data rooms, spreadsheets, and meetings. Find the manual drag.",
  },
  {
    number: "02",
    title: "Choose",
    description:
      "Score each workflow by frequency, effort, financial impact, data readiness, risk, and adoption burden. Pick the first build where value can show up quickly.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Create the context layer, agent steps, UI, deterministic automations, integrations, and delivery surface for the team.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Run in shadow or supervised mode. Capture corrections, compare models, track cost, and define the acceptance bar.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Use feedback, saved runs, evals, and usage data to improve the workflow before moving to the next one.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="py-24 lg:py-32 border-t border-border bg-surface-alt grid-bg-dense"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="annotation">Process</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Workflow by workflow, without disrupting the firm.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                We do not force a migration or try to automate everything at
                once. We build on the systems already in place, prove one
                workflow, then use the pattern for the next.
              </p>
            </div>
            <span className="tag tag-active">
              <span className="status-dot live" />
              5 steps
            </span>
          </div>
        </AnimatedSection>

        <div className="mt-14">
          {/* Progress rail */}
          <div className="hidden sm:flex items-center gap-0 mb-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center flex-1 last:flex-none">
                <button
                  onClick={() => setActive(i)}
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    i === active
                      ? "border-teal bg-teal text-white shadow-[0_0_12px_rgba(13,147,115,0.3)]"
                      : i < active
                      ? "border-teal bg-teal-muted text-teal"
                      : "border-border bg-surface text-muted-light hover:border-muted hover:text-foreground"
                  }`}
                >
                  {step.number}
                </button>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px mx-2 relative">
                    <div className="absolute inset-0 bg-border" />
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-teal"
                      initial={false}
                      animate={{ width: i < active ? "100%" : "0%" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile step selector */}
          <div className="flex sm:hidden gap-2 mb-6 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                className={`shrink-0 px-3 py-1.5 rounded-md font-mono text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                  i === active
                    ? "border-teal bg-teal-muted text-teal"
                    : "border-border bg-surface text-muted-light"
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          {/* Active step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-border bg-surface p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-muted font-mono text-sm font-bold text-teal">
                  {steps[active].number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {steps[active].title}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {steps[active].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="font-mono text-xs text-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  &larr; prev
                </button>
                <span className="font-mono text-[10px] text-muted-light tracking-wider uppercase">
                  Step {active + 1} of {steps.length}
                </span>
                <button
                  onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                  disabled={active === steps.length - 1}
                  className="font-mono text-xs text-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  next &rarr;
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
