import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bureau · Atelier — Hyperactive Styleguide",
  description:
    "Bureau Variant B: heritage made visible. Victorian wood engravings frame the AI argument. The illustrated edition.",
};

export default function AtelierPage() {
  return <DirectionPage direction="atelier" />;
}
