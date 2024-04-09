interface Props {
  label: string;
  width: number;
  fill: string;
  height: number;
  posX: number;
  posY: number;
}

export const BoxView = ({
  width,
  label,
  fill,
  height,
  posX,
  posY,
}: Props): JSX.Element => {
  return (
    <g>
      <rect
        x={posX}
        y={posY}
        rx="5"
        ry="5"
        width={width}
        height={height}
        fill={fill}
        stroke="white"
        strokeWidth="2"
      ></rect>
      <text
        className="label"
        x={posX + width / 2}
        y={posY + height / 2}
        text-anchor="middle"
        alignment-baseline="central"
      >
        {label}
      </text>
    </g>
  );
};
