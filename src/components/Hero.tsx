"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-14 grid-bg">
      {/* Corner annotation */}
      <div className="absolute top-20 right-6 lg:right-12 font-mono text-[11px] text-muted-light hidden sm:block">
        2026
      </div>

      {/* Grid accent line - left */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-12 w-px bg-border-strong/40" />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28 w-full">
        <div className="max-w-3xl pl-0 lg:pl-6">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
          >
            AI transformation
            <br />
            <span className="hand-note">for your firm</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted"
          >
            Hyperactive partners with investment firms to provide strategic
            input and hands-on deployment of AI systems. We start by deeply
            understanding your workflows and key business context, then build
            agentic systems that help your team spend less time on manual work
            and more time on judgment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-[13px] font-medium text-white transition-all duration-150 hover:bg-primary-light"
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
            <a
              href="#example-workflows"
              className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-6 py-3 text-[13px] font-medium text-foreground transition-all duration-150 hover:bg-surface-alt hover:border-border-strong"
            >
              See example workflows
            </a>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="mt-20 lg:mt-28 border-t border-border pt-8 lg:pl-6"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Map internal processes",
                description:
                  "We start by understanding your existing workflows, then encode the domain knowledge and context embedded within them.",
              },
              {
                title: "Deploy agentic workflows",
                description:
                  "We use that context as the harness to ship AI agents trained to do specific jobs well, keeping humans in the loop where judgment matters.",
              },
              {
                title: "Improve with every run",
                description:
                  "We implement agents to be self-improving. Each run provides learning and feedback so performance improves over time.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.6 + i * 0.08 }}
                className="group rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:border-border-strong hover:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-muted font-mono text-[10px] font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
