import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import DetailPage from "../page/detail";
import SearchPage from "../page/search";

const router = createBrowserRouter([
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
]);

export default router;
