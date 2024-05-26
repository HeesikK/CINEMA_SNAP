import styled from "styled-components";
import { PartialMovie } from "../../../type/movie-type";

const HomeMovieCard = ({ title, poster_path, release_date }: PartialMovie) => {
  return (
    <MovieCard>
      <PosterWrapper>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </PosterWrapper>
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <ReleaseDate>{release_date}</ReleaseDate>
      </MovieInfo>
    </MovieCard>
  );
};

export default HomeMovieCard;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const PosterWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

const MovieInfo = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const MovieTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 30px;
`;

const ReleaseDate = styled.p`
  font-size: 0.8em;
  color: #bbbbbb;
`;
