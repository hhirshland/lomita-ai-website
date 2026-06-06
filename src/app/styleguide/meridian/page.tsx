import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian — Hyperactive Styleguide",
  description:
    "Round III · A. Boutique McKinsey + Palantir, in the dark. Deep navy, off-white type, single muted-peach accent. Institutional, premium, modern.",
};

export default function MeridianPage() {
  return <DirectionPage direction="meridian" />;
}
