import { createGlobalStyle } from 'styled-components';
// import { githubBackground } from './assets/github-background.svg';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    // background: #f0f0f5 url() no-repeat 70% top;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
