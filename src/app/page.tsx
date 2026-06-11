import {
  ArrowRight,
  FileText,
  LayoutGrid,
  Lock,
  Radio,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";

import AgentCarousel from "./AgentCarousel";

const CLIENTS = [
  { name: "Selby Lane Capital", url: "https://selbylane.com/" },
  { name: "Resolute Ventures", url: "https://www.resolute.vc/" },
  { name: "Prehype Ventures", url: "https://prehype.com/" },
];

const WORKFLOWS = [
  {
    icon: FileText,
    name: "Investment Memo",
    body: "Extracts the data room, runs analysis, and drafts a firm-styled memo in ~30 minutes.",
    tags: ["Investment Team"],
  },
  {
    icon: Shield,
    name: "Legal Diligence",
    body: "Reads the legal data room, flags non-standard terms, and assembles an issues list against your fund's red lines.",
    tags: ["Legal"],
  },
  {
    icon: Radio,
    name: "Portfolio News Tracker",
    body: "Monitors portfolio news to keep your team and LPs up to date at all times.",
    tags: ["Investor Relations"],
  },
  {
    icon: Search,
    name: "Company Tear Sheets & Screeners",
    body: "Surfaces and ranks inbound and outbound deals against your fund's thesis and extracts key information for easy review.",
    tags: ["Investment Team"],
  },
  {
    icon: Sparkles,
    name: "Pre-meeting Briefs",
    body: "One-page briefs assembled from the CRM, prior notes, news, and the data room before the meeting starts.",
    tags: ["Investment Team", "Sales"],
  },
  {
    icon: LayoutGrid,
    name: "Portfolio Data Reconciliation",
    body: "Reconciles fund metrics across the data warehouse, GP reports, and the CRM until the numbers tie.",
    tags: ["Operations"],
  },
];

const PILLARS = [
  {
    n: "01",
    label: "Identify the problem",
    h: "Find the process worth automating",
    body: "We start by exploring the workflows across your organization to identify the highest-leverage opportunities. A good workflow is one that is performed regularly and has a consistent set of inputs (triggers) and outputs (actions).",
  },
  {
    n: "02",
    label: "Process mapping",
    h: "Map the workflow as it exists today",
    body: "We define how the work gets done today: a flow chart mapping out what steps happen in what order, what inputs and outputs are expected, and who is involved. This mapping becomes the SOP we use to build and train the agent.",
  },
  {
    n: "03",
    label: "Tribal knowledge",
    h: "Encode the context that the agent needs",
    body: "Connect CRMs, data warehouses, and inboxes via MCP. Embed reference docs, gold standards, and style guides. Document the unspoken rules that live in people's heads.",
  },
  {
    n: "04",
    label: "Learning loop",
    h: "Train the agent run over run",
    body: "We deploy all agents with a continuous learning system that aggregates human feedback, adversarial reviews to prevent hallucinations, and automated evals each run so the agent stops repeating the same mistakes. Your agents go from “new hire” to autopilot.",
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
            href="#engagements"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            How we work
          </a>
          <a
            href="#approach"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            Approach
          </a>
          <a
            href="#security"
            className="text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-strong)]"
          >
            Security
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
              AI agents for your investment firm
            </h1>

            <p className="lead mt-7 max-w-[600px]">
              We build and deploy production-grade AI agents that create
              operating leverage for investment firms. Live in weeks,
              integrated into the tools your team already uses.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="lui-btn lui-btn--primary lui-btn--lg"
              >
                Work with us
                <ArrowRight size={18} strokeWidth={1.75} />
              </a>
              <a href="#workflows" className="lui-btn lui-btn--secondary lui-btn--lg">
                View our agents
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:gap-8">
              <div className="lui-stat">
                <span className="lui-stat__label">Memo turnaround</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>30 min</span>
                <span className="lui-stat__delta lui-stat__delta--up">▼ from 4 days</span>
              </div>
              <div className="lui-stat">
                <span className="lui-stat__label">Memos per week</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>5×</span>
                <span className="lui-stat__delta lui-stat__delta--up">vs. without agent</span>
              </div>
              <div className="lui-stat col-span-2 sm:col-span-1">
                <span className="lui-stat__label">Data extraction</span>
                <span className="lui-stat__value" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>&gt;99%</span>
                <span className="lui-stat__delta lui-stat__delta--up">accuracy, first pass</span>
              </div>
            </div>
          </div>

          <AgentCarousel />
        </div>
      </div>
    </section>
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
          <span
            aria-hidden
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
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
              key={client.name}
              className="group flex items-center justify-center px-4 py-5 sm:py-3 sm:first:pl-0 sm:last:pr-0"
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[clamp(20px,2.2vw,28px)] transition-colors duration-150 group-hover:text-[var(--text-strong)]"
                style={{
                  color: "var(--text-body)",
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.1,
                }}
              >
                {client.name}
              </a>
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
            Put your firm&apos;s most tedious workflows on autopilot
          </h2>
          <p className="lead mt-6 max-w-[640px]">
            You shouldn&apos;t be paying investment analysts $200k+ a year to
            parse data rooms, copy-paste cells, and format charts. We deploy
            agents to offload these tasks so your team can focus on higher
            leverage work.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {WORKFLOWS.map(({ icon: Icon, name, body, tags }) => (
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
              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="lui-tag">{tag}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-12 text-center text-sm"
          style={{ color: "var(--text-faint)" }}
        >
          Need something else? We&apos;ll scope it.{" "}
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

const ENGAGEMENTS = [
  {
    label: "À la carte",
    title: "Pick a workflow",
    body: "Choose one or more agents to implement. We map the workflow, build the harness, and deploy in your environment.",
    meta: "~8 weeks · Fixed scope",
  },
  {
    label: "Embedded",
    title: "FDE inside your team",
    body: "A forward-deployed engineer embedded within your team. We'll drive your internal AI deployment across the board, without the overhead of hiring.",
    meta: "Quarterly · Renews",
  },
  {
    label: "Lomita OS",
    title: "Your own agentic platform",
    body: "Run your agentic workflows on top of our agentic platform: a customized full-stack application wired up with your firm's workflows, your firm's context, and MCP connections. Integrated evals, performance tuning, multi-player functionality, and scheduled tasks.",
    meta: "To scope",
  },
];

function Engagements() {
  return (
    <section
      id="engagements"
      className="section-y border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="font-mono-label">How we work</span>
          </span>
          <h2 className="sec-head mt-5">
            Three ways to engage
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-12">
          {ENGAGEMENTS.map((e) => (
            <li
              key={e.label}
              className="surface-card flex flex-col gap-4 p-6 transition-all duration-150 hover:border-[var(--border-strong)] sm:p-7"
            >
              <span
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                {e.label}
              </span>
              <h3
                className="font-display text-[22px] font-semibold leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--text-strong)",
                  letterSpacing: "-0.005em",
                }}
              >
                {e.title}
              </h3>
              <p
                className="text-[15px] leading-[1.6]"
                style={{ color: "var(--text-muted)" }}
              >
                {e.body}
              </p>
              <span
                className="font-mono-label mt-auto pt-2"
                style={{
                  color: "var(--text-faint)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {e.meta}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="mt-12 text-center text-sm"
          style={{ color: "var(--text-faint)" }}
        >
          Something else in mind?{" "}
          <a
            href="#cta"
            className="underline-offset-4 transition-colors hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Tell us what you&apos;re trying to build
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
            <span className="font-mono-label">From prototype to production</span>
          </span>
          <h2 className="sec-head mt-5">
            Friction-free finance agents
          </h2>
          <p className="lead mt-6 max-w-[660px]">
            Off-the-shelf chatbots hallucinate, format inconsistently, and
            don&apos;t learn from their mistakes. We help you deploy the AI
            harness that gives the model everything it needs to do the job
            accurately and reliably.
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

      </div>
    </section>
  );
}

function Security() {
  return (
    <section
      id="security"
      className="section-y border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="font-mono-label">Security</span>
          </span>
          <h2 className="sec-head mt-5">Secure, by default</h2>
          <p className="lead mt-6 max-w-[660px]">
            Data stays on your machines or in your servers by default to avoid
            introducing any new attack vectors. We recommend running your
            agents on zero-retention models so your data stays yours.
          </p>
          <span
            className="mt-8 inline-flex items-center gap-2 text-sm"
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
              Deploy your fund&apos;s first agent
            </h2>
            <p className="lead mt-6">
              Tell us about the workflows eating your team&apos;s time. We&apos;ll
              map out a plan for launching a production-grade agent.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
            <a
              href="mailto:henry@lomita.ai?subject=Intro%20call"
              className="lui-btn lui-btn--primary lui-btn--lg w-full sm:w-auto"
            >
              Book an intro call
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a
              href="mailto:henry@lomita.ai"
              className="lui-btn lui-btn--ghost lui-btn--lg w-full sm:w-auto"
              style={{ justifyContent: "center" }}
            >
              henry@lomita.ai
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
                <a href="#engagements" className="hover:text-[var(--text-strong)] transition-colors">
                  How we work
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[var(--text-strong)] transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[var(--text-strong)] transition-colors">
                  Security
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
                  href="mailto:henry@lomita.ai"
                  className="hover:text-[var(--text-strong)] transition-colors"
                >
                  henry@lomita.ai
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
            AI agents for your investment firm
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
        <Engagements />
        <Approach />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
