import styled from "styled-components";
import CloseIcon from "../../../assets/icon/Close.png";
import React from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../const/query-key";
import { getVideoMovie } from "../../../api/api";
import YouTube from "react-youtube";
import { Container } from "@mui/material";

type ModalProps = {
  detail: string;
  setIsShowYoutubeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieTrailerModal = ({ detail, setIsShowYoutubeModal }: ModalProps) => {
  const { data: movieVideo } = useQuery([QUERY_KEY.Video, detail], () => getVideoMovie(detail));

  const video = movieVideo && movieVideo.results[0];
  console.log(video);

  return (
    <CinemaContainer>
      <CloseModalImg src={CloseIcon} onClick={() => setIsShowYoutubeModal(false)} />
      <YouTube videoId={video?.key} opts={{ width: 1024, height: 576, playerVars: { autoplay: 1 } }} />
    </CinemaContainer>
  );
};

export default MovieTrailerModal;
const CinemaContainer = styled(Container)`
  position: absolute;
  margin-top: -50px;
  left: 40px;
`;

const CloseModalImg = styled.img`
  width: 50px;
  cursor: pointer;
`;
