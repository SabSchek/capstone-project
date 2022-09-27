import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  border-radius: 30px;
    
  }

  body {
    font-family: 'Roboto', sans-serif;
    border: 5px solid black;
  max-width: 390px;
  max-height: 844px;
    padding: 2w;
  }
`;

export default GlobalStyle;
