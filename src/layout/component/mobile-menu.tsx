import { FC } from "react";
import styled, { keyframes } from "styled-components";

type MobileMenuModalProps = {
  navbarItems: string[];
};
const MobileMenuModal: FC<MobileMenuModalProps> = ({ navbarItems }) => {
  return (
    <Container>
      {navbarItems.map((item, idx) => (
        <MenuItem key={idx}>{item}</MenuItem>
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
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
