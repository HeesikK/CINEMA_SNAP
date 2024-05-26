import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import DetailPage from "../page/detail";
import SearchPage from "../page/search";
import Layout from "../layout/layout";
import MovieList from "../page/list/component/movie-list";

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
        path: "/:movieList",
        element: <MovieList />,
      },
      {
        path: "/:movie/:detail",
        element: <DetailPage />,
      },
      {
        path: "/movie/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
