import {
  ArrowRight,
  Check,
  FileText,
  GitBranch,
  LayoutGrid,
  Loader,
  Lock,
  Radio,
  Search,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const CLIENTS = ["Selby Lane Capital", "Resolute Ventures", "Prehype Ventures"];

const WORKFLOWS = [
  {
    icon: FileText,
    name: "Investment Memo Agent",
    body: "Extracts the data room, validates against source documents, runs analysis, and drafts a firm-styled memo. 4 days → 30 minutes.",
    tag: "Flagship",
    accent: true,
  },
  {
    icon: Search,
    name: "Opportunity Screener",
    body: "Surfaces and ranks inbound and outbound deals against your thesis, with the rationale auditable end-to-end.",
    tag: "Pipeline",
  },
  {
    icon: Shield,
    name: "Legal Diligence",
    body: "Reads the legal data room, flags non-standard terms, and assembles an issues list against your fund's red lines.",
    tag: "Diligence",
  },
  {
    icon: Radio,
    name: "Portfolio News Tracker",
    body: "Monitors portfolio companies across sources and surfaces what changed — with citations, not summaries.",
    tag: "Monitoring",
  },
  {
    icon: LayoutGrid,
    name: "Portfolio Data Reconciliation",
    body: "Reconciles fund metrics across the data warehouse, GP reports, and the CRM until the numbers tie.",
    tag: "Operations",
  },
  {
    icon: Sparkles,
    name: "Pre-meeting Briefs",
    body: "One-page briefs assembled from the CRM, prior notes, news, and the data room before the meeting starts.",
    tag: "Workflow",
  },
];

const PILLARS = [
  {
    n: "01",
    label: "Process mapping",
    h: "Map the workflow as it exists today",
    body: "What steps happen in what order, with which inputs and outputs, and who is involved. The map becomes the SOP we hand the agent.",
  },
  {
    n: "02",
    label: "Tribal knowledge",
    h: "Encode the context that lives in people's heads",
    body: "Connect CRMs, data warehouses, and inboxes over MCP. Embed reference docs and style guides. Document the unspoken rules.",
  },
  {
    n: "03",
    label: "Feedback loop",
    h: "Train the agent run over run",
    body: "A continuous-learning system aggregates human corrections so the agent stops repeating the same mistakes. Without this, runs stay stuck in the teaching phase forever.",
  },
  {
    n: "04",
    label: "Accuracy & security",
    h: "Source-linked, adversarially reviewed, private by default",
    body: "Every metric links to its source. Separate agents cross-check until conflicts resolve. Data stays on your machines, on zero-retention models.",
  },
];

function Header() {
  return (
    <header className="relative z-30 border-b border-[var(--border)] backdrop-blur-md sticky top-0"
      style={{ background: "color-mix(in srgb, var(--background) 82%, transparent)" }}
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container-max)] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="/" aria-label="Lomita AI" className="inline-flex items-center">
          <span className="lui-wordmark" style={{ fontSize: 21 }}>
            Lomita<sup>AI</sup>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#workflows"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            Workflows
          </a>
          <a
            href="#approach"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            Approach
          </a>
          <a
            href="#case-study"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            Case study
          </a>
        </nav>

        <a
          href="#cta"
          className="lui-btn lui-btn--primary lui-btn--sm"
        >
          Work with us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="lui-grid lui-grid--hero pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <span className="eyebrow">
              <span className="font-mono-label">Applied AI</span>
            </span>

            <h1 className="headline mt-6 max-w-[20ch]">
              AI agents for your investment firm.
            </h1>

            <p className="lead mt-6 max-w-[600px]">
              We build and deploy production-grade AI agents that create
              operating leverage for investment firms — wired into the tools
              your team already uses, live in weeks, not quarters. We stay
              until it works.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="lui-btn lui-btn--primary lui-btn--lg"
              >
                Work with us
                <ArrowRight size={18} strokeWidth={1.75} />
              </a>
              <a href="#case-study" className="lui-btn lui-btn--secondary lui-btn--lg">
                Read the Selby Lane case study
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:gap-8">
              <div className="lui-stat">
                <span className="lui-stat__label">Time to memo</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>30 min</span>
                <span className="lui-stat__delta lui-stat__delta--up">▲ from 4 days</span>
              </div>
              <div className="lui-stat">
                <span className="lui-stat__label">Coverage gain</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>5×</span>
                <span className="lui-stat__delta lui-stat__delta--up">▲ opportunities</span>
              </div>
              <div className="lui-stat col-span-2 sm:col-span-1">
                <span className="lui-stat__label">Metrics source-linked</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>100%</span>
                <span className="lui-stat__delta lui-stat__delta--flat">— every figure</span>
              </div>
            </div>
          </div>

          <RunPanel />
        </div>
      </div>
    </section>
  );
}

