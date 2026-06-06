export type DirectionKey =
  | "current"
  | "salon"
  | "atelier"
  | "meridian"
  | "endowment"
  | "studio";

export type Swatch = {
  name: string;
  role: string;
  hex: string;
  textOn?: "ink" | "paper";
};

export type Plate = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

export type DirectionData = {
  key: DirectionKey;
  name: string;
  shortName: string;
  era: string;
  voice: string;
  description: string;
  dateline: string;
  swatches: Swatch[];
  type: {
    display: { name: string; family: string; note: string };
    body: { name: string; family: string; note: string };
    mono: { name: string; family: string; note: string };
  };
  plates?: Plate[];
  /** When true, body copy renders in the serif family (var(--sg-serif)). */
  bodyIsSerif: boolean;
  /** When true, the monogram H is drawn as a circle (heritage marks); otherwise a rounded square. */
  monogramCircular?: boolean;
};

/**
 * Atelier landscape plates. Painted in the Hudson River School / Maxfield
 * Parrish vein — same heritage thesis (agricultural, industrial revolutions)
 * but rendered as romantic painted landscapes rather than literal engravings.
 * Reference: cora.computer's atmospheric full-bleed paintings.
 */
export const plates: Plate[] = [
  {
    src: "/styleguide/landscapes/pastoral-harvest.png",
    alt: "Painted landscape of golden wheat fields at harvest under a vast sky, with distant mountains and small figures of harvesters in the middle distance",
    label: "Pastoral · I",
    caption:
      "A working harvest. The first revolution capital ever underwrote was the agricultural one — and the land never stopped being the asset.",
  },
  {
    src: "/styleguide/landscapes/long-sky.png",
    alt: "Painted landscape of an enormous sky with luminous pink and gold cumulus clouds at sunset, a thin strip of pastoral land at the bottom",
    label: "Long View · II",
    caption:
      "Looking out, not down. Allocators play decade-long games. We brief the next decade.",
  },
  {
    src: "/styleguide/landscapes/river-valley-mill.png",
    alt: "Painted river valley landscape at sunset with a small Victorian textile mill on the distant horizon, smoke from chimneys rising into a luminous sky",
    label: "Confluence · III",
    caption:
      "Where the industrial revolution actually arrived — in a river bend, behind a stand of trees. The next one will arrive the same way.",
  },
];

