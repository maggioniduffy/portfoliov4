// Nested topographic rings, used behind the hero and the contact section.
const RING =
  "M50 18C68 16 84 30 83 49C82 68 70 84 50 83C31 82 16 70 18 50C20 31 33 19 50 18Z";

export default function Contours({
  cx,
  cy,
  rings,
}: {
  cx: number;
  cy: number;
  rings: [scale: number, rotate: number][];
}) {
  return (
    <>
      {rings.map(([s, r]) => (
        <path
          key={s}
          vectorEffect="non-scaling-stroke"
          transform={`translate(${cx} ${cy}) scale(${s}) rotate(${r}) translate(-50 -50)`}
          d={RING}
        />
      ))}
    </>
  );
}
