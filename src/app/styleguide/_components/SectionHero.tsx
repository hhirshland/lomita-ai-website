import Image from "next/image";
import type { DirectionData } from "./directions";

type Props = {
  direction: DirectionData;
};

export default function SectionHero({ direction }: Props) {
  const { key } = direction;
  const isAtelier = key === "atelier";
  const isCurrent = key === "current";
  const heroPlate = isAtelier ? direction.plates?.[1] : undefined;

  return (
    <section
      style={{
        padding: isAtelier ? "72px 0 0" : "72px 24px",
        borderTop: "1px solid var(--sg-rule)",
        backgroundImage: isCurrent
          ? `linear-gradient(var(--sg-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--sg-grid-line) 1px, transparent 1px)`
          : undefined,
        backgroundSize: isCurrent
          ? "var(--sg-grid-size) var(--sg-grid-size)"
          : undefined,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isAtelier ? "0 24px" : 0,
        }}
      >
        <header>
          <span className="sg-eyebrow">§ 04 · Hero sample</span>
          <h2 className="sg-h2" style={{ marginTop: 8, fontSize: "1.75rem" }}>
            What a homepage hero feels like
          </h2>
        </header>
      </div>

      {/* Atelier: full-bleed painting with floating UI card over it */}
      {isAtelier && heroPlate ? (
        <div
          style={{
            position: "relative",
            marginTop: 40,
            minHeight: "min(720px, 75vh)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Background painting */}
          <Image
            src={heroPlate.src}
            alt={heroPlate.alt}
            fill
            sizes="100vw"
            priority
            className="sg-landscape-img"
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              zIndex: 0,
            }}
          />
          {/* Soft scrim to keep card readable */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(20,32,46,0.06) 0%, rgba(20,32,46,0.18) 100%)",
              zIndex: 1,
            }}
          />

          {/* Floating content card */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 1200,
              width: "100%",
              margin: "0 auto",
              padding: "64px 24px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr)",
            }}
          >
            <div
              className="sg-floating-card"
              style={{
                maxWidth: 560,
                width: "100%",
              }}
            >
              <span className="sg-classification">
                Plate II · Long View
              </span>

              <h2
                className="sg-display"
                style={{
                  marginTop: 24,
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                }}
              >
                The fourth revolution
                <br />
                <em style={{ color: "var(--sg-accent)" }}>
                  rewires the same capital
                </em>
                <br />
                the first three did.
              </h2>

              <p
                className="sg-dropcap"
                style={{
                  marginTop: 24,
                  fontFamily: "var(--sg-serif)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--sg-ink-soft)",
                }}
              >
                Hyperactive helps fund-of-funds, private equity, and
                family-office allocators identify high-leverage AI
                opportunities, implement real workflows across portfolio
                companies, and upskill investment teams.
              </p>

              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <button className="sg-btn sg-btn-primary">
                  Schedule a working session
                  <span aria-hidden>→</span>
                </button>
                <button className="sg-btn sg-btn-secondary">
                  Read the pre-read
                </button>
              </div>

              <div
                style={{
                  marginTop: 32,
                  paddingTop: 20,
                  borderTop: "1px solid var(--sg-rule)",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 16,
                }}
              >
                {[
                  { figure: "$1.2B", label: "AUM advised" },
                  { figure: "14d", label: "to ship" },
                  { figure: "37", label: "engagements" },
                  { figure: "0", label: "decks" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="sg-stat-figure"
                      style={{ fontSize: "1.4rem" }}
                    >
                      {s.figure}
                    </div>
                    <div className="sg-stat-label" style={{ fontSize: 10 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Current + Salon: traditional bounded hero card */
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              marginTop: 40,
              padding: "48px 28px",
              background: "var(--sg-surface)",
              border: "1px solid var(--sg-rule)",
              borderRadius: "var(--sg-radius)",
              overflow: "hidden",
            }}
          >
            {key === "salon" ? (
              <span className="sg-classification">
                Private Memo · Bureau Series
              </span>
            ) : (
              <span className="sg-tag sg-tag-accent">
                <span className="sg-dot" />
                Accepting engagements
              </span>
            )}

            <h2
              className="sg-display"
              style={{
                marginTop: 28,
                fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)",
                maxWidth: 820,
              }}
            >
              {isCurrent ? (
                <>
                  Transform your enterprise
                  <br />
                  for the{" "}
                  <span className="sg-handnote">AI Era</span>
                </>
              ) : (
                <>
                  Counsel to capital,
                  <br />
                  <em style={{ color: "var(--sg-accent)" }}>
                    calibrated for the AI era.
                  </em>
                </>
              )}
            </h2>

            <p
              style={{
                marginTop: 24,
                fontFamily: isCurrent ? "var(--sg-sans)" : "var(--sg-serif)",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                maxWidth: 620,
                color: "var(--sg-muted)",
              }}
            >
              Hyperactive helps fund-of-funds, private equity, and
              family-office allocators identify high-leverage AI opportunities,
              implement real workflows across portfolio companies, and upskill
              investment teams.
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button className="sg-btn sg-btn-primary">
                Schedule a working session
                <span aria-hidden>→</span>
              </button>
              <button className="sg-btn sg-btn-secondary">
                Read the pre-read
              </button>
            </div>

            <div
              style={{
                marginTop: 56,
                paddingTop: 24,
                borderTop: "1px solid var(--sg-rule)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 24,
              }}
            >
              {[
                { figure: "$1.2B", label: "AUM advised" },
                { figure: "14d", label: "median time to ship" },
                { figure: "37", label: "engagements · 2024–26" },
                { figure: "0", label: "decks shipped" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="sg-stat-figure" style={{ fontSize: "2rem" }}>
                    {s.figure}
                  </div>
                  <div className="sg-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Atelier ornament beneath the full-bleed hero */}
      {isAtelier && (
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 0" }}
        >
          <div className="sg-ornament">
            <span>~ · ~</span>
          </div>
        </div>
      )}
    </section>
  );
}
