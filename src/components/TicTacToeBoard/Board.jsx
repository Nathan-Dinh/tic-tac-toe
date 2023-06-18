import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import SquareTile from "./SquareTile";
import PlayerIndecator from "./PlayerIndecator";
import WinnerModel from "../UI/WinnerModel.jsx";

const TicTacToeBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
`;

const winConditions = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6],
];

const winnerReducer = (state, action) => {
  if (action.type === "winner") {
    return { winnerName: action.winnerName, winnerFound: action.winnerFound };
  }
  if (action.type === "winnerReset") {
    return { winnerName: action.winnerName, winnerFound: action.winnerFound };
  }
  return { winnerName: "", winnerFound: false };
};

const Board = () => {
  const [turn, setTurn] = useState(true);
  const [winner, dispatchWinner] = useReducer(winnerReducer, {
    winnerName: "",
    winnerFound: false,
  });

  let totalBoardSize = [];
  for (let i = 0; i < 9; i++) {
    totalBoardSize.push(i);
  }

  const resetState = () => {
    dispatchWinner({ type: "winnerReset", winnerName: "", winnerFound: false });
  };

  useEffect(() => {
    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        document.getElementById(a).innerHTML === "X" &&
        document.getElementById(b).innerHTML === "X" &&
        document.getElementById(c).innerHTML === "X"
      ) {
        console.log("dasd");
        return dispatchWinner({
          type: "winner",
          winnerName: "Player 1 Wins",
          winnerFound: true,
        });
      } else if (
        document.getElementById(a).innerHTML === "O" &&
        document.getElementById(b).innerHTML === "O" &&
        document.getElementById(c).innerHTML === "O"
      ) {
        return dispatchWinner({
          type: "winner",
          winnerName: "Player 2 Wins",
          winnerFound: true,
        });
      }
    }
    if (
      document.getElementById(0).innerHTML != "" &&
      document.getElementById(1).innerHTML != "" &&
      document.getElementById(2).innerHTML != "" &&
      document.getElementById(3).innerHTML != "" &&
      document.getElementById(4).innerHTML != "" &&
      document.getElementById(5).innerHTML != "" &&
      document.getElementById(6).innerHTML != "" &&
      document.getElementById(7).innerHTML != "" &&
      document.getElementById(8).innerHTML != ""
    ) {
      return dispatchWinner({
        type: "winner",
        winnerName: "No One wins",
        winnerFound: true,
      });
    }
  }, [turn]);

  return (
    <React.Fragment>
      {winner.winnerFound && (
        <WinnerModel winnerName={winner.winnerName} reset={resetState} />
      )}
      <PlayerIndecator turn={turn} />
      <TicTacToeBoard>
        {!winner.winnerFound &&
          totalBoardSize.map((tileNumber) => {
            return (
              <SquareTile
                key={tileNumber}
                id={tileNumber}
                turn={turn}
                setTurn={setTurn}
              />
            );
          })}
      </TicTacToeBoard>
    </React.Fragment>
  );
};

export default Board;
