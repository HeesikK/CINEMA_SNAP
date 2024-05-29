import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import styled from "styled-components";
import { Scrollbar } from "swiper/modules";
import { QUERY_KEY } from "../../../const/query-key";
import { getHomePageMovieList } from "../../../api/api";
import { URL } from "../../../const/url";

const Banner = () => {
  const { data: bannerMovieList } = useQuery([QUERY_KEY.MovieList], () => getHomePageMovieList({ paramKeyword: "popular", pageParam: 1 }));

  return (
    <CinemaSwiper scrollbar={{ hide: true }} modules={[Scrollbar]}>
      {bannerMovieList?.results.map((movie) => (
        <CinemaSwiperSlide key={movie.id}>
          <img src={`${URL.posterURL + movie.backdrop_path}`} alt={movie.title} />
        </CinemaSwiperSlide>
      ))}
    </CinemaSwiper>
  );
};

export default Banner;

const CinemaSwiper = styled(Swiper)`
  margin-top: 160px;
  width: 90%;
  height: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const CinemaSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
