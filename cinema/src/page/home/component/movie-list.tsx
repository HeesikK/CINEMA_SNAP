import { useQuery } from "react-query";
import { Grid, Container } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import OneMovie from "../../../component/one-movie";
import { Movie } from "../../../type/movie-type";
import { getHomePageMovieList } from "../../../api/api";

const MovieList = () => {
  const { data: movieList } = useQuery("movieList", () => getHomePageMovieList());
  console.log(movieList);

  const movieData: Movie[] = movieList && movieList.results;
  console.log("영화 데이터값은?", movieData);

  return (
    <CinemaContainer>
      <Grid container spacing={2}>
        {movieData?.map((movie) => (
          <CinemaGrid item xs={6} md={3} key={movie.id}>
            <OneMovie title={movie.title} id={movie.id} poster={movie.poster_path} rate={movie.vote_average} overview={movie.overview} adult={movie.adult} />
          </CinemaGrid>
        ))}
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
