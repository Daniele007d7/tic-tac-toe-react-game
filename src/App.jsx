import { useState } from "react";
import { useEffect } from "react";

function Square({ handleClick, value }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  useEffect(() => {
    function checkWinner() {
      let realTurn;
      console.log("checkWinner", turn);
      if (turn === "X") {
        realTurn = "O";
      } else {
        realTurn = "X";
      }
      console.log("real turn", realTurn);
      for (let i = 0; i < combination.length; i++) {
        if (
          realTurn == squares[combination[i][0]] &&
          realTurn == squares[combination[i][1]] &&
          realTurn == squares[combination[i][2]]
        ) {
          console.log(`ha vinto ${realTurn}`);
        }
      }
    }
    checkWinner();
  }, [squares]);

  function squareClick(i) {
    let newSquares = squares.slice();

    if (!newSquares[i]) {
      newSquares[i] = turn;
      setSquares(newSquares);
      setTurn(turn == "O" ? "X" : "O");
    }
  }

  return (
    <>
      <div id="grid">
        <Square
          value={squares[0]}
          handleClick={() => {
            squareClick(0);
          }}
        ></Square>
        <Square
          value={squares[1]}
          handleClick={() => {
            squareClick(1);
          }}
        ></Square>
        <Square
          value={squares[2]}
          handleClick={() => {
            squareClick(2);
          }}
        ></Square>
        <Square
          value={squares[3]}
          handleClick={() => {
            squareClick(3);
          }}
        ></Square>
        <Square
          value={squares[4]}
          handleClick={() => {
            squareClick(4);
          }}
        ></Square>
        <Square
          value={squares[5]}
          handleClick={() => {
            squareClick(5);
          }}
        ></Square>
        <Square
          value={squares[6]}
          handleClick={() => {
            squareClick(6);
          }}
        ></Square>
        <Square
          value={squares[7]}
          handleClick={() => {
            squareClick(7);
          }}
        ></Square>
        <Square
          value={squares[8]}
          handleClick={() => {
            squareClick(8);
          }}
        ></Square>
      </div>
    </>
  );
}
