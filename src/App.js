import React from "react";
import { createGlobalStyle } from "styled-components";
const faker = require("faker");

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <h1>US Army Registry</h1>
        <img src={faker.image.abstract()} alt='none' />
      </div>
    </>
  );
};

export default App;
