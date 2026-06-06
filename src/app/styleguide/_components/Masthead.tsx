import type { DirectionData } from "./directions";
import PaintedPlate from "./PaintedPlate";

type Props = {
  direction: DirectionData;
};

export default function Masthead({ direction }: Props) {
  const { key } = direction;
  const isAtelier = key === "atelier";
  const featuredPlate = isAtelier ? direction.plates?.[0] : undefined;

  return (
    <section
      style={{
        padding: "64px 24px 48px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Dateline / era */}
      <div
        className="sg-eyebrow"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          borderTop: "1px solid var(--sg-rule)",
          padding: "12px 0 0",
          color: "var(--sg-muted)",
        }}
      >
        <span>{direction.era}</span>
        <span>{direction.dateline}</span>
      </div>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: isAtelier
            ? "minmax(0, 1.05fr) minmax(0, 1fr)"
            : "1fr",
          gap: isAtelier ? 48 : 0,
          alignItems: "start",
        }}
      >
        {/* Left/main column */}
        <div>
          <h1
            className="sg-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            {direction.name}
          </h1>

          {/* Voice sample */}
          <blockquote
            style={{
              marginTop: 28,
              paddingLeft: 20,
              borderLeft: "2px solid var(--sg-accent)",
              fontFamily: "var(--sg-serif)",
              fontStyle: key === "current" ? "normal" : "italic",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
              lineHeight: 1.4,
              maxWidth: 720,
              color: "var(--sg-ink-soft)",
            }}
          >
            &ldquo;{direction.voice}&rdquo;
          </blockquote>

          {/* Description */}
          <p
            style={{
              marginTop: 24,
              maxWidth: 680,
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--sg-muted)",
              fontFamily: "var(--sg-sans)",
            }}
          >
            {direction.description}
          </p>

          {/* Direction-specific tag/label */}
          {key === "salon" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-classification">
                Confidential · IC Pre-read
              </span>
            </div>
          )}

          {key === "atelier" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-classification">
                Pastoral I · Bureau Series · MMXXVI
              </span>
            </div>
          )}

          {key === "current" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-tag sg-tag-accent">
                <span className="sg-dot" />
                v1.1 · live · 2026
              </span>
            </div>
          )}

          {key === "meridian" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-ticker">
                Boutique · Allocator-grade · 2026
              </span>
            </div>
          )}

          {key === "endowment" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-classification">
                Endowment Series · 2026
              </span>
            </div>
          )}

          {key === "studio" && (
            <div style={{ marginTop: 32 }}>
              <span className="sg-tag sg-tag-accent">
                <span className="sg-dot" />
                Now booking · 2026
              </span>
            </div>
          )}
        </div>

        {/* Atelier: featured painted landscape */}
        {isAtelier && featuredPlate && (
          <div>
            <PaintedPlate plate={featuredPlate} priority />
          </div>
        )}
      </div>
    </section>
  );
}
