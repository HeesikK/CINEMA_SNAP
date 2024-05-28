import { useInfiniteQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getSearchMovie } from "../../../api/api";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import { flexCenter } from "../../../style/common.style";
import OneMovie from "../../../component/one-movie";
import { PartialMovie } from "../../../type/movie-type";
import { useCallback, useEffect, useRef } from "react";
import OneMovieSkeleton from "../../../component/one-movie-skeleton";

const SearchMovieList = () => {
  const [query] = useSearchParams();
  const paramKeyword = query.get("keyword") || undefined; // paramKeyword undefined 방지!!!

  const {
    data: searchMovieList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.SearchMovie, paramKeyword],
    queryFn: ({ pageParam = 1 }) => getSearchMovie({ paramKeyword, pageParam }),
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
      <SearchResult>{`Search "${paramKeyword}"`}</SearchResult>
      <Grid container spacing={2}>
        {searchMovieList?.pages.map((page) => {
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

export default SearchMovieList;

const CinemaContainer = styled(Container)`
  margin-top: 180px;
  ${flexCenter}
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

const SearchResult = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.primary["navy"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-bottom: 40px;
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;

const ObserverDiv = styled.div``;
