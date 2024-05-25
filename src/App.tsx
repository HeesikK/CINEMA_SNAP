import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.style";
import GlobalStyles from "./style/global.style";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
