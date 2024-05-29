import { QUERY_KEY } from "../../../const/query-key";
import { getSimilarMovie } from "../../../api/api";
import { Container, Grid } from "@mui/material";
import { DetailMovieProps, PartialMovie } from "../../../type/movie-type";
import OneMovie from "../../../component/one-movie";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovieSkeleton from "../../../component/one-movie-skeleton";
import useInfiniteScrollQuery from "../../../hooks/use-infinite-scroll-query";

const SimilarMovie = ({ detail }: DetailMovieProps) => {
  const id = Number(detail); // detail을 number 타입으로 변환

  const { movieList, observerRef, isFetchingNextPage } = useInfiniteScrollQuery({
    queryKey: [QUERY_KEY.SimilarMovie, id],
    queryFn: ({ pageParam = 1 }) => getSimilarMovie({ id: id, pageParam }),
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
      <SimilarMovieTitle>Similar Movie</SimilarMovieTitle>
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

export default SimilarMovie;

const CinemaContainer = styled(Container)`
  margin-top: 80px;
  ${flexCenter}
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

const SimilarMovieTitle = styled.div`
  text-align: start;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-bottom: 40px;
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;

const ObserverDiv = styled.div``;
