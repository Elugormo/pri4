import React from "react";
import Nav from "react-bootstrap/Nav";
export const LinkFotter = () => {
  return (
    <div>
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
    </div>
  );
};
