import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styleguide — Hyperactive",
};

type DirectionPreview = {
  key: "current" | "salon" | "atelier";
  name: string;
  tagline: string;
  voice: string;
  swatches: string[];
  fontFamily: string;
  bg: string;
  ink: string;
  rule: string;
  accent: string;
  serifSample: boolean;
  painting?: string;
};

const directions: DirectionPreview[] = [
  {
    key: "current",
    name: "Current — Product Lab",
    tagline: "Today's live design. The baseline.",
    voice: "Transform your enterprise for the AI Era.",
    swatches: ["#141414", "#FAFAFA", "#0D9373", "#2563EB", "#F06D2D"],
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    bg: "#FAFAFA",
    ink: "#141414",
    rule: "#E4E4E7",
    accent: "#0D9373",
    serifSample: false,
  },
  {
    key: "salon",
    name: "Bureau · Salon",
    tagline:
      "Variant A · Patrician restraint. No imagery. Typography does everything.",
    voice: "Counsel to capital, calibrated for the AI era.",
    swatches: ["#1A1A1A", "#F6F2EA", "#1B2A4E", "#5E7F6E", "#D6CFC0"],
    fontFamily: "var(--font-eb-garamond), Georgia, serif",
    bg: "#F6F2EA",
    ink: "#1A1A1A",
    rule: "#D6CFC0",
    accent: "#1B2A4E",
    serifSample: true,
  },
  {
    key: "atelier",
    name: "Bureau · Atelier",
    tagline:
      "Variant B · Heritage made visible. Painted landscapes (Hudson River School lineage) frame the AI argument.",
    voice:
      "We belong in the lineage of revolutions that built the modern economy.",
    swatches: ["#14202E", "#F2EAD7", "#2B4A7A", "#B07A2C", "#3E5A4C"],
    fontFamily: "var(--font-eb-garamond), Georgia, serif",
    bg: "#F2EAD7",
    ink: "#14202E",
    rule: "#C6BB9E",
    accent: "#2B4A7A",
    serifSample: true,
    painting: "/styleguide/landscapes/pastoral-harvest.png",
  },
];

export default function StyleguideIndex() {
  return (
    <main
      style={{
        background: "#FAFAFA",
        color: "#141414",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "56px 24px 32px",
          borderBottom: "1px solid #E4E4E7",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#71717A",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span>Hyperactive · Brand Direction Review</span>
          <span>Round II · Bureau Variants · 2026</span>
        </div>
        <h1
          style={{
            marginTop: 16,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 780,
          }}
        >
          Bureau, two ways.
          <br />
          <span style={{ color: "#71717A" }}>Compared to today.</span>
        </h1>
        <p
          style={{
            marginTop: 20,
            maxWidth: 640,
            fontSize: 16,
            lineHeight: 1.65,
            color: "#3F3F46",
          }}
        >
          Two takes on the Bureau direction — Salon (pure typographic restraint)
          and Atelier (Victorian wood engravings as visual heritage) — plus
          today&apos;s live design as the baseline. Same showcase blocks
          rendered through each direction&apos;s tokens so the brand is the
          variable, not the layout.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/styleguide/compare"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              background: "#141414",
              color: "#FAFAFA",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Compare all three side-by-side →
          </Link>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              background: "transparent",
              color: "#141414",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 6,
              textDecoration: "none",
              border: "1px solid #D4D4D8",
            }}
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Foundation TL;DR */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px",
          borderBottom: "1px solid #E4E4E7",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32,
        }}
      >
        {[
          {
            label: "Audience",
            body: "Fund of funds, PE IC members, GP relations, family-office CIOs.",
          },
          {
            label: "Thesis",
            body: "Heritage of revolutions, modernity of the AI one.",
          },
          {
            label: "Voice",
            body: "Declarative, evidence-backed, never AI-agency boilerplate.",
          },
          {
            label: "Avoid",
            body: "Gradient sci-fi, robot clichés, generic SaaS minimalism.",
          },
        ].map((item) => (
          <div key={item.label}>
            <div
              style={{
                fontFamily:
                  "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#71717A",
                marginBottom: 8,
              }}
            >
              {item.label}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#27272A" }}>
              {item.body}
            </p>
          </div>
        ))}
      </section>

      {/* Direction cards */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 72px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {directions.map((d) => (
            <Link
              key={d.key}
              href={`/styleguide/${d.key}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  background: d.bg,
                  color: d.ink,
                  border: `1px solid ${d.rule}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 150ms ease, box-shadow 150ms ease",
                }}
              >
                {/* Optional painted-landscape thumbnail */}
                {d.painting && (
                  <div
                    style={{
                      borderBottom: `1px solid ${d.rule}`,
                      background: "#E5DCC4",
                      aspectRatio: "16/9",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={d.painting}
                      alt="Painted landscape — wheat fields at harvest"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}

                <div
                  style={{
                    padding: "28px 26px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-jetbrains-mono), ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: d.accent,
                    }}
                  >
                    {d.key === "current"
                      ? "Baseline"
                      : d.key === "salon"
                      ? "Variant A · Typographic"
                      : "Variant B · Painted"}
                  </div>

                  <h2
                    style={{
                      fontFamily: d.fontFamily,
                      fontSize: "1.8rem",
                      fontWeight: d.serifSample ? 600 : 700,
                      lineHeight: 1.1,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {d.name}
                  </h2>

                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: d.ink,
                      opacity: 0.78,
                      fontFamily:
                        "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {d.tagline}
                  </p>

                  <blockquote
                    style={{
                      fontFamily: d.fontFamily,
                      fontStyle: d.serifSample ? "italic" : "normal",
                      fontSize: "1.1rem",
                      lineHeight: 1.35,
                      color: d.ink,
                      margin: 0,
                      paddingLeft: 14,
                      borderLeft: `2px solid ${d.accent}`,
                    }}
                  >
                    &ldquo;{d.voice}&rdquo;
                  </blockquote>

                  <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                    {d.swatches.map((c) => (
                      <span
                        key={c}
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 4,
                          background: c,
                          border: `1px solid ${d.rule}`,
                        }}
                        aria-label={c}
                        title={c}
                      />
                    ))}
                  </div>

                  <div
                    style={{
                      fontFamily:
                        "var(--font-jetbrains-mono), ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: d.accent,
                      borderTop: `1px solid ${d.rule}`,
                      paddingTop: 14,
                    }}
                  >
                    Open page →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
