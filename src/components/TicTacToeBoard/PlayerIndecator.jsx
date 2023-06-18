import React from "react";
import styled from "styled-components";

const Player = styled.h1`
  font-family: monospace;
  font-size: 3em;
  text-align: center;
`;

const PlayerIndecator = (props) => {
  return <Player>{props.turn ? "Player 1 (X)" : "Player 2 (O)"}</Player>;
};

export default PlayerIndecator;
