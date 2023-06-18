import React, { useState } from "react";
import styled from "styled-components";

const Tile = styled.button`
  width: 5em;
  height: 5em;
  border: 3px solid white;
  border-radius: 0.4em;
  font-size: 2.5em;
  font-family: monospace;

  &:hover {
    color: white;
    background-color: ${(props) => (!props.turn ? "#FE6B6B" : "#6B83FE")};
    border: 1px solid ${(props) => (!props.turn ? "#F90101" : "#0132F9")};
    cursor:pointer;
  }
`;

const SquareTile = (props) => {
  const [stateSqaure, setStateSquare] = useState(true);
  const [typeOfSqaure, setTypeOFSqaure] = useState("");

  const tileClickHandler = () => {
    if (props.turn) {
      setTypeOFSqaure("X");
      props.setTurn(false);
    } else {
      setTypeOFSqaure("O");
      props.setTurn(true);
    }
    setStateSquare(false);
  };

  return (
    <Tile
      id={props.id}
      onClick={stateSqaure ? tileClickHandler : null}
      turn={+props.turn}
    >
      {typeOfSqaure}
    </Tile>
  );
};

export default React.memo(SquareTile);
