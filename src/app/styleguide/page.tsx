import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styleguide — Hyperactive",
};

type DirectionPreview = {
  key:
    | "current"
    | "salon"
    | "atelier"
    | "meridian"
    | "endowment"
    | "studio";
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
  badge: string;
};

const primary: DirectionPreview[] = [
  {
    key: "current",
    name: "Current — Product Lab",
    tagline: "Today's live design. The baseline against which everything below is judged.",
    voice: "Transform your enterprise for the AI Era.",
    swatches: ["#141414", "#FAFAFA", "#0D9373", "#2563EB", "#F06D2D"],
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    bg: "#FAFAFA",
    ink: "#141414",
    rule: "#E4E4E7",
    accent: "#0D9373",
    serifSample: false,
    badge: "Baseline",
  },
  {
    key: "meridian",
    name: "Meridian",
    tagline:
      "Boutique McKinsey + Palantir. Deep navy stage, off-white type, single muted-peach accent. Institutional, premium, modern.",
    voice: "Boutique counsel for the firms that allocate to the AI era.",
    swatches: ["#0F172A", "#F8FAFC", "#F4A261", "#1E293B", "#94A3B8"],
    fontFamily: "var(--font-source-serif), Georgia, serif",
    bg: "#0F172A",
    ink: "#F8FAFC",
    rule: "#1E293B",
    accent: "#F4A261",
    serifSample: true,
    badge: "Round III · A",
  },
  {
    key: "endowment",
    name: "Endowment",
    tagline:
      "Berkshire Hathaway energy. Forest-green ink on cream paper, single restrained gold accent. Likely the strongest fit if buyers are PE / family-office CIOs.",
    voice: "An advisor to long-tenured capital, in the year capital changed.",
    swatches: ["#163A2A", "#F7F2E8", "#C8A96A", "#2E5340", "#D9D2BE"],
    fontFamily: "var(--font-playfair), Georgia, serif",
    bg: "#F7F2E8",
    ink: "#163A2A",
    rule: "#D9D2BE",
    accent: "#C8A96A",
    serifSample: true,
    badge: "Round III · B",
  },
  {
    key: "studio",
    name: "Studio",
    tagline:
      "Silicon Valley founder + high-end design agency. Charcoal on white, single peach accent. The most visually differentiated of the three.",
    voice: "An AI studio for the founders rebuilding investing from scratch.",
    swatches: ["#171717", "#FAFAFA", "#E79C7D", "#404040", "#E5E5E5"],
    fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
    bg: "#FAFAFA",
    ink: "#171717",
    rule: "#E5E5E5",
    accent: "#E79C7D",
    serifSample: false,
    badge: "Round III · C",
  },
];

const previous: DirectionPreview[] = [
  {
    key: "salon",
    name: "Bureau · Salon",
    tagline: "Round II · A. Patrician restraint. Typography does everything.",
    voice: "Counsel to capital, calibrated for the AI era.",
    swatches: ["#1A1A1A", "#F6F2EA", "#1B2A4E", "#5E7F6E", "#D6CFC0"],
    fontFamily: "var(--font-eb-garamond), Georgia, serif",
    bg: "#F6F2EA",
    ink: "#1A1A1A",
    rule: "#D6CFC0",
    accent: "#1B2A4E",
    serifSample: true,
    badge: "Round II · A",
  },
  {
    key: "atelier",
    name: "Bureau · Atelier",
    tagline:
      "Round II · B. Heritage made visible. Painted landscapes (Hudson River School lineage) frame the AI argument.",
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
    badge: "Round II · B",
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
          <span>Round III · Three New Directions · 2026</span>
        </div>
        <h1
          style={{
            marginTop: 16,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 820,
          }}
        >
          Three new brand directions.
          <br />
          <span style={{ color: "#71717A" }}>Compared to today.</span>
        </h1>
        <p
          style={{
            marginTop: 20,
            maxWidth: 720,
            fontSize: 16,
            lineHeight: 1.65,
            color: "#3F3F46",
          }}
        >
          Three palettes paired with three vibes — boutique-institutional
          (Meridian), family-office heritage (Endowment), and design-agency /
          founder modern (Studio). Same hero copy, same case study, same
          component vocabulary across all of them, so the brand is the
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
            Compare side-by-side →
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
            label: "Brief",
            body: "Three vibes — boutique-institutional, family-office heritage, design-agency modern.",
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

      {/* Primary direction cards */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
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
            Round III · Current + three new options
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {primary.map((d) => (
            <DirectionCard key={d.key} d={d} />
          ))}
        </div>
      </section>

      {/* Round II reference */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 72px",
          borderTop: "1px solid #E4E4E7",
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
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
            Round II · Reference only
          </span>
          <span style={{ fontSize: 13, color: "#71717A" }}>
            Bureau Salon &amp; Atelier — kept here for context.
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {previous.map((d) => (
            <DirectionCard key={d.key} d={d} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DirectionCard({ d }: { d: DirectionPreview }) {
  return (
    <Link
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
              alt="Painted landscape"
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
            {d.badge}
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
              fontFamily: "var(--font-inter), system-ui, sans-serif",
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
  );
}
