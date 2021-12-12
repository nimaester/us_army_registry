import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <h1>US Army Registry</h1>
      </div>
    </>
  );
};

export default App;
