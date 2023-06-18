import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #1173e5;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 17px 36px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;

  &:hover {
    background-color: #0156d7;
    cursor: pointer;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const ButtonCard = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default ButtonCard;
