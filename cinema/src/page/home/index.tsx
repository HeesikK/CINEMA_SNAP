import { useQuery } from "react-query";
import { getHomePageMovieList } from "../../api/api";
import { Movie } from "../../type/movie-type";
import MovieList from "./component/movie-list";

const HomePage = () => {
  const { data: movieList } = useQuery("movieList", () => getHomePageMovieList());
  console.log(movieList);

  const movieData: Movie[] = movieList && movieList.results;
  console.log("영화 데이터값은?", movieData);

  return (
    <>
      <MovieList />
    </>
  );
};

export default HomePage;
