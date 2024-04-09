import './styles.css';
import { useState, useEffect } from 'react';
import { BoxView } from '../BoxView';
import { ConnectionsView } from '../ConnectionsView';
import { BackendData, Box, Connection, ResultItem } from '../../data/data';

export const App = (): JSX.Element => {
  const [diagrams, setDiagrams] = useState<ResultItem | null>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('http://localhost:4000/api/diagrams');
      const data = (await response.json()) as BackendData;

      setDiagrams(data.result[0]);
      setBoxes(data.result[0].boxes);
      setConnections(data.result[0].connections);
    };

    fetchData();
  }, []);

  return (
    <div className="layout">
      <header className="header">
        <h1>{diagrams !== null ? diagrams.title : null}</h1>
        <div className="label-field">
          <label htmlFor="box-label">Label:</label>
          <input type="text" id="box-label" disabled />
        </div>
      </header>
      <svg className="board">
        {connections.map((line, index) => {
          let from = boxes[line.from];
          let to = boxes[line.to];
          return (
            <ConnectionsView
              key={index}
              posX1={from.posX + from.width / 2}
              posY1={from.posY + from.height / 2}
              posX2={to.posX + to.width / 2}
              posY2={to.posY + to.height / 2}
            />
          );
        })}
        {boxes.map((box) => (
          <BoxView
            key={box.label}
            label={box.label}
            width={box.width}
            fill={box.fill}
            height={box.height}
            posX={box.posX}
            posY={box.posY}
          />
        ))}
      </svg>
    </div>
  );
};
