import './styles.css';

export const App = (): JSX.Element => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Název diagramu</h1>
        <div className="label-field">
          <label htmlFor="box-label">Label:</label>
          <input type="text" id="box-label" disabled />
        </div>
      </header>
      <svg className="board">
        <line
          x1="100"
          y1="75"
          x2="250"
          y2="75"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="75"
          x2="100"
          y2="175"
          stroke="white"
          strokeWidth="2"
        />
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
            Box 1
          </text>
        </g>
        <g>
          <rect>
            x="200" y="50" rx="5" ry="5" width="100" height="50" fill="orange"
            stroke="white" strokeWidth="2"
          </rect>
        </g>
        <text>
          className="label" x="250" y="75" text-anchor="middle"
          alignment-baseline="central" Box 2
        </text>

        <g>
          <rect>
            x="50" y="150" rx="5" ry="5" width="100" height="50" fill="orange"
            stroke="white" strokeWidth="2"
          </rect>
        </g>
        <text
          className="label"
          x="100"
          y="175"
          text-anchor="middle"
          alignment-baseline="central"
        >
          Box 3
        </text>
      </svg>
    </div>
  );
};
