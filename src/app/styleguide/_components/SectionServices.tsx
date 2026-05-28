import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

const services = [
  {
    id: "01",
    title: "AI Readiness Diagnostic",
    description:
      "Evaluate the firm's AI maturity across investment, operations, and portfolio companies. Identify the three highest-leverage opportunities for the next two quarters.",
  },
  {
    id: "02",
    title: "Workflow Implementation",
    description:
      "Deploy AI agents, automations, and workflows that compound. Built by senior operators, owned by your team.",
  },
  {
    id: "03",
    title: "Portfolio Upskilling",
    description:
      "Custom training programs and knowledge bases for GPs and portfolio leadership. Translate AI fluency into operating leverage.",
  },
];

export default function SectionServices({ direction }: Props) {
  const { key } = direction;

  return (
    <section
      style={{
        padding: "64px 24px",
        borderTop: "1px solid var(--sg-rule)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <span className="sg-eyebrow">§ 05 · Services</span>
            <h2
              className="sg-h2"
              style={{ marginTop: 8, fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
            >
              {key === "salon"
                ? "Practice Areas"
                : key === "atelier"
                ? "Plates · Lines of Practice"
                : "What we do"}
            </h2>
          </div>
          <span className="sg-tag sg-tag-accent">
            <span className="sg-dot" />
            {services.length} active
          </span>
        </header>

        <div
          style={{
            marginTop: 36,
            borderTop: "1px solid var(--sg-rule)",
          }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: 24,
                padding: "24px 0",
                borderBottom: "1px solid var(--sg-rule)",
              }}
            >
              <div
                className="sg-mono"
                style={{
                  fontSize: key === "atelier" ? 18 : 14,
                  letterSpacing: "0.08em",
                  color: "var(--sg-accent)",
                  fontFamily:
                    key === "atelier" ? "var(--sg-display)" : "var(--sg-mono)",
                  fontStyle: key === "atelier" ? "italic" : "normal",
                  fontWeight: 600,
                }}
              >
                {key === "atelier" ? `Fig. ${s.id}` : s.id}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(160px, 220px) 1fr",
                  gap: 24,
                  alignItems: "baseline",
                }}
              >
                <h3
                  className="sg-h3"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    color: "var(--sg-ink)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily:
                      key === "current" ? "var(--sg-sans)" : "var(--sg-serif)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--sg-muted)",
                    margin: 0,
                  }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
