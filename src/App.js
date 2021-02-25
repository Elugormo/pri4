import logo from "./logo.svg";
import "./App.css";
import { ChessBoard } from "./ChessBoard";

let positions = [
  [
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bb.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bk.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
  ],
  [
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bn.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bb.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
  ],
  [
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/bp.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
  ],
  [
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
  ],
  [
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
  ],
  [
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: null,
    },
  ],
  [
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
  ],
  [
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/br.png",
    },
    {
      src: null,
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/wr.png",
    },
    {
      src:
        "https://images.chesscomfiles.com/chess-themes/pieces/neo/100/wr.png",
    },
    {
      src: null,
    },
  ],
];

function App() {
  return (
    <div className="App">
      <ChessBoard positions={positions} />
    </div>
  );
}

export default App;
