import Link from "next/link";
import type { DirectionKey } from "./directions";

const directions: { key: DirectionKey; label: string; tag: string }[] = [
  { key: "current", label: "Current", tag: "Product Lab" },
  { key: "salon", label: "Bureau · Salon", tag: "Typographic" },
  { key: "atelier", label: "Bureau · Atelier", tag: "Engraved" },
];

type Props = {
  active: DirectionKey;
};

export default function DirectionSwitcher({ active }: Props) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "color-mix(in srgb, var(--sg-paper) 92%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--sg-rule)",
        fontFamily: "var(--sg-sans)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/styleguide"
          style={{
            fontFamily: "var(--sg-mono)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--sg-muted)",
            textDecoration: "none",
          }}
        >
          ← Styleguide
        </Link>

        <div
          style={{
            height: "14px",
            width: "1px",
            background: "var(--sg-rule)",
          }}
        />

        <nav style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {directions.map((d) => {
            const isActive = d.key === active;
            return (
              <Link
                key={d.key}
                href={`/styleguide/${d.key}`}
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "8px",
                  padding: "6px 12px",
                  fontFamily: "var(--sg-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: isActive ? "var(--sg-paper)" : "var(--sg-ink)",
                  background: isActive ? "var(--sg-ink)" : "transparent",
                  border: `1px solid ${
                    isActive ? "var(--sg-ink)" : "var(--sg-rule)"
                  }`,
                  borderRadius: "var(--sg-radius)",
                  textDecoration: "none",
                  transition: "all 150ms ease",
                }}
              >
                {d.label}
                <span
                  style={{
                    fontFamily: "var(--sg-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.6,
                  }}
                >
                  {d.tag}
                </span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/styleguide/compare"
          style={{
            marginLeft: "auto",
            fontFamily: "var(--sg-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--sg-accent)",
            textDecoration: "none",
            borderBottom: "1px solid var(--sg-accent)",
            paddingBottom: "2px",
          }}
        >
          Compare all three →
        </Link>
      </div>
    </div>
  );
}
