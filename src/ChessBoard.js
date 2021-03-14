import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export const ChessBoard = ({ positions }) => {
  return (
    <Container>
      <Table style={{ width: "unset", margin: "15px auto" }}>
        <tbody>
          {positions.map((row) => (
            <tr className="row">
              {row.map((piece, parityIdx) => (
                <td style={{ width: "100px" }} className="cell">
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
