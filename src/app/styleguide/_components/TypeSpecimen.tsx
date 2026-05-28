import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

export default function TypeSpecimen({ direction }: Props) {
  const { type } = direction;
  const isSerif = direction.key !== "current";

  return (
    <section
      style={{
        padding: "48px 24px",
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
            <span className="sg-eyebrow">§ 01 · Typography</span>
            <h2 className="sg-h2" style={{ marginTop: 8, fontSize: "1.75rem" }}>
              Type specimen
            </h2>
          </div>
          <span
            className="sg-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--sg-muted)",
            }}
          >
            Same copy across all four directions
          </span>
        </header>

        {/* Font roster */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            borderTop: "1px solid var(--sg-rule)",
            borderBottom: "1px solid var(--sg-rule)",
            padding: "20px 0",
          }}
        >
          {[
            { label: "Display", spec: type.display, family: type.display.family },
            { label: "Body", spec: type.body, family: type.body.family },
            { label: "Mono", spec: type.mono, family: type.mono.family },
          ].map((row) => (
            <div key={row.label}>
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-accent)",
                  marginBottom: 8,
                }}
              >
                {row.label}
              </div>
              <div
                style={{
                  fontFamily: row.family,
                  fontSize: "1.4rem",
                  lineHeight: 1.15,
                  color: "var(--sg-ink)",
                }}
              >
                {row.spec.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--sg-muted)",
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                {row.spec.note}
              </div>
            </div>
          ))}
        </div>

        {/* Display sample */}
        <div style={{ marginTop: 40 }}>
          <SpecLabel>Display · 80px</SpecLabel>
          <h2
            className="sg-display"
            style={{
              marginTop: 8,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            The AI Revolution
          </h2>
        </div>

        {/* H1 sample */}
        <div style={{ marginTop: 40 }}>
          <SpecLabel>Heading 1 · 48px</SpecLabel>
          <h3
            className="sg-h1"
            style={{
              marginTop: 8,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Heritage of revolutions
          </h3>
        </div>

        {/* H2 + Eyebrow sample */}
        <div style={{ marginTop: 40 }}>
          <SpecLabel>Eyebrow + Heading 2 · 32px</SpecLabel>
          <div style={{ marginTop: 8 }}>
            <span className="sg-eyebrow">§ Field Notes</span>
            <h4
              className="sg-h2"
              style={{
                marginTop: 6,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Built for institutional capital
            </h4>
          </div>
        </div>

        {/* Body — paragraph + small caps */}
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          <div>
            <SpecLabel>Body · 16/26</SpecLabel>
            <p
              className={isSerif ? "sg-serif" : "sg-body"}
              style={{
                marginTop: 12,
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--sg-ink-soft)",
                fontFamily: isSerif ? "var(--sg-serif)" : "var(--sg-sans)",
              }}
            >
              Every revolution rewires capital. The Industrial Revolution
              rebuilt how value was produced. The Agricultural Revolution
              rebuilt how it was stored and traded. The AI revolution does
              both at once — and the partners institutional capital chooses
              for this transition will define the next twenty-five years of
              returns.
            </p>
          </div>

          <div>
            <SpecLabel>Mono · 13px · 0.08em tracking</SpecLabel>
            <pre
              className="sg-mono"
              style={{
                marginTop: 12,
                fontSize: 13,
                lineHeight: 1.7,
                color: "var(--sg-ink-soft)",
                fontFamily: "var(--sg-mono)",
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >
{`> readiness_assessment
  · diagnose      [ 7 days ]
  · prioritize    [ 3 days ]
  · ship          [ 14 days ]
  · measure       [ ongoing ]`}
            </pre>

            <div style={{ marginTop: 24 }}>
              <SpecLabel>Small caps · 0.08em tracking</SpecLabel>
              <p
                className="sg-smallcaps"
                style={{
                  marginTop: 8,
                  fontSize: "1.05rem",
                  fontFamily: "var(--sg-serif)",
                  color: "var(--sg-ink)",
                }}
              >
                Counsel · Discipline · Discretion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="sg-mono"
      style={{
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--sg-muted)",
      }}
    >
      {children}
    </span>
  );
}
