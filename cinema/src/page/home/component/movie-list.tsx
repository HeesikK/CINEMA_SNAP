import { useInfiniteQuery } from "react-query";
import { Grid, Container } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovie from "../../../component/one-movie";
import { Movie } from "../../../type/movie-type";
import { getHomePageMovieList } from "../../../api/api";

const MovieList = () => {
  const {
    data: movieList,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["movieList"],
    queryFn: ({ pageParam = 1 }) => getHomePageMovieList(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log(movieList);

  return (
    <CinemaContainer>
      <Grid container spacing={2}>
        {movieList?.pages.map((page, idx) => {
          const movieList = page.results;
          return movieList?.map((movie: Movie) => (
            <CinemaGrid item xs={6} md={3} key={movie.id}>
              <OneMovie title={movie.title} id={movie.id} poster={movie.poster_path} rate={movie.vote_average} overview={movie.overview} adult={movie.adult} />
            </CinemaGrid>
          ));
        })}
        <button onClick={() => fetchNextPage()}>패칭</button>
      </Grid>
    </CinemaContainer>
  );
};

export default MovieList;

const CinemaContainer = styled(Container)`
  margin-top: 160px;
  ${flexCenter}
  width: 100%;
  background-color: #fdfceb;
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;
