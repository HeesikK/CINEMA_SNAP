import styled, { keyframes } from "styled-components";
import CinemaInput from "../../component/cinema-input";
import WhiteSearchIcon from "../../assets/icon/White Search.png";

const SearchModal = () => {
  return (
    <Container>
      <div>영화포스터</div>
      <SearchBox>
        <CinemaInput variant="white" size="large" shape="default" />
        <WhiteSearchImg src={WhiteSearchIcon} />
      </SearchBox>
    </Container>
  );
};

export default SearchModal;

const slideDown = keyframes`
  from {
    top: -300px; 
  }
  to {
    top: 141px; 
  }
`;

const Container = styled.div`
  width: 100%;
  height: 380px;
  background-color: ${({ theme }) => theme.COLORS.primary["purple"]};
  position: fixed;
  top: 141px;
  animation: ${slideDown} 0.75s ease-out;
  z-index: 999;
`;

const SearchBox = styled.div`
  position: relative;
`;

const WhiteSearchImg = styled.img`
  width: 25px;
  position: absolute;
  top: 20px;
  right: 600px;
`;