function RunPanel() {
  return (
    <div className="runpanel w-full">
      <div className="runpanel__bar">
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__dot" />
        <span className="runpanel__title">investment-memo-agent · run #1184</span>
        <span className="lui-badge lui-badge--accent ml-auto">
          <span className="lui-badge__dot" />
          Running
        </span>
      </div>

      <div className="runpanel__row">
        <span
          className="runpanel__ic"
          style={{ background: "var(--positive-wash)", color: "var(--positive-400)" }}
        >
          <Check size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t">
          <b>Extract</b> · 142 figures from data room
        </span>
        <span className="runpanel__meta">done</span>
      </div>

      <div className="runpanel__row">
        <span
          className="runpanel__ic"
          style={{ background: "var(--positive-wash)", color: "var(--positive-400)" }}
        >
          <Check size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t">
          <b>Validate</b> · cross-referenced 9 sources
        </span>
        <span className="runpanel__meta">done</span>
      </div>

      <div className="runpanel__row">
        <span
          className="runpanel__ic runpanel__pulse"
          style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
        >
          <Loader size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t">
          <b>Analyze</b> · building charts & tables
        </span>
        <span className="runpanel__meta">02:14</span>
      </div>

      <div className="runpanel__row">
        <span
          className="runpanel__ic"
          style={{ background: "var(--surface-alt)", color: "var(--text-faint)" }}
        >
          <FileText size={15} strokeWidth={2} />
        </span>
        <span className="runpanel__t" style={{ color: "var(--text-faint)" }}>
          <b style={{ color: "var(--text-muted)" }}>Draft memo</b> · firm style guide
        </span>
        <span className="runpanel__meta">queued</span>
      </div>
    </div>
  );
}

