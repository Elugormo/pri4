import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./ChessBoard.css";
export const ChessBoard = ({ positions }) => {
  return (
    <Container>
      <Table className="main-container">
        <tbody>
          {positions.map((row, idx) => (
            <tr className="row">
              <th>{idx + 1}</th>
              {row.map((piece, parityIdx) => (
                <td className="cell">
                  <img src={piece.src} />
                </td>
              ))}
            </tr>
          ))}
          <tr className="row">
            <td></td>
            {["a", "b", "c", "d", "e", "f", "g", "h"].map((el) => (
              <td className="table-data">{el}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
