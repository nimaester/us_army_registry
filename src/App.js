import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./assets/armyLogo.png";
import Soldiers from "./Soldiers.js";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const StyledApp = styled.div``;

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
    <>
      <GlobalStyles />
      <StyledApp>
        <StyledHeader>
          <StyledLogo src={logo} alt='army_logo' />
          <h2>US Army Personell Registry</h2>
        </StyledHeader>
        <Soldiers />
      </StyledApp>
    </>
  );
};

export default App;
