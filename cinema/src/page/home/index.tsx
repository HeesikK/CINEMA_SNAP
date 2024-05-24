import { useQuery } from "react-query";
import { getHomePageMovieList } from "../../api/api";
import { Movie } from "../../type/movie-type";
import { Grid, Container } from "@mui/material";
import OneMovie from "../../component/one-movie";
import styled from "styled-components";
import { flexCenter } from "../../style/common.style";

const HomePage = () => {
  const { data: movieList } = useQuery("movieList", () => getHomePageMovieList());
  console.log(movieList);

  const movieData: Movie[] = movieList && movieList.results;
  console.log("영화 데이터값은?", movieData);

  return (
    <CinemaContainer>
      <Grid container spacing={2}>
        {movieData?.map((data) => (
          <CinemaGrid item xs={6} md={3} key={data.id}>
            <OneMovie />
          </CinemaGrid>
        ))}
      </Grid>
    </CinemaContainer>
  );
};

export default HomePage;

const CinemaContainer = styled(Container)`
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fdfceb;
  padding: 0 16px; /* 양쪽 패딩을 추가하여 중앙 정렬 보정 */
  box-sizing: border-box; /* 패딩을 포함하도록 설정 */
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;
