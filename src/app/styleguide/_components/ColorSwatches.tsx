import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

export default function ColorSwatches({ direction }: Props) {
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
            <span className="sg-eyebrow">§ 02 · Color</span>
            <h2 className="sg-h2" style={{ marginTop: 8, fontSize: "1.75rem" }}>
              Palette
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
            {direction.swatches.length} colors
          </span>
        </header>

        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {direction.swatches.map((s) => (
            <div
              key={s.hex}
              style={{
                border: "1px solid var(--sg-rule)",
                borderRadius: "var(--sg-radius)",
                overflow: "hidden",
                background: "var(--sg-surface)",
              }}
            >
              <div
                style={{
                  background: s.hex,
                  height: 120,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 12,
                  color:
                    s.textOn === "ink"
                      ? "var(--sg-ink)"
                      : "var(--sg-paper)",
                  fontFamily: "var(--sg-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.hex}
              </div>
              <div style={{ padding: "12px 14px 14px" }}>
                <div
                  style={{
                    fontFamily: "var(--sg-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--sg-ink)",
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--sg-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "var(--sg-muted)",
                    marginTop: 4,
                  }}
                >
                  {s.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
