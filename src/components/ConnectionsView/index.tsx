interface Props {
  posX1: number;
  posY1: number;
  posX2: number;
  posY2: number;
}

export const ConnectionsView = ({
  posX1,
  posY1,
  posX2,
  posY2,
}: Props): JSX.Element => {
  return (
    <line
      x1={posX1}
      y1={posY1}
      x2={posX2}
      y2={posY2}
      stroke="white"
      strokeWidth="2"
    />
  );
};
