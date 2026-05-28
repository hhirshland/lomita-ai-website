import type { Metadata } from "next";
import {
  Playfair_Display,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Source_Serif_4,
  Inter_Tight,
  EB_Garamond,
} from "next/font/google";
import "./styles/themes.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Styleguide — Hyperactive",
  description:
    "Four brand directions for Hyperactive — Current (Product Lab), Foundry, Broadsheet, Bureau — themed via scoped CSS variables for apples-to-apples comparison.",
};

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        playfair.variable,
        plexSans.variable,
        plexMono.variable,
        sourceSerif.variable,
        interTight.variable,
        ebGaramond.variable,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
