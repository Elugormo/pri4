import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export const ChessBoard = ({ positions }) => {
  return (
    <Container>
      <Table  style={{ margin: "15px auto" }} striped bordered hover size="sm">
        <tbody>
          {positions.map((row) => (
            <tr className="row">
              {row.map((piece, parityIdx) => (
                <td className="cell">
                  <img src={piece.src} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
