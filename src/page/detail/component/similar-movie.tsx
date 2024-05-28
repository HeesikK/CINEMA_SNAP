import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getSimilarMovie } from "../../../api/api";
import { Container, Grid } from "@mui/material";
import { PartialMovie } from "../../../type/movie-type";
import OneMovie from "../../../component/one-movie";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovieSkeleton from "../../../component/one-movie-skeleton";

interface DetailMovieProps {
  detail: string;
}

const SimilarMovie = ({ detail }: DetailMovieProps) => {
  const {
    data: similarMovieList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.SimilarMovie, detail],
    queryFn: ({ pageParam = 1 }) => getSimilarMovie({ id: detail, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element = observerRef.current;
    const option = { root: null, rootMargin: "20px", threshold: 1.0 };

    const observer = new IntersectionObserver(handleObserver, option);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);

  return (
    <CinemaContainer>
      <SimilarMovieTitle>Similar Movie</SimilarMovieTitle>
      <Grid container spacing={2}>
        {similarMovieList?.pages.map((page) => {
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
