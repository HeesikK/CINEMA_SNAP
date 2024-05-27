import styled from "styled-components";
import CinemaButton from "../component/cinema-button";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const onHandleScroll = () => {
    const { scrollY } = window;

    scrollY > 50 ? setIsShowButton(true) : setIsShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container onClick={goToScrollTop}>
      {isShowButton && (
        <CinemaButton variant="primary" size="small" shape="round">
          TOP
        </CinemaButton>
      )}
    </Container>
  );
};

export default ScrollButton;

const Container = styled.div`
  position: fixed;
  right: 120px;
  bottom: 60px;
  z-index: 1000;
  cursor: pointer;
`;
