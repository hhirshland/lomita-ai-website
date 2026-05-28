import Image from "next/image";
import type { Plate } from "./directions";

type Props = {
  plate: Plate;
  showCaption?: boolean;
  aspectRatio?: string;
  priority?: boolean;
};

/**
 * PaintedPlate — Atelier-only. Renders one of the romantic painted landscape
 * plates (Hudson River School / Maxfield Parrish lineage) inside a clean
 * unframed presentation with a small label and italic caption beneath.
 * Reference: cora.computer's atmospheric painted opener treatment.
 */
export default function PaintedPlate({
  plate,
  showCaption = true,
  aspectRatio = "3 / 2",
  priority = false,
}: Props) {
  return (
    <figure
      className="sg-plate"
      style={{
        margin: 0,
        display: "block",
      }}
    >
      <div className="sg-plate-inner" style={{ aspectRatio }}>
        <Image
          src={plate.src}
          alt={plate.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="sg-landscape-img"
          priority={priority}
        />
      </div>
      {showCaption && (
        <figcaption className="sg-plate-caption">
          <span className="sg-plate-label">{plate.label}</span>
          {plate.caption}
        </figcaption>
      )}
    </figure>
  );
}