export const directions: Record<DirectionKey, DirectionData> = {
  current: {
    key: "current",
    name: "Current — Product Lab",
    shortName: "Current",
    era: "Baseline · Today's live design",
    voice: "Transform your enterprise for the AI Era.",
    description:
      "Modular product-lab aesthetic with grid backgrounds, annotation tags, and status dots. Reads as 'thoughtful operator.' Clean, contemporary, lacks heritage weight.",
    dateline: "Live · Hyperactive.studio · 2026",
    bodyIsSerif: false,
    swatches: [
      { name: "Ink", role: "primary text", hex: "#141414", textOn: "paper" },
      { name: "Paper", role: "background", hex: "#FAFAFA", textOn: "ink" },
      { name: "Teal", role: "CTA · success", hex: "#0D9373", textOn: "paper" },
      { name: "Blue", role: "info · links", hex: "#2563EB", textOn: "paper" },
      { name: "Orange", role: "energy · alerts", hex: "#F06D2D", textOn: "paper" },
      { name: "Rule", role: "borders", hex: "#E4E4E7", textOn: "ink" },
    ],
    type: {
      display: {
        name: "Inter",
        family: "var(--font-inter)",
        note: "Geometric sans · -0.02em tracking · 600 weight",
      },
      body: {
        name: "Inter",
        family: "var(--font-inter)",
        note: "Same family as display · 16px body",
      },
      mono: {
        name: "JetBrains Mono",
        family: "var(--font-jetbrains-mono)",
        note: "Annotations · tags · IDs",
      },
    },
  },
  salon: {
    key: "salon",
    name: "Bureau · Salon",
    shortName: "Salon",
    era: "Round II · A — drawing-room edition",
    voice:
      "Counsel to capital, calibrated for the AI era.",
    description:
      "Bureau in its quietest register. No imagery. Typography does everything. The brand that lets a serif headline, a hairline rule, and twenty millimeters of whitespace carry the meaning. For the firm whose authority comes from what is not said.",
    dateline: "§ Hyperactive · Salon · 2026",
    bodyIsSerif: true,
    monogramCircular: true,
    swatches: [
      { name: "Charcoal", role: "primary text", hex: "#1A1A1A", textOn: "paper" },
      { name: "Ivory", role: "background", hex: "#F6F2EA", textOn: "ink" },
      { name: "Navy", role: "structural accent", hex: "#1B2A4E", textOn: "paper" },
      { name: "Verdigris", role: "rare accent", hex: "#5E7F6E", textOn: "paper" },
      { name: "Hairline", role: "0.5px rules", hex: "#D6CFC0", textOn: "ink" },
      { name: "Quiet", role: "subtle surface", hex: "#EDE8DD", textOn: "ink" },
    ],
    type: {
      display: {
        name: "EB Garamond",
        family: "var(--font-eb-garamond)",
        note: "Refined classical serif · 500 weight · italics for emphasis",
      },
      body: {
        name: "EB Garamond",
        family: "var(--font-eb-garamond)",
        note: "Body serif · 17/30 · generous whitespace",
      },
      mono: {
        name: "IBM Plex Mono",
        family: "var(--font-plex-mono)",
        note: "Classification labels only · all caps · 0.24em tracking",
      },
    },
  },
  atelier: {
    key: "atelier",
    name: "Bureau · Atelier",
    shortName: "Atelier",
    era: "Round II · B — painted edition",
    voice:
      "We belong in the lineage of revolutions that built the modern economy.",
    description:
      "Bureau with the heritage made visible — in oil paint, not in line engraving. Romantic painted landscapes (Hudson River School lineage, Maxfield Parrish atmosphere) frame the writing about AI. The same revolutions, but the pastoral side: the land institutional capital has always represented, with quiet industry at the horizon. Inspired by the painterly atmosphere of cora.computer.",
    dateline: "§ Hyperactive · Atelier · Plate I · 2026",
    bodyIsSerif: true,
    monogramCircular: true,
    swatches: [
      { name: "Night Ink", role: "primary text", hex: "#14202E", textOn: "paper" },
      { name: "Cream Stock", role: "background", hex: "#F2EAD7", textOn: "ink" },
      { name: "Sky Navy", role: "primary accent", hex: "#2B4A7A", textOn: "paper" },
      { name: "Harvest Gold", role: "warm accent", hex: "#B07A2C", textOn: "paper" },
      { name: "Verdigris", role: "structural accent", hex: "#3E5A4C", textOn: "paper" },
      { name: "Mortar", role: "secondary surface", hex: "#E5DCC4", textOn: "ink" },
    ],
    type: {
      display: {
        name: "EB Garamond",
        family: "var(--font-eb-garamond)",
        note: "Classical serif · 600 weight · works against painted landscapes",
      },
      body: {
        name: "EB Garamond",
        family: "var(--font-eb-garamond)",
        note: "Body serif · 17/30 · drop caps after section breaks",
      },
      mono: {
        name: "IBM Plex Mono",
        family: "var(--font-plex-mono)",
        note: "Plate labels · captions · footnotes",
      },
    },
    plates,
  },

  /* ------------------------------------------------------------------------
   * Round III — three new directions for review against Current.
   * Each is a single, self-contained vibe with explicit color contrast goals.
   * ---------------------------------------------------------------------- */

  meridian: {
    key: "meridian",
    name: "Meridian",
    shortName: "Meridian",
    era: "Round III · A — institutional dark",
    voice:
      "Boutique counsel for the firms that allocate to the AI era.",
    description:
      "Boutique McKinsey meets Palantir. Deep navy stage, off-white type, a single muted-peach accent doing all the structural work. Reads as institutional, premium, and unmistakably modern — the kind of dark surface a partner is comfortable opening on a phone in a black-tie. Sharp serif headlines over a tight Inter body, mono used like a Bloomberg ticker.",
    dateline: "Hyperactive · Meridian · MMXXVI",
    bodyIsSerif: false,
    swatches: [
      { name: "Deep Navy", role: "background", hex: "#0F172A", textOn: "ink" },
      { name: "Off White", role: "primary text", hex: "#F8FAFC", textOn: "paper" },
      { name: "Muted Peach", role: "accent · single", hex: "#F4A261", textOn: "paper" },
      { name: "Slate", role: "panel surface", hex: "#1E293B", textOn: "ink" },
      { name: "Slate Mid", role: "muted text", hex: "#94A3B8", textOn: "paper" },
      { name: "Hairline", role: "subtle rules", hex: "#334155", textOn: "ink" },
    ],
    type: {
      display: {
        name: "Source Serif 4",
        family: "var(--font-source-serif)",
        note: "Sharp institutional serif · 600 · McKinsey-shaped",
      },
      body: {
        name: "Inter Tight",
        family: "var(--font-inter-tight)",
        note: "Tight modern sans · Palantir-flavored UI",
      },
      mono: {
        name: "JetBrains Mono",
        family: "var(--font-jetbrains-mono)",
        note: "Tickers · IDs · classifications",
      },
    },
  },

  endowment: {
    key: "endowment",
    name: "Endowment",
    shortName: "Endowment",
    era: "Round III · B — family-office green",
    voice:
      "An advisor to long-tenured capital, in the year capital changed.",
    description:
      "Berkshire Hathaway energy for the AI era. Forest-green ink on warm cream paper, with a single restrained gold accent. The visual language of an endowment, a family office, or a 70-year-old PE firm — heritage you're not asked to perform, because the colors already do it. Likely the strongest fit if the buyers are CIOs of LPs and family offices.",
    dateline: "Hyperactive · Endowment · 2026",
    bodyIsSerif: true,
    monogramCircular: true,
    swatches: [
      { name: "Forest", role: "primary text", hex: "#163A2A", textOn: "paper" },
      { name: "Cream", role: "background", hex: "#F7F2E8", textOn: "ink" },
      { name: "Gold", role: "accent · structural", hex: "#C8A96A", textOn: "paper" },
      { name: "Forest Soft", role: "secondary text", hex: "#2E5340", textOn: "paper" },
      { name: "Cream Deep", role: "panel surface", hex: "#EDE6D2", textOn: "ink" },
      { name: "Hairline", role: "rules", hex: "#D9D2BE", textOn: "ink" },
    ],
    type: {
      display: {
        name: "Playfair Display",
        family: "var(--font-playfair)",
        note: "Refined heritage serif · 600 · for headlines",
      },
      body: {
        name: "Source Serif 4",
        family: "var(--font-source-serif)",
        note: "Warm, readable body serif · 17/30",
      },
      mono: {
        name: "IBM Plex Mono",
        family: "var(--font-plex-mono)",
        note: "Plate labels · footnotes · figures",
      },
    },
  },

  studio: {
    key: "studio",
    name: "Studio",
    shortName: "Studio",
    era: "Round III · C — founder edition",
    voice:
      "An AI studio for the founders rebuilding investing from scratch.",
    description:
      "High-end design agency meets Silicon Valley founder. Charcoal ink on near-white paper with one warm peach accent. Geometric Inter Tight everywhere, generous whitespace, almost no chrome. The most visually differentiated of the three — confident in its restraint, contemporary without being trendy. Reads as the studio that ships, not the firm that pitches.",
    dateline: "Hyperactive Studio · 2026",
    bodyIsSerif: false,
    swatches: [
      { name: "Charcoal", role: "primary text", hex: "#171717", textOn: "paper" },
      { name: "White", role: "background", hex: "#FAFAFA", textOn: "ink" },
      { name: "Peach", role: "accent · single", hex: "#E79C7D", textOn: "paper" },
      { name: "Charcoal Soft", role: "secondary text", hex: "#404040", textOn: "paper" },
      { name: "Stone", role: "panel surface", hex: "#F4F4F5", textOn: "ink" },
      { name: "Hairline", role: "rules", hex: "#E5E5E5", textOn: "ink" },
    ],
    type: {
      display: {
        name: "Inter Tight",
        family: "var(--font-inter-tight)",
        note: "Geometric sans · 700 · -0.025em tracking · big and quiet",
      },
      body: {
        name: "Inter Tight",
        family: "var(--font-inter-tight)",
        note: "Same family · 16/28 · generous whitespace",
      },
      mono: {
        name: "JetBrains Mono",
        family: "var(--font-jetbrains-mono)",
        note: "Captions · IDs · footnotes",
      },
    },
  },
};
