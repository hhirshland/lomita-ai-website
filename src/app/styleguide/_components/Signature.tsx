import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

export default function Signature({ direction }: Props) {
  const { key } = direction;
  const bodyFont = direction.bodyIsSerif
    ? "var(--sg-serif)"
    : "var(--sg-sans)";

  const blurb =
    key === "salon"
      ? "Counsel to capital, calibrated for the AI era. Engagements taken by introduction."
      : key === "atelier"
      ? "We belong in the lineage of revolutions that built the modern economy. The fourth is in progress. We're at the press."
      : key === "meridian"
      ? "A boutique advisor for institutional capital, calibrated for the AI era. Engagements taken by introduction."
      : key === "endowment"
      ? "Counsel to long-tenured capital. We work with endowments, family offices, and PE firms one engagement at a time."
      : key === "studio"
      ? "An AI studio for the founders rebuilding investing from scratch — and the funds backing them."
      : "An AI agency for fund-of-funds, private equity, and family-office allocators.";

  return (
    <footer
      style={{
        padding: "64px 24px 80px",
        borderTop: "1px solid var(--sg-rule)",
        background:
          key === "salon" ||
          key === "atelier" ||
          key === "endowment" ||
          key === "meridian"
            ? "var(--sg-paper-alt)"
            : "transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Monogram + signature */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
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
                  fontSize: 26,
                  fontStyle: direction.monogramCircular ? "italic" : "normal",
                  letterSpacing: "-0.02em",
                  border:
                    key === "atelier"
                      ? "1px solid var(--sg-accent)"
                      : "none",
                }}
              >
                H
              </div>
              <div>
                <div
                  className="sg-display"
                  style={{ fontSize: "1.6rem", lineHeight: 1.1 }}
                >
                  Hyperactive
                </div>
                <div
                  className="sg-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--sg-muted)",
                    marginTop: 4,
                  }}
                >
                  {direction.dateline}
                </div>
              </div>
            </div>

            <p
              style={{
                marginTop: 28,
                maxWidth: 460,
                fontFamily: bodyFont,
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--sg-muted)",
              }}
            >
              {blurb}
            </p>
          </div>

          {/* Contact column */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              borderTop: "1px solid var(--sg-rule)",
              paddingTop: 24,
            }}
          >
            <div>
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-muted)",
                  marginBottom: 8,
                }}
              >
                Correspondence
              </div>
              <a
                href="mailto:partners@hyperactive.studio"
                style={{
                  fontFamily: bodyFont,
                  fontSize: 14,
                  color: "var(--sg-ink)",
                  borderBottom: "1px solid var(--sg-accent)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                partners@hyperactive.studio
              </a>
            </div>
            <div>
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-muted)",
                  marginBottom: 8,
                }}
              >
                Schedule
              </div>
              <a
                href="#"
                style={{
                  fontFamily: bodyFont,
                  fontSize: 14,
                  color: "var(--sg-ink)",
                  borderBottom: "1px solid var(--sg-accent)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Book a 30m working session
              </a>
            </div>
            <div>
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-muted)",
                  marginBottom: 8,
                }}
              >
                Address
              </div>
              <div
                style={{
                  fontFamily: bodyFont,
                  fontSize: 14,
                  color: "var(--sg-ink)",
                  lineHeight: 1.5,
                }}
              >
                New York · San Francisco
              </div>
            </div>
          </div>
        </div>

        {/* Final rule */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 18,
            borderTop: "1px solid var(--sg-rule)",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontFamily: "var(--sg-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--sg-muted)",
          }}
        >
          <span>© Hyperactive · 2026</span>
          <span>{direction.shortName} · Specimen</span>
        </div>
      </div>
    </footer>
  );
}
