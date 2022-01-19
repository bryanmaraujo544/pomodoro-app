import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    height: 100%;
    width: 100%;
    max-width: 100vw;
  }

  * {
    font-family: 'Fredoka One', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    appearance: none;
    border: none;
    text-decoration: none;
  }

`;