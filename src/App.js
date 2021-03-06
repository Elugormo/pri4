import "./App.css";
import { ChessBoard } from "./components/ChessBoard/ChessBoard";
import { Header } from "./components/Header/Header";
import { Container, Row } from "react-bootstrap";

import { LinkFotter } from "./components/LinkFotter";
import { ChartBoard } from "./components/ChartBoard";
import { Timer } from "./components/Timer";

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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wn.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wp.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wb.png",
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
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wb.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wn.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wp.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wp.png",
    },
  ],
  [
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wr.png",
    },
    {
      src: null,
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wq.png",
    },
    {
      src: null,
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wr.png",
    },
    {
      src: "https://images.chesscomfiles.com/chess-themes/pieces/neo/80/wk.png",
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
      <Container className="footer">
        <Row className="align-items-center">
          <ChartBoard />
          <LinkFotter />
          <Timer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
