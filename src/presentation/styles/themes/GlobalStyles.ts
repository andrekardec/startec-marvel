import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};

    overflow-y: scroll;
    overflow-x: hidden;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  a {
    color: var(--white);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    --gray: #1D1D1D;
    --gray400: #262626;
    --white: ##F5F5F5;
    --black: #000000;
  }
`;
