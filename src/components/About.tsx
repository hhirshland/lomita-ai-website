"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    id: "01",
    title: "Engineering that understands operations",
    description:
      "We turn ambiguous fund processes into interfaces, data flows, model calls, review states, and shipping plans.",
  },
  {
    id: "02",
    title: "Fund workflow fluency",
    description:
      "Memos, screeners, portfolio monitoring, diligence, meeting prep, and CRM context are the starting vocabulary, not a discovery surprise.",
  },
  {
    id: "03",
    title: "Human review stays central",
    description:
      "High-risk decisions stay with people. The system handles drafts, research, checks, routing, and context assembly.",
  },
  {
    id: "04",
    title: "Built on your stack",
    description:
      "We integrate with the tools your team already uses instead of forcing a migration before value is proven.",
  },
  {
    id: "05",
    title: "Model agnostic by design",
    description:
      "Each step can use the right model for the job, cost profile, and quality bar. The harness is more important than any single provider.",
  },
  {
    id: "06",
    title: "Improves from use",
    description:
      "Feedback, evals, saved runs, and house style turn one workflow into reusable institutional knowledge.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Left column — narrative */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="annotation">About</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A technical partner for
                <br />
                <span className="text-muted">operational redesign.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Most firms do not need another AI strategy deck. They need
                someone to understand the work, decide where AI belongs, and
                build the system carefully enough that people trust it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Hyperactive brings product judgment and engineering execution.
                We embed with your team, ship in controlled increments, and
                keep the system improving after launch.
              </p>

              {/* Highlighted callout */}
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className="mt-8 flex items-start gap-3 rounded-md border-l-2 border-teal bg-teal-muted px-4 py-3"
              >
                <svg
                  className="h-4 w-4 text-teal mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-foreground">
                  The deliverable is not a recommendation. It is a workflow
                  running inside the firm.
                </span>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right column — differentiator grid with IDs */}
          <div className="lg:col-span-3">
            <div className="grid gap-0 border-t border-border">
              {differentiators.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.06}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-4 sm:py-5 group transition-colors duration-150 hover:bg-surface-alt/40 px-1">
                    <span className="font-mono text-xs text-muted-light tabular-nums pt-0.5">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
