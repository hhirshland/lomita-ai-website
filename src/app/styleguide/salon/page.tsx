import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bureau · Salon — Hyperactive Styleguide",
  description:
    "Bureau Variant A: patrician restraint, pure typography, no imagery. The drawing-room version of Hyperactive.",
};

export default function SalonPage() {
  return <DirectionPage direction="salon" />;
}
