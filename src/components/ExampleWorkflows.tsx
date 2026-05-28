"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

type WorkflowIcon =
  | "search"
  | "users"
  | "clipboard"
  | "fileText"
  | "newspaper"
  | "messageQuestion";

type Workflow = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  icon: WorkflowIcon;
};

const workflows: Workflow[] = [
  {
    title: "Deal sourcing",
    type: "Sourcing workflow",
    description:
      "Continuously scan companies, markets, and signals against your fund thesis so the right opportunities reach the team earlier.",
    tags: ["Fund thesis", "Market scan", "Target lists"],
    icon: "search",
  },
  {
    title: "LP sourcing",
    type: "IR workflow",
    description:
      "Build and prioritize LP prospect lists using fit, mandate, relationship context, check size, and timing.",
    tags: ["LP targets", "Fit scoring", "Outreach prep"],
    icon: "users",
  },
  {
    title: "Investment screener",
    type: "Screening workflow",
    description:
      "Turn inbound decks and materials into a concise one-pager with the key facts, risks, fit, and follow-up questions.",
    tags: ["Inbound review", "One-pager", "Decision support"],
    icon: "clipboard",
  },
  {
    title: "Investment memo generation",
    type: "Memo workflow",
    description:
      "Move data-room materials through your firm's memo process: extraction, fact checks, analysis, drafting, and review.",
    tags: ["Data room", "Memo draft", "Review gates"],
    icon: "fileText",
  },
  {
    title: "IC meeting Q&A",
    type: "IC workflow",
    description:
      "Answer IC questions by pulling from diligence materials, memos, data rooms, and prior analysis with source-backed context.",
    tags: ["IC support", "Source-backed answers", "Fast follow-up"],
    icon: "messageQuestion",
  },
  {
    title: "Portfolio news tracking",
    type: "Portfolio workflow",
    description:
      "Monitor portfolio companies for funding rounds, customer wins, hiring, partnerships, and market catalysts your IR team can use.",
    tags: ["Web research", "Catalyst tracking", "IR material"],
    icon: "newspaper",
  },
];

function WorkflowIcon({ icon }: { icon: WorkflowIcon }) {
  const common = {
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
          <path d="M8.5 11h5" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <circle cx="9.5" cy="7" r="4" />
          <path d="M22 20v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "fileText":
      return (
        <svg {...common}>
          <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M14 3v6h6" />
          <path d="M8 13h8M8 17h8M8 9h2" />
        </svg>
      );
    case "newspaper":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 012-2h11a2 2 0 012 2v13a2 2 0 002 2H6a2 2 0 01-2-2V5z" />
          <path d="M19 8h2v10a2 2 0 01-2 2" />
          <path d="M8 7h7M8 11h7M8 15h4" />
        </svg>
      );
    case "messageQuestion":
      return (
        <svg {...common}>
          <path d="M7.9 20A9 9 0 104 16.1L2 22z" />
          <path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      );
  }
}

export default function ExampleWorkflows() {
  return (
    <section
      id="example-workflows"
      className="border-t border-border bg-surface-alt py-24 lg:py-32 grid-bg-dense"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div>
            <div>
              <span className="annotation">Example workflows</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Where we provide value
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Explore our menu of agentic workflows to get started, or
                suggest your own based on your firm&apos;s needs.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, i) => (
            <AnimatedSection key={workflow.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:border-border-strong hover:shadow-md"
              >
                <div className="flex items-center justify-between border-b border-border bg-surface-alt/50 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="status-dot live" />
                    <span className="font-mono text-[11px] text-muted">
                      {workflow.type}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-light">
                    example
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-alt text-foreground">
                      <span className="h-5 w-5">
                        <WorkflowIcon icon={workflow.icon} />
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {workflow.title}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {workflow.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {workflow.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[3px] border border-border bg-surface-alt px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 flex justify-center">
            <Link
              href="/finance-workflows"
              className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-2.5 text-[13px] font-medium text-foreground transition-all duration-150 hover:border-border-strong hover:bg-surface-alt"
            >
              See more workflows
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
