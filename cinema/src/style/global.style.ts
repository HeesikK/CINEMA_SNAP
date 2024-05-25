import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { flexCenter } from "./common.style";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    width: 100%;
    min-height: 100vh; 
    margin: 0;
    padding: 0;
    ${flexCenter}
    background-color: ${({ theme }) => theme.COLORS.white};
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
