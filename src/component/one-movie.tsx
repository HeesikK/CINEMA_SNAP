import styled from "styled-components";
import { FC } from "react";
import { flexCenter } from "../style/common.style";
import AllIcon from "../assets/icon/ALL.png";
import NineteenIcon from "../assets/icon/19.png";
import { useNavigate } from "react-router-dom";
import { PartialMovie } from "../type/movie-type";

const OneMovie: FC<PartialMovie> = ({ title, id, poster_path, vote_average, overview, adult }) => {
  const navigate = useNavigate();
  const moviePoster = `https://image.tmdb.org/t/p/original${poster_path}`;

  const goToDetailPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container onClick={goToDetailPage}>
      <Wrapper style={{ backgroundImage: `url(${moviePoster})` }}>
        <Overlay>
          <Content>
            <Overview>{overview}</Overview>
            <Divider />
            {vote_average !== undefined && <Rate>⭐ {Math.ceil(vote_average * 10) / 10}</Rate>}
          </Content>
        </Overlay>
      </Wrapper>
      <TitleBox>
        <AgeIcon src={adult ? NineteenIcon : AllIcon} />
        <Title>{title}</Title>
      </TitleBox>
    </Container>
  );
};

export default OneMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
`;

const Wrapper = styled.div`
  width: 230px;
  height: 331px;
  background-size: cover;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.COLORS.white};
  ${flexCenter}
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Overview = styled.div`
  padding: 0px 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.white};
  margin: 10px auto;
`;

const Rate = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.white};
  margin-bottom: 20px;
`;

const TitleBox = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin: 10px;
  height: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.COLORS.black};
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const AgeIcon = styled.img`
  width: 25px;
  height: 25px;
`;
