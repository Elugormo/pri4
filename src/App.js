import logo from "./logo.svg";
import "./App.css";
import { ChessBoard } from "./ChessBoard";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
};

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
      <Container style={styles}>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="https://www.chess.com/learn-how-to-play-chess">
              How to play chess
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              href="https://www.chess.com/puzzles/problem/42342"
              eventKey="link-1"
            >
              Chess Problem
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default App;
