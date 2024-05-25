import { useInfiniteQuery } from "react-query";
import { Grid, Container, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovie from "../../../component/one-movie";
import { Movie } from "../../../type/movie-type";
import { getHomePageMovieList } from "../../../api/api";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../../../const/query-key";

const MovieList = () => {
  const param = useParams();
  let paramKeyword = param.movie || "popular";
  console.log("키워드는?", paramKeyword);

  const {
    data: movieList,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MovieList, paramKeyword],
    queryFn: ({ pageParam = 1 }) => getHomePageMovieList({ paramKeyword, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });

  return (
    <CinemaContainer>
      {isLoading ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        <Grid container spacing={2}>
          {movieList?.pages.map((page) => {
            const movieList = page.results;
            return movieList?.map((movie: Movie) => (
              <CinemaGrid item xs={6} md={3} key={movie.id}>
                <OneMovie title={movie.title} id={movie.id} poster={movie.poster_path} rate={movie.vote_average} overview={movie.overview} adult={movie.adult} />
              </CinemaGrid>
            ));
          })}
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? <CircularProgress size={24} /> : "패칭"}
          </button>
        </Grid>
      )}
    </CinemaContainer>
  );
};

export default MovieList;

const CinemaContainer = styled(Container)`
  margin-top: 160px;
  ${flexCenter}
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;

const LoaderContainer = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;
