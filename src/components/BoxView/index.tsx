interface Props {
  number: number;
}

export const BoxView = ({ number }: Props): JSX.Element => {
  return (
    <g>
      <rect>
        x="50" y="50" rx="5" ry="5" width="100" height="50" fill="orange"
        stroke="white" strokeWidth="2"
      </rect>
      <text
        className="label"
        x="100"
        y="75"
        text-anchor="middle"
        alignment-baseline="central"
      >
        Box {number}
      </text>
    </g>
  );
};
