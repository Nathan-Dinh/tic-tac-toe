import React from "react";
import Board from "./components/TicTacToeBoard/Board";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Board />
    </React.Fragment>
  );
}

export default App;
