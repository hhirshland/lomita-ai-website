"use client";

import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    title: "Manual work hides inside expensive roles",
    description:
      "Analysts are hired for judgment, but much of the week goes to searching, copying, formatting, reconciling, and first drafts.",
  },
  {
    title: "The context is everywhere",
    description:
      "Investment criteria, templates, prior memos, CRM notes, portfolio data, and tribal knowledge live across systems and people.",
  },
  {
    title: "Generic AI breaks at the workflow",
    description:
      "A chatbot can draft and summarize. It will not reliably run diligence, memo, screening, or monitoring workflows without process design and review gates.",
  },
  {
    title: "Strategy decks do not create leverage",
    description:
      "The firms that benefit from AI will not just study it. They will redesign workflows, deploy systems, and learn faster with each run.",
  },
];

export default function Pain() {
  return (
    <section id="pain" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="annotation">The problem</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              AI is here, but its impact isn&apos;t evenly distributed.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We help take your firm beyond demos and proof of concepts. We
              have the operating expertise to deploy agentic workflows that
              produce reliable, deterministic output and move the needle for
              your firm.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.06}>
              <div className="group h-full rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong hover:shadow-sm">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
