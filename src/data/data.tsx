export interface ResultItem {
  id: number;
  title: string;
  boxes: Box[];
  connections: Connection[];
}

export interface Box {
  posX: number;
  posY: number;
  width: number;
  height: number;
  fill: string;
  label: string;
}

export interface Connection {
  from: number;
  to: number;
}

export interface BackendData {
  status: string;
  result: ResultItem[];
}
