import React from "react";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  background-color: #ff6666;
  font-family: monospace;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5em;
`;

const Navigation = styled.nav`
  display: flex;

  & div {
    font-size: 1.5em;
    padding: 0 1em;
  }

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
  }

  & a:hover {
    color: white !important;
  }
`;

const navItems = [
  {
    name: "Github",
    href: "https://github.com/Nathan-Dinh",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nathan-dinh-8782a6215/",
  },
];

const Header = () => {
  return (
    <Head>
      <Navigation>
        {navItems.map((item) => {
          return (
            <div>
              <a href={item.href} rel="noopener nofollow">
                {item.name}
              </a>
            </div>
          );
        })}
      </Navigation>
    </Head>
  );
};

export default Header;
