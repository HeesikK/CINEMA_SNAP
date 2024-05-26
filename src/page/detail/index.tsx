import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../../const/query-key";
import { getDetailMovie } from "../../api/api";
import styled from "styled-components";
import CinemaButton from "../../component/cinema-button";
import { flexCenter } from "../../style/common.style";
import StarIcon from "../../assets/icon/star.png";
import HeartIcon from "../../assets/icon/heart.png";
import AllIcon from "../../assets/icon/ALL.png";
import NineteenIcon from "../../assets/icon/19.png";

const DetailPage = () => {
  const { detail } = useParams<{ detail: string }>();

  interface Genre {
    id: number;
    name: string;
  }

  const { data: detailMovie } = useQuery([QUERY_KEY.DetailMovie, detail], () => getDetailMovie(detail!), {
    enabled: !!detail, // detail 값이 있을 때만 쿼리를 실행하도록 설정
  });

  const poster = `https://image.tmdb.org/t/p/original${detailMovie?.poster_path}`;

  console.log(detailMovie);

  return (
    <Container>
      <PosterWrapper>
        <MoviePoster src={poster} />
        <CinemaButton variant="primary" size="large" shape="shape">
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
            {detailMovie?.genres.map((item: Genre) => (
              <MovieGenres>{item.name}</MovieGenres>
            ))}
          </GenresBox>
          <VoteImgBox>
            <VoteImg>
              <img src={HeartIcon} width={18} />
              {detailMovie?.vote_count}
            </VoteImg>
            <VoteImg>
              <img src={StarIcon} width={18} />
              {detailMovie?.vote_average}
            </VoteImg>
          </VoteImgBox>
          {/* <div>
            {detailMovie?.production_companies.map((item) => (
              <CompanyLogo style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.logo_path})` }}></CompanyLogo>
            ))}
          </div> */}
        </div>
        <OverViewBox>
          <OverViewTitle>OverView</OverViewTitle>
          {detailMovie?.overview}
        </OverViewBox>
      </MovieContentWrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  margin-top: 150px;
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
`;

const VoteImgBox = styled.div`
  display: flex;
  & * {
    margin-right: 15px;
  }
`;

const VoteImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.primary["navy"]};
  border-radius: 10px;
  margin-bottom: 40px;
`;

const CompanyLogo = styled.div`
  width: 36px;
  height: 36px;
  background-size: cover;
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
