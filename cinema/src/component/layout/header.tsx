import styled from "styled-components";
import Logo from "../../assets/CINEMA_SNAP_LOGO.png";
import React from "react";

const Header = () => {
  const navbarItems = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const logoIndex = Math.floor(navbarItems.length / 2);

  return (
    <Container>
      <Navbar>
        {navbarItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx === logoIndex && <img src={Logo} width={160} />}
            <span>{item}</span>
          </React.Fragment>
        ))}
      </Navbar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;
