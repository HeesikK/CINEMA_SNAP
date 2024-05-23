import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
  list-style: none;
}
body{
  background-color: #FFFFFF,
}
button,input{
  border: none;
}

`;

export default GlobalStyles;
