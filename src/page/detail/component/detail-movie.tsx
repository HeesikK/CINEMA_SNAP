import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getDetailMovie } from "../../../api/api";
import styled from "styled-components";
import CinemaButton from "../../../component/cinema-button";
import { flexCenter } from "../../../style/common.style";
import StarIcon from "../../../assets/icon/star.png";
import HeartIcon from "../../../assets/icon/heart.png";
import AllIcon from "../../../assets/icon/ALL.png";
import NineteenIcon from "../../../assets/icon/19.png";
import { useState } from "react";
import MovieTrailerModal from "./trailer-modal";
import { DetailMovieProps, Genre } from "../../../type/movie-type";
import { URL } from "../../../const/url";

const DetailMovie = ({ detail }: DetailMovieProps) => {
  const [isShowYoutubeModal, setIsShowYoutubeModal] = useState<boolean>(false);

  const { data: detailMovie } = useQuery([QUERY_KEY.DetailMovie, detail], () => getDetailMovie(detail!), {
    enabled: !!detail, // detail 값이 있을 때만 쿼리를 실행 => undefined error 방지!!!
  });

  const poster = `${URL.posterURL + detailMovie?.poster_path}`;

  const onShowVideo = () => {
    setIsShowYoutubeModal(true);
  };

  return (
    <Container>
      {isShowYoutubeModal && <MovieTrailerModal detail={detail} setIsShowYoutubeModal={setIsShowYoutubeModal} />}
      <Wrapper>
        <PosterWrapper>
          <MoviePoster src={poster} />
          <CinemaButton variant="primary" size="large" shape="shape" onClick={onShowVideo}>
            Play Video
          </CinemaButton>
        </PosterWrapper>
        <MovieContentWrapper>
          <div>
            <TitleBox>
              <TeenAdultImg src={detailMovie?.adult ? NineteenIcon : AllIcon} />
              <MovieTitle>{detailMovie?.title}</MovieTitle>
            </TitleBox>
            <SubTitle>{detailMovie?.tagline}</SubTitle>
            <GenresBox>
              <ReleaseDate>
                {detailMovie?.release_date.slice(0, 4)} | {detailMovie?.origin_country[0]}
              </ReleaseDate>
              {detailMovie?.genres.map((item: Genre, idx: number) => (
                <MovieGenres key={idx}>{item.name}</MovieGenres>
              ))}
            </GenresBox>
            <VoteImgBox>
              <VoteImg>
                <img src={HeartIcon} width={18} />
                {detailMovie?.vote_count}
              </VoteImg>
              <VoteImg>
                <img src={StarIcon} width={18} />
                {Math.ceil(detailMovie?.vote_average * 10) / 10}
              </VoteImg>
            </VoteImgBox>
          </div>
          <OverViewBox>
            <OverViewTitle>OverView</OverViewTitle>
            {detailMovie?.overview}
          </OverViewBox>
        </MovieContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default DetailMovie;

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-evenly;
`;

const MovieContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const TeenAdultImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const MovieTitle = styled.div`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-align: start;
`;

const SubTitle = styled.div`
  text-align: start;
  font-size: 24px;
  margin-bottom: 25px;
`;

const GenresBox = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin-right: 15px;
  }
  margin-bottom: 15px;
`;

const ReleaseDate = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const MovieGenres = styled.div`
  width: 100px;
  height: 45px;
  color: ${({ theme }) => theme.COLORS.white};
  background-color: ${({ theme }) => theme.COLORS.primary["navy"]};
  ${flexCenter}
  border-radius: 10px;
  line-height: 1.2;
`;

const VoteImgBox = styled.div`
  display: flex;
  & * {
    margin-right: 15px;
  }
`;

const VoteImg = styled.div`
  ${flexCenter}
  width: 100px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.primary["navy"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  border-radius: 10px;
  margin-bottom: 40px;
`;

const PosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoviePoster = styled.img`
  width: 260px;
  height: 374px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const OverViewBox = styled.div`
  width: 800px;
  margin-bottom: 30px;
  text-align: start;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  line-height: 1.4;
`;

const OverViewTitle = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin-bottom: 15px;
`;
