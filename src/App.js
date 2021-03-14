import logo from "./logo.svg";
import "./App.css";
import { ChessBoard } from "./ChessBoard";
import { Header } from "./Header";

let positions = [
  [
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bb.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bk.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
  ],
  [
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bn.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bb.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/bp.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
  ],
  [
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/br.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wr.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wr.png",
    },
    {
      src: null,
    },
  ],
];

function App() {
  return (
    <div className="App">
      <Header />
      <ChessBoard positions={positions} />
    </div>
  );
}

export default App;
