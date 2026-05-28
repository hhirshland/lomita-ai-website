export type DirectionKey = "current" | "salon" | "atelier";

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
    era: "Variant A · The drawing-room edition",
    voice:
      "Counsel to capital, calibrated for the AI era.",
    description:
      "Bureau in its quietest register. No imagery. Typography does everything. The brand that lets a serif headline, a hairline rule, and twenty millimeters of whitespace carry the meaning. For the firm whose authority comes from what is not said.",
    dateline: "§ Hyperactive · Salon · 2026",
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
    era: "Variant B · The painted edition",
    voice:
      "We belong in the lineage of revolutions that built the modern economy.",
    description:
      "Bureau with the heritage made visible — in oil paint, not in line engraving. Romantic painted landscapes (Hudson River School lineage, Maxfield Parrish atmosphere) frame the writing about AI. The same revolutions, but the pastoral side: the land institutional capital has always represented, with quiet industry at the horizon. Inspired by the painterly atmosphere of cora.computer.",
    dateline: "§ Hyperactive · Atelier · Plate I · 2026",
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
};
