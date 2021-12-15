import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./assets/armyLogo.png";
import Soldiers from "./Soldiers.js";
import Options from "./Options";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  tr{
      background-color: #D0DEF0;
    }
  tr:nth-of-type(2n) {
    background-color: #E9EFF5;
  }
  td {
    padding: 0 0.2rem;
  }

  button:hover {
    cursor: pointer;
  }
  a {
    color: black;
  }
 
`;

const StyledMain = styled.div`
  max-width: 1400px;
`;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
`;

const StyledLogo = styled.img`
  margin-right: 2rem;
  width: 4rem;
`;

const App = () => {
  return (
    <StyledMain>
      <GlobalStyles />
      <StyledHeader>
        <StyledLogo src={logo} alt='army_logo' />
        <h2>US Army Personell Registry</h2>
      </StyledHeader>
      <Options />
      <StyledApp>
        <Soldiers />
      </StyledApp>
    </StyledMain>
  );
};

export default App;
