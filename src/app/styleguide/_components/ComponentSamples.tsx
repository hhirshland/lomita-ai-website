import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

export default function ComponentSamples({ direction }: Props) {
  return (
    <section
      style={{
        padding: "48px 24px",
        borderTop: "1px solid var(--sg-rule)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header>
          <span className="sg-eyebrow">§ 03 · Components</span>
          <h2 className="sg-h2" style={{ marginTop: 8, fontSize: "1.75rem" }}>
            Component vocabulary
          </h2>
        </header>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {/* Buttons */}
          <Card label="Buttons">
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <button className="sg-btn sg-btn-primary">
                Schedule a working session
                <span aria-hidden>→</span>
              </button>
              <button className="sg-btn sg-btn-secondary">
                Download pre-read (PDF)
              </button>
              <button className="sg-btn sg-btn-accent">
                Request access
              </button>
            </div>
          </Card>

          {/* Tags */}
          <Card label="Tags & Status">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="sg-tag sg-tag-accent">
                <span className="sg-dot" />
                Engagement live
              </span>
              <span className="sg-tag">
                <span
                  className="sg-dot"
                  style={{ background: "var(--sg-muted-light)" }}
                />
                Pre-IC
              </span>
              <span className="sg-tag">v1.1 · 2026</span>
              <span className="sg-tag">12 / 24 sessions</span>
            </div>
          </Card>

          {/* Callout */}
          <Card label="Callout">
            <div className="sg-callout">
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-accent)",
                  marginBottom: 6,
                }}
              >
                Working note
              </div>
              <div
                style={{
                  fontFamily: direction.bodyIsSerif
                    ? "var(--sg-serif)"
                    : "var(--sg-sans)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--sg-ink)",
                }}
              >
                You don&apos;t just get ideas. You get shipped outcomes,
                tied to measurable IRR-relevant metrics.
              </div>
            </div>
          </Card>

          {/* Stat block */}
          <Card label="Stat block">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {[
                { figure: "14", label: "days to ship" },
                { figure: "37%", label: "GP adoption" },
                { figure: "$1.2B", label: "AUM advised" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="sg-stat-figure">{s.figure}</div>
                  <div className="sg-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Divider treatment */}
          <Card label="Dividers">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  borderTop: "1px solid var(--sg-rule)",
                  paddingTop: 4,
                }}
              >
                <span
                  className="sg-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--sg-muted)",
                  }}
                >
                  hairline · 1px
                </span>
              </div>
              <div
                style={{
                  borderTop: "2px solid var(--sg-ink)",
                  paddingTop: 4,
                }}
              >
                <span
                  className="sg-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--sg-muted)",
                  }}
                >
                  rule · 2px
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--sg-accent)",
                  paddingTop: 4,
                }}
              >
                <span
                  className="sg-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--sg-accent)",
                  }}
                >
                  accent rule
                </span>
              </div>
            </div>
          </Card>

          {/* Badge / signature mark */}
          <Card label="Identity mark">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: direction.monogramCircular
                    ? "50%"
                    : "var(--sg-radius)",
                  background: "var(--sg-ink)",
                  color: "var(--sg-paper)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--sg-display)",
                  fontWeight: 700,
                  fontSize: 22,
                  fontStyle: direction.monogramCircular ? "italic" : "normal",
                  letterSpacing: "-0.02em",
                  border:
                    direction.key === "atelier"
                      ? "1px solid var(--sg-accent)"
                      : "none",
                }}
              >
                H
              </div>
              <div>
                <div
                  className="sg-display"
                  style={{ fontSize: "1.4rem", lineHeight: 1.1 }}
                >
                  Hyperactive
                </div>
                <div
                  className="sg-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--sg-muted)",
                  }}
                >
                  {direction.dateline}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--sg-surface)",
        border: "1px solid var(--sg-rule)",
        borderRadius: "var(--sg-radius)",
        padding: 20,
      }}
    >
      <div
        className="sg-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--sg-muted)",
          marginBottom: 16,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
