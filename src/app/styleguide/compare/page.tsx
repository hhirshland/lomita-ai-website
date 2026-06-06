import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { directions, type DirectionKey } from "../_components/directions";

export const metadata: Metadata = {
  title: "Compare — Hyperactive Styleguide",
  description:
    "Side-by-side: today's live design (Current) against three new brand directions — Meridian, Endowment, Studio. Same vocabulary, four voices.",
};

const primaryOrder: DirectionKey[] = [
  "current",
  "meridian",
  "endowment",
  "studio",
];

const previousOrder: DirectionKey[] = ["salon", "atelier"];

export default function ComparePage() {
  return (
    <div
      style={{
        background: "#FAFAFA",
        color: "#141414",
        minHeight: "100vh",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(250, 250, 250, 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #E4E4E7",
        }}
      >
        <div
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/styleguide"
            style={{
              fontFamily:
                "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#71717A",
              textDecoration: "none",
            }}
          >
            ← Styleguide
          </Link>
          <div style={{ height: 14, width: 1, background: "#E4E4E7" }} />
          <span
            style={{
              fontFamily:
                "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#141414",
              fontWeight: 600,
            }}
          >
            Compare · Current vs three new directions
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 12,
              color: "#71717A",
            }}
          >
            Same copy. Same blocks. Different brand.
          </span>
        </div>
      </header>

      {/* Intro */}
      <section
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        <span
          style={{
            fontFamily:
              "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#71717A",
          }}
        >
          Round III · Three new directions
        </span>
        <h1
          style={{
            marginTop: 12,
            fontSize: "clamp(1.85rem, 3.5vw, 2.6rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 880,
          }}
        >
          Today, alongside three new brand directions.
        </h1>
        <p
          style={{
            marginTop: 16,
            maxWidth: 760,
            fontSize: 15,
            lineHeight: 1.65,
            color: "#52525B",
          }}
        >
          Current pinned in column one as the anchor. Meridian (boutique
          McKinsey + Palantir, dark), Endowment (family-office green and
          gold), and Studio (founder/agency charcoal and peach) follow.
          Same hero, same case study, same component vocabulary — only the
          tokens change.
        </p>
      </section>

      {/* 4-column primary grid */}
      <section
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          padding: "0 12px 56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${primaryOrder.length}, minmax(320px, 1fr))`,
            gap: 16,
            overflowX: "auto",
          }}
        >
          {primaryOrder.map((k) => (
            <CompareColumn key={k} direction={k} />
          ))}
        </div>

        <p
          style={{
            marginTop: 24,
            fontSize: 12,
            color: "#71717A",
            fontFamily:
              "var(--font-jetbrains-mono), ui-monospace, monospace",
            letterSpacing: "0.06em",
          }}
        >
          ↔ Scroll horizontally on smaller screens. Click any column header to
          open its full styleguide page.
        </p>
      </section>

      {/* Round II (previous) reference grid */}
      <section
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          padding: "32px 24px 80px",
          borderTop: "1px solid #E4E4E7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <span
              style={{
                fontFamily:
                  "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#71717A",
              }}
            >
              Round II · Reference only
            </span>
            <h2
              style={{
                marginTop: 8,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: 1.15,
              }}
            >
              Bureau · Salon and Atelier
            </h2>
            <p
              style={{
                marginTop: 8,
                maxWidth: 640,
                fontSize: 14,
                lineHeight: 1.6,
                color: "#52525B",
              }}
            >
              The previous exploration, kept here as visual context. Salon
              leans on pure typography; Atelier brings painted heritage.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {previousOrder.map((k) => (
              <Link
                key={k}
                href={`/styleguide/${k}`}
                style={{
                  padding: "8px 14px",
                  background: "transparent",
                  color: "#141414",
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: 6,
                  textDecoration: "none",
                  border: "1px solid #D4D4D8",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Open {directions[k].shortName} →
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 16,
          }}
        >
          {previousOrder.map((k) => (
            <CompareColumn key={k} direction={k} compact />
          ))}
        </div>
      </section>
    </div>
  );
}

function CompareColumn({
  direction,
  compact = false,
}: {
  direction: DirectionKey;
  compact?: boolean;
}) {
  const data = directions[direction];
  const isCurrent = direction === "current";
  const isAtelier = direction === "atelier";
  const featuredPlate = isAtelier ? data.plates?.[0] : undefined;

  return (
    <div
      data-direction={direction}
      className="sg-root"
      style={{
        border: "1px solid var(--sg-rule)",
        borderRadius: "var(--sg-radius)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Column header — link to full page */}
      <Link
        href={`/styleguide/${direction}`}
        style={{
          padding: "16px 20px",
          background: "var(--sg-paper-alt)",
          borderBottom: "1px solid var(--sg-rule)",
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span>
          <div
            className="sg-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--sg-accent)",
            }}
          >
            {data.era}
          </div>
          <div
            className="sg-display"
            style={{
              fontSize: "1.4rem",
              marginTop: 4,
              fontWeight: "var(--sg-display-weight)",
            }}
          >
            {data.shortName}
          </div>
        </span>
        <span
          className="sg-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--sg-muted)",
          }}
        >
          Open →
        </span>
      </Link>

      {/* Atelier: featured painted landscape at the top */}
      {featuredPlate && (
        <div
          style={{
            borderBottom: "1px solid var(--sg-rule)",
            position: "relative",
            aspectRatio: "16/9",
            background: "var(--sg-paper-alt)",
          }}
        >
          <Image
            src={featuredPlate.src}
            alt={featuredPlate.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="sg-landscape-img"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Masthead — voice + era */}
      <section style={{ padding: "20px" }}>
        <h2
          className="sg-display"
          style={{
            fontSize: "1.85rem",
            lineHeight: 1.05,
          }}
        >
          {direction === "current"
            ? "AI Era"
            : direction === "salon"
            ? "Counsel · 2026"
            : direction === "atelier"
            ? "The fourth revolution"
            : direction === "meridian"
            ? "Allocator's brief"
            : direction === "endowment"
            ? "For long capital"
            : direction === "studio"
            ? "An AI studio"
            : "AI Era"}
        </h2>
        <blockquote
          style={{
            marginTop: 16,
            paddingLeft: 12,
            borderLeft: "2px solid var(--sg-accent)",
            fontFamily: "var(--sg-serif)",
            fontStyle: data.bodyIsSerif ? "italic" : "normal",
            fontSize: "0.95rem",
            lineHeight: 1.4,
            color: "var(--sg-ink-soft)",
          }}
        >
          &ldquo;{data.voice}&rdquo;
        </blockquote>
      </section>

      {/* Type specimen — compact */}
      <section
        style={{
          padding: "20px",
          borderTop: "1px solid var(--sg-rule)",
        }}
      >
        <SectionLabel>§ Type</SectionLabel>
        <div
          style={{
            marginTop: 12,
            fontFamily: "var(--sg-display)",
            fontWeight: "var(--sg-display-weight)",
            letterSpacing: "var(--sg-display-tracking)",
            fontSize: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Heritage of revolutions
        </div>
        <p
          style={{
            marginTop: 10,
            fontFamily: data.bodyIsSerif
              ? "var(--sg-serif)"
              : "var(--sg-sans)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--sg-ink-soft)",
          }}
        >
          Every revolution rewires capital. The AI one will define the next
          twenty-five years of returns.
        </p>
        <div
          className="sg-mono"
          style={{
            marginTop: 10,
            fontSize: 11,
            color: "var(--sg-muted)",
            letterSpacing: "0.04em",
          }}
        >
          {data.type.display.name} · {data.type.body.name} · {data.type.mono.name}
        </div>
      </section>

      {/* Swatches */}
      <section
        style={{
          padding: "20px",
          borderTop: "1px solid var(--sg-rule)",
        }}
      >
        <SectionLabel>§ Color</SectionLabel>
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
          }}
        >
          {data.swatches.slice(0, 6).map((s) => (
            <div
              key={s.hex}
              style={{
                aspectRatio: "1/1",
                background: s.hex,
                border: "1px solid var(--sg-rule)",
                borderRadius: "var(--sg-radius)",
                position: "relative",
              }}
              title={`${s.name} · ${s.hex}`}
            >
              <span
                className="sg-mono"
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 4,
                  fontSize: 8,
                  letterSpacing: "0.04em",
                  color: s.textOn === "ink" ? "var(--sg-ink)" : "var(--sg-paper)",
                  textTransform: "uppercase",
                }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero snippet — skipped in compact reference variants */}
      {!compact && (
        <section
          style={{
            padding: "20px",
            borderTop: "1px solid var(--sg-rule)",
            flexGrow: 1,
          }}
        >
          <SectionLabel>§ Hero</SectionLabel>
          <div
            style={{
              marginTop: 14,
              padding: 16,
              background: "var(--sg-surface)",
              border: "1px solid var(--sg-rule)",
              borderRadius: "var(--sg-radius)",
            }}
          >
            <HeroEyebrow direction={direction} />

            <h3
              className="sg-display"
              style={{
                marginTop: 14,
                fontSize: "1.55rem",
                lineHeight: 1.05,
              }}
            >
              <HeroHeadline direction={direction} />
            </h3>

            <p
              style={{
                marginTop: 14,
                fontFamily: data.bodyIsSerif
                  ? "var(--sg-serif)"
                  : "var(--sg-sans)",
                fontSize: 12,
                lineHeight: 1.6,
                color: "var(--sg-muted)",
              }}
            >
              For fund-of-funds, private equity, and family-office allocators.
            </p>

            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              <button
                className="sg-btn sg-btn-primary"
                style={{ fontSize: 11, padding: "8px 12px" }}
              >
                Schedule
              </button>
              <button
                className="sg-btn sg-btn-secondary"
                style={{ fontSize: 11, padding: "8px 12px" }}
              >
                Pre-read
              </button>
            </div>

            <div
              style={{
                marginTop: 20,
                paddingTop: 12,
                borderTop: "1px solid var(--sg-rule)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
              }}
            >
              {[
                { f: "$1.2B", l: "AUM" },
                { f: "14d", l: "to ship" },
                { f: "0", l: "decks" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="sg-stat-figure"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {s.f}
                  </div>
                  <div className="sg-stat-label" style={{ fontSize: 9 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Components row — buttons + tag, so the buyer can compare CTAs at a glance */}
      {!compact && (
        <section
          style={{
            padding: "20px",
            borderTop: "1px solid var(--sg-rule)",
          }}
        >
          <SectionLabel>§ Components</SectionLabel>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <button
              className="sg-btn sg-btn-primary"
              style={{ fontSize: 12, padding: "8px 14px" }}
            >
              Schedule a working session
              <span aria-hidden>→</span>
            </button>
            <button
              className="sg-btn sg-btn-secondary"
              style={{ fontSize: 12, padding: "8px 14px" }}
            >
              Download pre-read
            </button>
            <span
              className="sg-tag sg-tag-accent"
              style={{ fontSize: 10 }}
            >
              <span className="sg-dot" />
              Engagement live
            </span>
            <div
              className="sg-callout"
              style={{ width: "100%", padding: "12px 14px" }}
            >
              <div
                className="sg-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--sg-accent)",
                  marginBottom: 4,
                }}
              >
                Working note
              </div>
              <div
                style={{
                  fontFamily: data.bodyIsSerif
                    ? "var(--sg-serif)"
                    : "var(--sg-sans)",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "var(--sg-ink)",
                }}
              >
                You don&apos;t get a deck. You get the system, shipped.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <div
        style={{
          padding: "14px 20px",
          background: "var(--sg-paper-alt)",
          borderTop: "1px solid var(--sg-rule)",
          fontFamily: "var(--sg-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--sg-muted)",
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <span>{data.shortName}</span>
        <Link
          href={`/styleguide/${direction}`}
          style={{
            color: "var(--sg-accent)",
            textDecoration: "none",
            borderBottom: "1px solid var(--sg-accent)",
            paddingBottom: 1,
          }}
        >
          {isCurrent ? "Live page →" : "Full page →"}
        </Link>
      </div>
    </div>
  );
}

function HeroEyebrow({ direction }: { direction: DirectionKey }) {
  switch (direction) {
    case "salon":
      return (
        <div className="sg-classification" style={{ fontSize: 9 }}>
          IC Pre-read
        </div>
      );
    case "atelier":
      return (
        <div className="sg-classification" style={{ fontSize: 9 }}>
          Plate II · Long View
        </div>
      );
    case "endowment":
      return (
        <div className="sg-classification" style={{ fontSize: 9 }}>
          Memorandum
        </div>
      );
    case "meridian":
      return (
        <span className="sg-ticker" style={{ fontSize: 9 }}>
          Allocator brief · 2026
        </span>
      );
    case "studio":
      return (
        <span className="sg-tag sg-tag-accent" style={{ fontSize: 9 }}>
          <span className="sg-dot" />
          Now booking
        </span>
      );
    case "current":
    default:
      return (
        <span className="sg-tag sg-tag-accent" style={{ fontSize: 9 }}>
          <span className="sg-dot" />
          Accepting clients
        </span>
      );
  }
}

function HeroHeadline({ direction }: { direction: DirectionKey }) {
  switch (direction) {
    case "current":
      return <>Transform your enterprise for the AI Era</>;
    case "salon":
      return (
        <>
          Counsel to capital,
          <br />
          <em style={{ color: "var(--sg-accent)" }}>
            calibrated for the AI era.
          </em>
        </>
      );
    case "atelier":
      return (
        <>
          The fourth revolution
          <br />
          <em style={{ color: "var(--sg-accent)" }}>
            rewires the same capital
          </em>
          {" "}the first three did.
        </>
      );
    case "meridian":
      return (
        <>
          Boutique counsel
          <br />
          for the firms{" "}
          <span style={{ color: "var(--sg-accent)" }}>allocating</span>
          <br />
          to the AI era.
        </>
      );
    case "endowment":
      return (
        <>
          An advisor to
          <br />
          <em style={{ color: "var(--sg-accent)" }}>
            long-tenured capital,
          </em>
          <br />
          in the year capital changed.
        </>
      );
    case "studio":
      return (
        <>
          An AI studio for
          <br />
          founders{" "}
          <span style={{ color: "var(--sg-accent)" }}>rebuilding</span>
          <br />
          investing from scratch.
        </>
      );
    default:
      return null;
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="sg-mono"
      style={{
        fontSize: 9,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--sg-accent)",
      }}
    >
      {children}
    </div>
  );
}
