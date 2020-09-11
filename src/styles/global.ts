import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #F9F9F9;
    --color-secondary: #111111;
    --color-teriary: #5CD0FE;

    --gray: #777;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-primary);
    color: var(--color-secondary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  button {
    cursor: pointer;
  }
`;
