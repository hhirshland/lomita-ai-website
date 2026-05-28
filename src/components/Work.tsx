"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const proofPoints = [
  "Investment memo generation",
  "Portfolio news monitoring",
  "Screening notes from fund materials",
  "Human review gates",
  "Scheduled runs",
  "Source links and version history",
  "Feedback loops",
  "Cost and token visibility",
];

const workflows = [
  {
    title: "Investment Memo Generation",
    description:
      "Move from raw data-room materials to validated analysis and first-draft memo outputs, with review gates between each phase.",
    status: "live",
  },
  {
    title: "Portfolio News Tracking",
    description:
      "Monitor portfolio companies and funds for relevant signals, dedupe stories, rank exposure, and deliver scheduled digests.",
    status: "live",
  },
  {
    title: "Investment Screeners",
    description:
      "Convert pitch decks and fund materials into structured screening notes with searchable history and editable outputs.",
    status: "live",
  },
  {
    title: "Legal Diligence",
    description:
      "Extract and compare key terms from LPAs, side letters, and subscription docs so counsel and investment teams start from a cleaner first pass.",
    status: "in build",
  },
  {
    title: "Meeting Prep",
    description:
      "Pull CRM notes, prior materials, and fund context into briefing notes before GP, LP, and portfolio conversations.",
    status: "in build",
  },
  {
    title: "Custom Fund Ops",
    description:
      "Quarterly reconciliation, AGM notes, IC prep, reporting, or the next workflow with enough frequency and pain.",
    status: "custom",
  },
];

const pipeline = [
  "Extract",
  "Validate",
  "Master sheet",
  "Quant analysis",
  "Memo",
];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-border bg-surface-alt py-24 lg:py-32 grid-bg-dense"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="annotation">Proof</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The work is already live at Selby Lane
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                For Selby Lane, a fund-of-funds, we built an AI operating layer
                around real investment workflows. The important part is not the
                demo. It is the harness around context, review, telemetry, and
                iteration.
              </p>
            </div>
            <span className="annotation-accent">case study</span>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <div className="grid gap-0 border-t border-border">
              {proofPoints.map((point, i) => (
                <div
                  key={point}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-4"
                >
                  <span className="font-mono text-xs tabular-nums text-muted-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-border bg-surface-alt/70 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="status-dot live" />
                  <span className="font-mono text-[11px] text-muted">
                    selby_ai_harness
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted-light">
                  sanitized view
                </span>
              </div>

              <div className="p-5">
                <div className="rounded-md border border-border bg-surface-alt/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">
                      Investment memo run
                    </h3>
                    <span className="tag tag-active">
                      <span className="status-dot live" />
                      active
                    </span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-5">
                    {pipeline.map((step, i) => (
                      <div
                        key={step}
                        className="rounded-md border border-border bg-surface px-3 py-2"
                      >
                        <div className="font-mono text-[10px] text-muted-light">
                          Phase {i + 1}
                        </div>
                        <div className="mt-1 text-xs font-medium text-foreground">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-surface p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground">
                        Portfolio news
                      </h3>
                      <span className="font-mono text-[10px] text-muted-light">
                        scheduled
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Deduped stories, source links, fund exposure, priority
                      scores, and thumbs-up/down feedback to tune relevance.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-surface p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground">
                        Run telemetry
                      </h3>
                      <span className="font-mono text-[10px] text-muted-light">
                        auditable
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Model, token usage, cost, corrections, artifacts, and
                      version history are visible to the team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, i) => (
            <AnimatedSection key={workflow.title} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:border-border-strong hover:shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {workflow.title}
                  </h3>
                  <span
                    className={`tag ${
                      workflow.status === "live" ? "tag-active" : "tag-warning"
                    }`}
                  >
                    <span
                      className={`status-dot ${
                        workflow.status === "live" ? "live" : "pending"
                      }`}
                    />
                    {workflow.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {workflow.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
