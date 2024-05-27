import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getSimilarMovie } from "../../../api/api";
import { Container, Grid } from "@mui/material";
import { PartialMovie } from "../../../type/movie-type";
import OneMovie from "../../../component/one-movie";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";

interface DetailMovieProps {
  detail: string;
}

const SimilarMovie = ({ detail }: DetailMovieProps) => {
  const { data: similarMovieList } = useQuery([QUERY_KEY.SimilarMovie, detail], () => getSimilarMovie(detail));

  return (
    <CinemaContainer>
      <SimilarMovieTitle>Similar Movie</SimilarMovieTitle>
      <Grid container spacing={2}>
        {similarMovieList?.results.map((movie: PartialMovie) => (
          <CinemaGrid item xs={6} md={3} key={movie.id}>
            <OneMovie title={movie.title} id={movie.id} poster_path={movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} adult={movie.adult} />
          </CinemaGrid>
        ))}
      </Grid>
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
