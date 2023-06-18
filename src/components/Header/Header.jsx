import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Head = styled.header`
  display: flex;
  background-color: #ff6666;
  font-family: monospace;
  justify-content: space-evenly;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;

  & div {
    font-size: 1.5em;
    padding: 0 2em;
  }

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }

  & a:hover {
    color: white !important;
  }
`;

const Name = styled.h1`
  font-size: 2em;
`;

const Header = () => {
  return (
    <Head>
      <div>
        <Name>Nathan Dinh</Name>
      </div>
      <Navigation>
        <div>
          <a href="#">
            <AiFillLinkedin />
            Linkined
          </a>
        </div>
        <div>
          <a href="#">
            <AiFillGithub />
            GitHub
          </a>
        </div>
      </Navigation>
    </Head>
  );
};

export default Header;
