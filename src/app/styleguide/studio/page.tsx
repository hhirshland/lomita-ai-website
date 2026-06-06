import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — Hyperactive Styleguide",
  description:
    "Round III · C. Charcoal on white, single peach accent. Silicon Valley founder · high-end design agency. The most visually differentiated of the three.",
};

export default function StudioPage() {
  return <DirectionPage direction="studio" />;
}
