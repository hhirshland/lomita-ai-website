import { directions, type DirectionKey } from "./directions";
import DirectionSwitcher from "./DirectionSwitcher";
import Masthead from "./Masthead";
import TypeSpecimen from "./TypeSpecimen";
import ColorSwatches from "./ColorSwatches";
import ComponentSamples from "./ComponentSamples";
import SectionHero from "./SectionHero";
import SectionServices from "./SectionServices";
import SectionCaseStudy from "./SectionCaseStudy";
import Signature from "./Signature";

type Props = {
  direction: DirectionKey;
};

export default function DirectionPage({ direction }: Props) {
  const data = directions[direction];

  return (
    <div data-direction={direction} className="sg-root">
      <DirectionSwitcher active={direction} />
      <Masthead direction={data} />
      <TypeSpecimen direction={data} />
      <ColorSwatches direction={data} />
      <ComponentSamples direction={data} />
      <SectionHero direction={data} />
      <SectionServices direction={data} />
      <SectionCaseStudy direction={data} />
      <Signature direction={data} />
    </div>
  );
}
