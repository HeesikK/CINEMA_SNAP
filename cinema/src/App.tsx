import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.style";
import GlobalStyles from "./style/global.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
