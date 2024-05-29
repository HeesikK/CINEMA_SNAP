import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type MobileMenuModalProps = {
  navbarItems: string[];
  setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenuModal: FC<MobileMenuModalProps> = ({ navbarItems, setIsOpenMobileMenu }) => {
  const navigate = useNavigate();

  const goMovieCategory = (category: string) => {
    navigate(`/${category.toLowerCase().replace(/ /g, "_")}`);
    setIsOpenMobileMenu(false);
  };

  return (
    <Container>
      {navbarItems.map((item, idx) => (
        <MenuItem key={idx} onClick={() => goMovieCategory(item)}>
          {item}
        </MenuItem>
      ))}
    </Container>
  );
};

export default MobileMenuModal;

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
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.primary["purple"]};
  position: fixed;
  top: 141px;
  animation: ${slideDown} 0.75s ease-out;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const MenuItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
