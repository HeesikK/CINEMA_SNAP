import styled, { keyframes } from "styled-components";
import Logo from "../assets/CINEMA_SNAP_LOGO.png";
import SearchIcon from "../assets/search.png";
import React, { useState } from "react";
import { flexCenter } from "../style/common.style";

const Header = () => {
  const navbarItems: string[] = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const logoIndex = Math.floor(navbarItems.length / 2);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const openSearchModal = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar>
        {navbarItems.map((item: string, idx: number) => (
          <React.Fragment key={idx}>
            {idx === logoIndex && <img src={Logo} width={140} />}
            <NavItem marginLeft={idx >= logoIndex ? "100px" : "0"} marginRight={idx < logoIndex ? "100px" : "0"}>
              {item}
              {item === "Now Playing" && <SearchImg src={SearchIcon} onClick={openSearchModal} />}
            </NavItem>
          </React.Fragment>
        ))}
      </Navbar>
      {isSearchOpen && <SearchModal>안녕하세요</SearchModal>}
    </>
  );
};

export default Header;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  ${flexCenter}
  & > * {
    cursor: pointer;
  }
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.gray[300]};
  background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
  z-index: 1000;
`;

const NavItem = styled.span<{ marginLeft: string; marginRight: string }>`
  position: relative;
  color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;

const SearchImg = styled.img`
  position: absolute;
  left: -100px;
  top: -5px;
  color: ${({ theme }) => theme.COLORS.white};
  width: 40px;
  cursor: pointer;
`;

const slideDown = keyframes`
  from {
    top: -300px; 
  }
  to {
    top: 141px; 
  }
`;

const SearchModal = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.COLORS.primary["purple"]};
  position: fixed;
  top: 141px;
  animation: ${slideDown} 0.5s ease-out;
  z-index: 999;
`;
