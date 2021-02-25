import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export const ChessBoard = ({ positions }) => {
  return (
    <Container>
      <Table style={{ margin: "15px auto" }} striped bordered hover size="sm">
        <tbody>
          {positions.map((row) => (
            <tr>
              {row.map((piece, parityIdx) => (
                <td
                  style={
                    parityIdx % 2 === 0
                      ? { background: "red" }
                      : { background: "green" }
                  }
                >
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
