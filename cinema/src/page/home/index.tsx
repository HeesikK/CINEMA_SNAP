import { useQuery } from "react-query";
import { getHomePageMovieList } from "../../api/api";

const HomePage = () => {
  const { data: MovieList } = useQuery("movieList", () => getHomePageMovieList());
  console.log(MovieList);

  return (
    <div>
      {/* {MovieList.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))} */}
    </div>
  );
};

export default HomePage;
