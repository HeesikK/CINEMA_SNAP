import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import DetailPage from "../page/detail";
import SearchPage from "../page/search";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
