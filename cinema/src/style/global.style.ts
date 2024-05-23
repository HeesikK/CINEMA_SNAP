import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
  }
  button, input {
    border: none;
  }
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