function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative border-y border-[var(--border)]"
      style={{ background: "var(--surface-well)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex items-center gap-4">
          <span className="font-mono-label" style={{ color: "var(--text-faint)" }}>
            Trusted by
          </span>
          <span
            aria-hidden
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </div>

        <ul className="mt-8 grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-10">
          {CLIENTS.map((client) => (
            <li
              key={client}
              className="group flex items-center justify-center px-4 py-5 first:pl-0 last:pr-0 sm:py-3"
            >
              <span
                className="text-center text-[clamp(20px,2.2vw,28px)] transition-colors duration-150 group-hover:text-[var(--text-strong)]"
                style={{
                  color: "var(--text-body)",
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.1,
                }}
              >
                {client}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Workflows() {
  return (
    <section id="workflows" className="section-y relative">
      <div
        className="lui-grid lui-grid--soft pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="font-mono-label">Agentic Workflows</span>
          </span>
          <h2 className="sec-head mt-5">
            A workflow for every high-effort, low-judgement task on the desk.
          </h2>
          <p className="lead mt-5 max-w-[640px]">
            You shouldn&apos;t be paying investment analysts over $200k a year to parse
            data rooms, copy-paste cells, and format charts. We deploy agents that
            take over those steps so your team can diligence more opportunities,
            deeper.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {WORKFLOWS.map(({ icon: Icon, name, body, tag, accent }) => (
            <li
              key={name}
              className="group surface-card flex flex-col gap-4 p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--border-strong)] sm:p-6"
            >
              <span
                className="grid h-10 w-10 place-items-center"
                style={{
                  background: "var(--accent-wash)",
                  border: "1px solid var(--accent-line)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--accent)",
                }}
              >
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3
                  className="font-display text-[20px] font-semibold"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--text-strong)",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {name}
                </h3>
                <p
                  className="mt-2 text-sm leading-[1.6]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {body}
                </p>
              </div>
              <div className="mt-auto">
                <span className={`lui-tag ${accent ? "lui-tag--accent" : ""}`}>{tag}</span>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-8 text-sm"
          style={{ color: "var(--text-faint)" }}
        >
          Need something custom? We&apos;ll scope it.{" "}
          <a
            href="#cta"
            className="underline-offset-4 transition-colors hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      className="section-y border-t border-[var(--border)]"
      style={{ background: "var(--surface-well)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="font-mono-label">What production-grade takes</span>
          </span>
          <h2 className="sec-head mt-5">
            The harness that gives the model everything it needs to do the job.
          </h2>
          <p className="lead mt-5 max-w-[660px]">
            Off-the-shelf chat AI hallucinates, formats inconsistently, and never
            learns from its mistakes. Production grade looks like this.
          </p>
        </div>

        <ol className="hairline-grid mt-12 md:mt-14">
          {PILLARS.map((p) => (
            <li key={p.n} className="p-6 sm:p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {p.n} · {p.label}
                </span>
              </div>
              <h3
                className="mt-3 font-display text-[20px] font-semibold leading-[1.2] sm:text-[22px]"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--text-strong)",
                  letterSpacing: "-0.005em",
                }}
              >
                {p.h}
              </h3>
              <p
                className="mt-2 text-[15px] leading-[1.6]"
                style={{ color: "var(--text-muted)" }}
              >
                {p.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div
            className="surface-card p-5 sm:p-6"
            style={{ background: "var(--background)" }}
          >
            <span
              className="font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              Why chat AI falls short
            </span>
            <p
              className="mt-3 text-[15px] leading-[1.6]"
              style={{ color: "var(--text-muted)" }}
            >
              Out-of-the-box chat hallucinates, formats inconsistently, and never
              learns from corrections. Selby Lane tried it first — the output
              required so much editing that the team couldn&apos;t trust it. The
              harness above is what changed that.
            </p>
          </div>
          <span
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--text-faint)" }}
          >
            <Lock size={14} strokeWidth={1.75} />
            On your machines. Zero new attack vectors.
          </span>
        </div>
      </div>
    </section>
  );
}

function Beliefs() {
  return (
    <section
      className="border-t border-[var(--border)] relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div
        className="lui-grid lui-grid--soft pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <span
            className="font-mono-label whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            Our thesis
          </span>
          <div className="max-w-[760px]">
            <p
              className="font-display text-[clamp(26px,3.6vw,42px)] leading-[1.18]"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 600,
                color: "var(--text-strong)",
                letterSpacing: "-0.005em",
              }}
            >
              The best investment firms of this decade will be the ones that
              embrace applied AI.{" "}
              <span style={{ color: "var(--text-muted)" }}>
                The competitive edge isn&apos;t the model — it&apos;s the harness
                around it. The teams that build that edge now will compound it
                for the next twenty-five years.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section
      id="case-study"
      className="section-y border-t border-[var(--border)] relative overflow-hidden"
    >
      <div
        className="lui-grid lui-grid--soft pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">
              <span className="font-mono-label">Case study · Selby Lane</span>
            </span>
            <p
              className="mt-6 font-display text-[clamp(22px,3vw,32px)] leading-[1.3]"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 600,
                color: "var(--text-strong)",
                letterSpacing: "-0.005em",
              }}
            >
              &ldquo;What used to take four days of analyst work is now turned
              around in thirty minutes — and every figure ties back to a source
              document.&rdquo;
            </p>
            <p
              className="mt-5 font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              Investment Memo Agent · Deployed 2026
            </p>
            <a
              href="#cta"
              className="lui-btn lui-btn--secondary mt-7 inline-flex"
            >
              Talk to us about your workflow
              <ArrowRight size={16} strokeWidth={1.75} />
            </a>
          </div>

          <CaseStats />
        </div>
      </div>
    </section>
  );
}

type CaseStat = {
  label: string;
  value: string;
  delta: string;
  tone: "up" | "flat";
};

const CASE_STATS: CaseStat[] = [
  { label: "Turnaround", value: "30 min", delta: "▲ from 4 days", tone: "up" },
  { label: "Coverage gain", value: "5×", delta: "▲ opportunities", tone: "up" },
  { label: "Source-linked", value: "100%", delta: "— every figure", tone: "flat" },
  { label: "New attack vectors", value: "0", delta: "— by default", tone: "flat" },
];

function CaseStats() {
  return (
    <div className="hairline-grid hairline-grid--surface">
      {CASE_STATS.map((s) => (
        <div key={s.label} className="p-6 sm:p-7">
          <span className="lui-stat__label">{s.label}</span>
          <span
            className="mt-2 block font-display"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--text-strong)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            {s.value}
          </span>
          <span
            className={`mt-2 lui-stat__delta lui-stat__delta--${s.tone}`}
          >
            {s.delta}
          </span>
        </div>
      ))}
    </div>
  );
}

function CTA() {
  return (
    <section
      id="cta"
      className="border-t border-[var(--border)]"
      style={{ background: "var(--surface-well)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="font-mono-label">Get started</span>
            </span>
            <h2 className="sec-head mt-5">
              Deploy a similar agent for your fund.
            </h2>
            <p className="lead mt-4">
              Tell us about the workflow eating your team&apos;s time. We&apos;ll
              map it and show you what production-grade looks like — in a single
              working session.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
            <a
              href="mailto:hello@lomita.ai?subject=Working%20session"
              className="lui-btn lui-btn--primary lui-btn--lg w-full sm:w-auto"
            >
              Book a working session
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a
              href="mailto:hello@lomita.ai"
              className="lui-btn lui-btn--ghost lui-btn--lg w-full sm:w-auto"
              style={{ justifyContent: "center" }}
            >
              hello@lomita.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 pt-14 pb-10 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <a href="/" aria-label="Lomita AI" className="inline-flex items-center">
              <span className="lui-wordmark" style={{ fontSize: 21 }}>
                Lomita<sup>AI</sup>
              </span>
            </a>
            <p
              className="mt-4 max-w-[320px] text-[13px] leading-[1.6]"
              style={{ color: "var(--text-faint)" }}
            >
              An applied-AI firm partnering with investment funds to deploy
              production-grade agents.
            </p>
          </div>
          <div>
            <h5
              className="font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              Explore
            </h5>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>
                <a href="#workflows" className="hover:text-[var(--text-strong)] transition-colors">
                  Workflows
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[var(--text-strong)] transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-[var(--text-strong)] transition-colors">
                  Case study
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5
              className="font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              Contact
            </h5>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>
                <a
                  href="mailto:hello@lomita.ai"
                  className="hover:text-[var(--text-strong)] transition-colors"
                >
                  hello@lomita.ai
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="hover:text-[var(--text-strong)] transition-colors"
                >
                  Book a session
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center"
        >
          <span
            className="font-mono-label"
            style={{ color: "var(--text-faint)" }}
          >
            © 2026 Lomita AI
          </span>
          <span
            className="font-mono-label"
            style={{ color: "var(--text-faint)" }}
          >
            Built for the firms allocating to the AI era
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Workflows />
        <Approach />
        <CaseStudy />
        <Beliefs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
