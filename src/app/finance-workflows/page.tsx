"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

type WorkflowStatus = "live" | "in build" | "custom";

type Workflow = {
  title: string;
  type: string;
  tags: string[];
  description: string;
  status: WorkflowStatus;
  icon:
    | "fileText"
    | "newspaper"
    | "clipboardCheck"
    | "scale"
    | "handshake"
    | "spreadsheet"
    | "notebook"
    | "presentation";
};

const workflows: Workflow[] = [
  {
    title: "Investment Memo Generation",
    type: "Memo Workflow",
    tags: ["5-phase pipeline", "Human review", "Cost tracking", "Artifacts"],
    description:
      "Run a GP fund through extract, validate, master spreadsheet, quant analysis, and memo drafting. Each phase has review gates, source artifacts, usage tracking, and correction capture.",
    status: "live",
    icon: "fileText",
  },
  {
    title: "Portfolio News Tracking",
    type: "News Workflow",
    tags: ["Scheduled runs", "Email digests", "Fund exposure", "Ratings"],
    description:
      "Search the web for funding rounds, customer wins, and portfolio catalysts. Stories are deduped, ranked, linked to fund exposure, and rated so future runs learn what matters.",
    status: "live",
    icon: "newspaper",
  },
  {
    title: "Investment Screener",
    type: "Screening Workflow",
    tags: ["PDF input", "DOCX output", "Version history", "Edit loop"],
    description:
      "Drop in a venture or PE fund deck and generate a one-page screening note covering strategy, team, track record, current fundraise, and follow-up questions.",
    status: "live",
    icon: "clipboardCheck",
  },
  {
    title: "Legal Diligence",
    type: "Diligence Workflow",
    tags: ["LPAs", "Side letters", "Subscription docs", "Benchmarks"],
    description:
      "Review fund legal documents for key terms, off-market provisions, risk flags, and comparisons against a benchmark of prior diligence.",
    status: "in build",
    icon: "scale",
  },
  {
    title: "Quarterly Reconciliation",
    type: "Ops Workflow",
    tags: ["Quarterly reports", "Restatements", "Variance checks"],
    description:
      "Maintain a rolling repository of manager quarterly data, validate each new submission against prior quarters, and flag unexpected restatements or inconsistencies.",
    status: "in build",
    icon: "spreadsheet",
  },
  {
    title: "AGM Notes",
    type: "Knowledge Workflow",
    tags: ["Meeting notes", "Follow-ups", "Portfolio updates"],
    description:
      "Capture and summarize annual general meeting notes with key takeaways, action items, portfolio updates, and manager-level history.",
    status: "in build",
    icon: "notebook",
  },
  {
    title: "GP Meeting Prep",
    type: "Briefing Workflow",
    tags: ["Dynamo", "Relationship history", "Open diligence"],
    description:
      "Pull manager context from CRM and prior diligence to generate briefing notes, recent interactions, open items, and tailored talking points.",
    status: "in build",
    icon: "handshake",
  },
  {
    title: "Investor Meeting Prep",
    type: "IR Workflow",
    tags: ["HubSpot", "Commitments", "Talking points"],
    description:
      "Generate LP meeting briefings from CRM context, relationship history, commitments, open questions, and relevant portfolio updates.",
    status: "custom",
    icon: "presentation",
  },
];

function WorkflowIcon({ icon }: { icon: Workflow["icon"] }) {
  const common = {
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
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
    case "clipboardCheck":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M5 21h14" />
          <path d="M5 7h14" />
          <path d="M8 7l-3 7a3 3 0 006 0L8 7z" />
          <path d="M16 7l-3 7a3 3 0 006 0l-3-7z" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M11 17l2 2a1 1 0 001.41 0l4-4a2 2 0 00.59-1.41V11a1 1 0 00-.29-.71L15 7l-2 2-2-2-3 3" />
          <path d="M3 11l3-3 3 3" />
          <path d="M9 14l3 3" />
        </svg>
      );
    case "spreadsheet":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M4 9h16M4 15h16M10 9v12M15 9v12" />
        </svg>
      );
    case "notebook":
      return (
        <svg {...common}>
          <path d="M7 3h11a2 2 0 012 2v14a2 2 0 01-2 2H7a3 3 0 01-3-3V6a3 3 0 013-3z" />
          <path d="M8 7h7M8 11h8M8 15h5M4 6h3M4 18h3" />
        </svg>
      );
    case "presentation":
      return (
        <svg {...common}>
          <path d="M4 4h16v11H4z" />
          <path d="M12 15v5M8 20h8M8 8h8M8 11h4" />
        </svg>
      );
  }
}

export default function FinanceWorkflowsPage() {
  const liveCount = workflows.filter((w) => w.status === "live").length;

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[54vh] items-center overflow-hidden pt-14 grid-bg">
          <div className="absolute bottom-0 top-0 left-6 w-px bg-border-strong/40 lg:left-12" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl pl-0 lg:pl-6">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="tag tag-active">
                  <span className="status-dot live" />
                  {liveCount} live workflows · {workflows.length - liveCount} expandable
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
              >
                Workflow patterns for
                <br />
                <span className="hand-note">investment teams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted"
              >
                These are the fund workflows we use as starting points. Each one
                is customized to your templates, systems, review habits, and
                investment context.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-[13px] font-medium text-white transition-all duration-150 hover:bg-primary-light"
                >
                  Get Started
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-6 py-3 text-[13px] font-medium text-foreground transition-all duration-150 hover:border-border-strong hover:bg-surface-alt"
                >
                  See Selby Lane proof
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {workflows.map((workflow, i) => (
                <AnimatedSection
                  key={workflow.title}
                  delay={i * 0.06}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:border-border-strong hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-border bg-surface-alt/50 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`status-dot ${
                            workflow.status === "live" ? "live" : "pending"
                          }`}
                        />
                        <span className="font-mono text-[11px] text-muted">
                          {workflow.type}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-muted-light">
                        {workflow.status}
                      </span>
                    </div>

                    <div className="flex-1 p-5">
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
                      <p className="mt-3 text-sm leading-relaxed text-muted">
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
              <div className="relative mt-20 overflow-hidden rounded-lg border border-border bg-foreground">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 px-8 py-14 text-center sm:px-14 sm:py-16">
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                    Not seeing your workflow?
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    The best first build is usually the workflow your team already hates.
                  </h3>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/50">
                    We use these patterns as accelerators, then customize around
                    your firm context, data sources, model choices, and review
                    standards.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[13px] font-semibold text-foreground transition-all duration-150 hover:bg-white/90"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
