import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current · Product Lab — Hyperactive Styleguide",
  description:
    "The current Hyperactive design (Product Lab) wrapped onto the shared styleguide blocks as a baseline for comparison.",
};

export default function CurrentPage() {
  return <DirectionPage direction="current" />;
}
