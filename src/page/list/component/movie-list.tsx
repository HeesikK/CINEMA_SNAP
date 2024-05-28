import { Grid, Container } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovie from "../../../component/one-movie";
import OneMovieSkeleton from "../../../component/one-movie-skeleton";
import { PartialMovie } from "../../../type/movie-type";
import { getHomePageMovieList } from "../../../api/api";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../../../const/query-key";
import useInfiniteScrollQuery from "../../../hooks/use-infinite-scroll-query";

const MovieList = () => {
  const param = useParams();
  let paramKeyword = param.movieList || "popular";
  console.log("키워드는?", paramKeyword);

  const { movieList, observerRef, isFetchingNextPage } = useInfiniteScrollQuery({
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
      <Grid container spacing={2}>
        {movieList?.pages.map((page) => {
          const movieList = page.results;
          return movieList?.map((movie: PartialMovie) => (
            <CinemaGrid item xs={6} md={3} key={movie.id}>
              <OneMovie title={movie.title} id={movie.id} poster_path={movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} adult={movie.adult} />
            </CinemaGrid>
          ));
        })}
      </Grid>
      <ObserverDiv ref={observerRef} style={{ height: "20px", marginTop: "20px" }}>
        {isFetchingNextPage && <OneMovieSkeleton />}
      </ObserverDiv>
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

const ObserverDiv = styled.div``;
