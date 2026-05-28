import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { directions, type DirectionKey } from "../_components/directions";

export const metadata: Metadata = {
  title: "Compare — Hyperactive Styleguide",
  description:
    "Three-column side-by-side of Current, Bureau · Salon, Bureau · Atelier. Same vocabulary, three voices.",
};

const order: DirectionKey[] = ["current", "salon", "atelier"];

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
            maxWidth: "1600px",
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
            Compare · Current vs Bureau Salon vs Bureau Atelier
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
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 760,
          }}
        >
          Three brand directions, side by side.
        </h1>
        <p
          style={{
            marginTop: 16,
            maxWidth: 720,
            fontSize: 15,
            lineHeight: 1.65,
            color: "#52525B",
          }}
        >
          Bureau in two registers — Salon (pure typography) and Atelier
          (engraving-led heritage) — measured against today&apos;s live
          design as the anchor. Click any column header to open its full
          styleguide page.
        </p>
      </section>

      {/* 3-column grid */}
      <section
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 12px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(320px, 1fr))",
            gap: 16,
            overflowX: "auto",
          }}
        >
          {order.map((k) => (
            <CompareColumn key={k} direction={k} />
          ))}
        </div>

        {/* Mobile note */}
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
          ↔ Scroll horizontally on smaller screens. For full pages, use the
          column headers.
        </p>
      </section>
    </div>
  );
}

function CompareColumn({ direction }: { direction: DirectionKey }) {
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
            {isCurrent
              ? "Baseline"
              : direction === "salon"
              ? "Variant A · Typographic"
              : "Variant B · Painted"}
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
        <div
          className="sg-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--sg-muted)",
            marginBottom: 12,
          }}
        >
          {data.era}
        </div>
        <h2
          className="sg-display"
          style={{
            fontSize: "1.85rem",
            lineHeight: 1.05,
          }}
        >
          The AI Revolution
        </h2>
        <blockquote
          style={{
            marginTop: 16,
            paddingLeft: 12,
            borderLeft: "2px solid var(--sg-accent)",
            fontFamily: "var(--sg-serif)",
            fontStyle: isCurrent ? "normal" : "italic",
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
            fontFamily: isCurrent ? "var(--sg-sans)" : "var(--sg-serif)",
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
          {data.type.display.name} · {data.type.mono.name}
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

      {/* Hero snippet */}
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
          {direction === "salon" ? (
            <div className="sg-classification" style={{ fontSize: 9 }}>
              IC Pre-read
            </div>
          ) : isAtelier ? (
            <div className="sg-classification" style={{ fontSize: 9 }}>
              Plate II · Long View
            </div>
          ) : (
            <span className="sg-tag sg-tag-accent" style={{ fontSize: 9 }}>
              <span className="sg-dot" />
              accepting clients
            </span>
          )}

          <h3
            className="sg-display"
            style={{
              marginTop: 14,
              fontSize: "1.7rem",
              lineHeight: 1.05,
            }}
          >
            {isCurrent ? (
              "Transform your enterprise for the AI Era"
            ) : direction === "salon" ? (
              <>
                Counsel to capital,
                <br />
                <em style={{ color: "var(--sg-accent)" }}>
                  calibrated for the AI era.
                </em>
              </>
            ) : (
              <>
                The fourth revolution
                <br />
                <em style={{ color: "var(--sg-accent)" }}>
                  rewires the same capital
                </em>
                {" "}the first three did.
              </>
            )}
          </h3>

          <p
            style={{
              marginTop: 14,
              fontFamily: isCurrent ? "var(--sg-sans)" : "var(--sg-serif)",
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
                  style={{ fontSize: "1.2rem" }}
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
          Full page →
        </Link>
      </div>
    </div>
  );
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
