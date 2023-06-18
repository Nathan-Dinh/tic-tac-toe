import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./ButtonCard";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #f3f2f2;
  opacity: 0.9;
`;

const Model = styled.div`
  font-size: 2em;
  position: fixed;
  text-align: center;
  width: 100%;
  top: 5em;
  z-index: 10;
  font-family: monospace;
`;

const BackdropOverlay = () => {
  return <Backdrop />;
};

const ModalOverlay = (props) => {
  return (
    <Model>
      <header>
        <h2>{props.winnerName}</h2>
      </header>
      <Button onClick={props.resetState}>Reset Board</Button>
    </Model>
  );
};

const WinnerModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackdropOverlay />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay winnerName={props.winnerName} resetState={props.reset} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default WinnerModel;
