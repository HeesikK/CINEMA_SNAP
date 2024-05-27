import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getSearchMovie } from "../../../api/api";
import { useSearchParams } from "react-router-dom";

const SearchMovieList = () => {
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  const { data: searchMovie } = useQuery([QUERY_KEY.SearchMovie, keyword], () => getSearchMovie(keyword as string), {
    enabled: !!keyword,
  });

  console.log(searchMovie);

  return <>하위</>;
};

export default SearchMovieList;
