import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getHomePageMovieList } from "../../../api/api";
import styled from "styled-components";

const Banner = () => {
  const { data: bannerMovieList } = useQuery([QUERY_KEY.MovieList], () => getHomePageMovieList({ paramKeyword: "popular", pageParam: 1 }));

  console.log(bannerMovieList);

  return <></>;
};

export default Banner;
