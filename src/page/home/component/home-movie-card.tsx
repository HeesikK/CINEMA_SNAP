import styled from "styled-components";
import { PartialMovie } from "../../../type/movie-type";
import { useNavigate } from "react-router-dom";

const HomeMovieCard = ({ title, id, poster_path, release_date }: PartialMovie) => {
  const navigate = useNavigate();

  return (
    <MovieCard onClick={() => navigate(`/detail/${id}`)}>
      <PosterWrapper>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <Overlay>
          <MovieTitle>{title}</MovieTitle>
          <ReleaseDate>{release_date}</ReleaseDate>
        </Overlay>
      </PosterWrapper>
    </MovieCard>
  );
};

export default HomeMovieCard;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const PosterWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: brightness(60%);

  &:hover {
    filter: brightness(100%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  height: 65px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const MovieTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: bold;
  margin-bottom: 10px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const ReleaseDate = styled.p`
  font-size: 0.8em;
  margin: 5px 0 0;
  color: #bbbbbb;
`;
