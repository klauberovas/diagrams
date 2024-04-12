import './styles.css';
import { useState, useEffect, useRef } from 'react';
import { BoxView } from '../BoxView';
import { ConnectionsView } from '../ConnectionsView';
import { BackendData, Box, Connection, ResultItem } from '../../data/data';

export const App = (): JSX.Element => {
  type Nullable<T> = T | null;

  const [diagrams, setDiagrams] = useState<ResultItem | null>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<Nullable<number>>(null);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);
  const textInputRef = useRef<HTMLInputElement>(null);

  //stáhnutí dat z API
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

  //vytváření nových boxů
  const handleBoardClick = (
    event: React.MouseEvent<SVGSVGElement> | React.MouseEvent<HTMLInputElement>,
  ): void => {
    if (event.ctrlKey) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.x;
      const y = event.clientY - rect.y;

      const newBox: Box = {
        posX: x,
        posY: y,
        width: 160,
        height: 40,
        fill: 'white',
        label: 'Nová položka',
      };
      setBoxes([...boxes, newBox]);
    }
    //input není focus => vynuluj selectedIndex
    else if (textInputRef.current !== document.activeElement) {
      setSelectedIndex(null);
    }
  };

  //při kliknutí na box, focus na input
  const handleBoxClick = (index: number): void => {
    setSelectedIndex(index);
    setIsInputDisabled(false);
    console.log('index boxu:', selectedIndex);
    textInputRef.current?.focus();
    textInputRef.current?.select();
  };

  //přidání hodnoty z inputu do box.label
  const updateBoxLabel = (): void => {
    if (selectedIndex !== null && textInputRef.current !== null) {
      //vytvoření kopie pole
      const updatedBoxes = [...boxes];
      //aktualizace labelu vybraného boxu
      updatedBoxes[selectedIndex].label = textInputRef.current.value;
      //nastavení nového stavu s labelem daného boxu
      setBoxes(updatedBoxes);
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <h1>{diagrams !== null ? diagrams.title : null}</h1>
        <div className="label-field">
          <label htmlFor="box-label">Label:</label>
          <input
            type="text"
            ref={textInputRef}
            value={selectedIndex !== null ? boxes[selectedIndex].label : ''}
            onChange={() => updateBoxLabel()}
            id="box-label"
            disabled={isInputDisabled}
          />
        </div>
      </header>
      <svg className="board" onClick={handleBoardClick}>
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
        {boxes.map((box, index) => (
          <g key={index} onClick={() => handleBoxClick(index)}>
            <BoxView
              label={box.label}
              width={box.width}
              fill={box.fill}
              height={box.height}
              posX={box.posX}
              posY={box.posY}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
