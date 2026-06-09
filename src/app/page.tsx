const CLIENTS = ["Selby Lane Capital", "Resolute Ventures", "Prehype Ventures"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="lui-grid lui-grid--fade pointer-events-none absolute inset-0"
        aria-hidden
      />

      <header className="relative z-10 border-b border-[var(--border)]">
        <div className="mx-auto flex h-16 w-full max-w-[var(--container-max)] items-center justify-between px-8">
          <a href="/" aria-label="Lomita AI" className="inline-flex items-center">
            <span className="lui-wordmark" style={{ fontSize: 21 }}>
              Lomita<sup>AI</sup>
            </span>
          </a>
          <a
            href="mailto:hello@lomita.ai"
            className="lui-btn lui-btn--primary lui-btn--sm"
          >
            Work with us
          </a>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto w-full max-w-[var(--container-max)] px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <span className="eyebrow">
            <span className="font-mono-label">Applied AI</span>
          </span>

          <h1
            className="mt-6 max-w-[16ch] text-[clamp(40px,6vw,72px)] leading-[1.04] tracking-[-0.01em]"
            style={{ color: "var(--text-strong)" }}
          >
            AI agents for your investment firm.
          </h1>

          <p
            className="mt-6 max-w-[640px] text-[19px] leading-[1.6]"
            style={{ color: "var(--text-muted)" }}
          >
            We build and deploy production-grade AI agents that create value for
            investment firms. Get in touch to learn how your firm can be leveraging
            AI <span style={{ color: "var(--text-strong)" }}>today</span>.
          </p>

          <div className="mt-9">
            <a
              href="mailto:hello@lomita.ai"
              className="lui-btn lui-btn--primary lui-btn--lg"
            >
              Work with us
            </a>
          </div>
        </div>
      </section>

      <section
        id="trusted-by"
        className="relative z-10 border-t border-[var(--border)]"
        style={{ background: "var(--surface-well)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-max)] px-8 py-16">
          <div className="flex items-center gap-4">
            <span
              className="font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              Trusted by
            </span>
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ background: "var(--border)" }}
            />
          </div>

          <ul className="mt-10 grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="group flex items-center justify-center px-6 py-6 transition-colors duration-150 first:pl-0 last:pr-0 sm:py-4"
              >
                <span
                  className="text-center text-[clamp(20px,2.2vw,26px)] transition-colors duration-150 group-hover:text-[var(--text-strong)]"
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

      <footer
        className="relative z-10 border-t border-[var(--border)]"
        style={{ background: "var(--surface-well)" }}
      >
        <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-6 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" aria-label="Lomita AI" className="inline-flex items-center">
            <span className="lui-wordmark" style={{ fontSize: 18 }}>
              Lomita<sup>AI</sup>
            </span>
          </a>
          <div
            className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8"
            style={{ color: "var(--text-faint)" }}
          >
            <a
              href="mailto:hello@lomita.ai"
              className="font-mono-label hover:text-[var(--text-strong)] transition-colors"
            >
              hello@lomita.ai
            </a>
            <span
              className="font-mono-label"
              style={{ color: "var(--text-faint)" }}
            >
              © 2026 Lomita AI
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
