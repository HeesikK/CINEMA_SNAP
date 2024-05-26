import { useEffect, useState } from "react";
import { getHomePageMovieList } from "../../../api/api";
import { Container, Grid } from "@mui/material";
import { PartialMovie } from "../../../type/movie-type";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import { useNavigate } from "react-router-dom";
import HomeMovieCard from "./home-movie-card";

const HomePageMovieList = () => {
  const categories = ["now_playing", "popular", "top_rated", "upcoming"];
  const categoryTitles = categories.map((category) => {
    return category
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
  const navigate = useNavigate();
  const [allMovies, setAllMovies] = useState([[], [], [], []]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const res = await Promise.all(categories.map((category) => getHomePageMovieList({ paramKeyword: category, pageParam: 1 })));
      const movies = res.map((res) => res.results.slice(0, 4));
      setAllMovies(movies);
    };

    fetchAllMovies();
  }, []);

  console.log(allMovies);

  return (
    <CinemaContainer>
      {allMovies.map((movieList, idx) => (
        <CategorySection key={idx}>
          <CategoryHeader>
            <CategoryTitle>{categoryTitles[idx]}</CategoryTitle>
            <MoreLink onClick={() => navigate(`/${categories[idx]}`)}>more</MoreLink>
          </CategoryHeader>
          <Grid container spacing={2}>
            {movieList.map((movie: PartialMovie) => (
              <CinemaGrid item xs={6} md={3} key={movie.id}>
                <HomeMovieCard title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
              </CinemaGrid>
            ))}
          </Grid>
        </CategorySection>
      ))}
    </CinemaContainer>
  );
};

export default HomePageMovieList;

const CinemaContainer = styled(Container)`
  margin-top: 160px;
  ${flexCenter}
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const CategorySection = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: 1.5em;
  margin: 0;
`;

const MoreLink = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.COLORS.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;