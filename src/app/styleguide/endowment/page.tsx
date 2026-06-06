import DirectionPage from "../_components/DirectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endowment — Hyperactive Styleguide",
  description:
    "Round III · B. Family-office green and gold on cream paper. Berkshire Hathaway energy for the AI era — heritage you don't have to perform.",
};

export default function EndowmentPage() {
  return <DirectionPage direction="endowment" />;
}
