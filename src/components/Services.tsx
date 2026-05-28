"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    id: "01",
    title: "Workflow Map & Prioritization",
    description:
      "Map diligence, screening, portfolio monitoring, reporting, legal, and internal ops workflows. Identify where time, quality, and handoffs are leaking.",
    status: "live" as const,
  },
  {
    id: "02",
    title: "Firm Context Layer",
    description:
      "Turn templates, source docs, investment criteria, prior work, and review standards into structured context the workflow can use.",
    status: "live" as const,
  },
  {
    id: "03",
    title: "AI Workflow Buildout",
    description:
      "Build the UI, agent steps, deterministic automations, integrations, and Slack or email surfaces needed to run the workflow.",
    status: "live" as const,
  },
  {
    id: "04",
    title: "Evals & Improvement Loops",
    description:
      "Measure output quality, corrections, model choice, token spend, and user feedback so the system improves after launch.",
    status: "live" as const,
  },
  {
    id: "05",
    title: "Adoption & Operating Rhythm",
    description:
      "Define owners, review habits, escalation paths, and training so the workflow becomes part of how the firm works.",
    status: "live" as const,
  },
  {
    id: "06",
    title: "Model & Vendor Strategy",
    description:
      "Stay model-agnostic. Use the right model or tool for each task instead of locking the firm into one provider too early.",
    status: "live" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="annotation">Capabilities</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The pieces AI needs before it can do real work
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Useful AI workflows need more than prompts. They need context,
                system access, review gates, evals, and a team willing to keep
                improving the process.
              </p>
            </div>
            <span className="tag">
              <span className="status-dot live" />
              {services.filter((s) => s.status === "live").length} active
            </span>
          </div>
        </AnimatedSection>

        {/* Service list — modular rows with IDs */}
        <div className="mt-12 grid gap-0 border-t border-border">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border py-5 sm:items-center sm:gap-6 transition-colors duration-150 hover:bg-surface-alt/60 px-1 sm:px-2">
                {/* ID */}
                <span className="font-mono text-xs text-muted-light tabular-nums pt-0.5 sm:pt-0">
                  {service.id}
                </span>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <h3 className="text-[15px] font-semibold text-foreground min-w-[160px]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mt-1 sm:mt-0">
                    {service.description}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`tag ${
                    service.status === "live" ? "tag-active" : "tag-warning"
                  }`}
                >
                  <span
                    className={`status-dot ${service.status}`}
                  />
                  {service.status === "live" ? "live" : "coming soon"}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-border bg-surface-alt/60 p-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Looking for concrete examples?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Review the fund workflows we use as starting points for a first
                build.
              </p>
            </div>
            <Link
              href="/finance-workflows"
              className="inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-[13px] font-medium text-foreground transition-all duration-150 hover:border-border-strong hover:bg-surface-alt"
            >
              View workflow library
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
