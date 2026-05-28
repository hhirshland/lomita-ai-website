import type { DirectionData } from "./directions";
import PaintedPlate from "./PaintedPlate";

type Props = {
  direction: DirectionData;
};

export default function SectionCaseStudy({ direction }: Props) {
  const { key } = direction;
  const isAtelier = key === "atelier";
  const isCurrent = key === "current";
  const casePlate = isAtelier ? direction.plates?.[2] : undefined;

  return (
    <section
      style={{
        padding: "64px 24px",
        borderTop: "1px solid var(--sg-rule)",
        background: key === "salon" ? "var(--sg-paper-alt)" : "transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header>
          <span className="sg-eyebrow">§ 06 · Case study</span>
          <h2
            className="sg-h2"
            style={{ marginTop: 8, fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
          >
            {key === "salon"
              ? "From the Files"
              : key === "atelier"
              ? "Confluence · A Working Valley"
              : "Recent work"}
          </h2>
        </header>

        {/* Atelier: painted landscape banner above the case study */}
        {isAtelier && casePlate && (
          <div style={{ marginTop: 36 }}>
            <PaintedPlate plate={casePlate} aspectRatio="2 / 1" />
          </div>
        )}

        <div
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Main column */}
          <article>
            <h3
              className="sg-h1"
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
                color: "var(--sg-ink)",
              }}
            >
              How a $3.2B fund deployed AI across 14 portfolio companies in
              six months
            </h3>

            <p
              className={isAtelier ? "sg-dropcap" : ""}
              style={{
                marginTop: 24,
                fontFamily: isCurrent ? "var(--sg-sans)" : "var(--sg-serif)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--sg-ink-soft)",
              }}
            >
              When the IC asked how AI would change their thesis, the partners
              didn&apos;t have an answer. Six weeks later they had a diagnostic
              across the entire portfolio, a prioritized roadmap, and three
              shipped workflows compounding daily — the first managed by a
              GP, the second by a portfolio company COO, the third by the
              firm&apos;s own deal team.
            </p>

            <p
              style={{
                marginTop: 16,
                fontFamily: isCurrent ? "var(--sg-sans)" : "var(--sg-serif)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--sg-ink-soft)",
              }}
            >
              No frameworks. No slides. The diagnostic identified the
              three workflows where AI had the highest dollar leverage,
              we shipped them, and the firm owns the system today.
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <span className="sg-tag">PE · Lower-middle market</span>
              <span className="sg-tag">14 portfolio cos</span>
              <span className="sg-tag sg-tag-accent">6 months · shipped</span>
            </div>
          </article>

          {/* Side column — pull quote + stats */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                padding: "24px 22px",
                borderLeft: "2px solid var(--sg-accent)",
                background: "var(--sg-accent-soft)",
                borderRadius: "var(--sg-radius)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--sg-serif)",
                  fontStyle: isCurrent ? "normal" : "italic",
                  fontSize: "1.15rem",
                  lineHeight: 1.45,
                  color: "var(--sg-ink)",
                  margin: 0,
                }}
              >
                &ldquo;The first vendor we&apos;ve worked with that didn&apos;t
                ship a deck. They shipped the system.&rdquo;
              </p>
              <div
                style={{
                  marginTop: 16,
                  fontFamily: "var(--sg-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-muted)",
                }}
              >
                — Managing Partner · $3.2B Fund
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--sg-rule)",
                background: "var(--sg-surface)",
                padding: "20px 22px",
                borderRadius: "var(--sg-radius)",
              }}
            >
              <div
                className="sg-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--sg-muted)",
                  marginBottom: 16,
                }}
              >
                By the numbers
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                <div>
                  <div className="sg-stat-figure" style={{ fontSize: "2rem" }}>
                    14
                  </div>
                  <div className="sg-stat-label">portfolio cos</div>
                </div>
                <div>
                  <div className="sg-stat-figure" style={{ fontSize: "2rem" }}>
                    6mo
                  </div>
                  <div className="sg-stat-label">to deploy</div>
                </div>
                <div>
                  <div className="sg-stat-figure" style={{ fontSize: "2rem" }}>
                    3
                  </div>
                  <div className="sg-stat-label">workflows shipped</div>
                </div>
                <div>
                  <div className="sg-stat-figure" style={{ fontSize: "2rem" }}>
                    0
                  </div>
                  <div className="sg-stat-label">decks</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
