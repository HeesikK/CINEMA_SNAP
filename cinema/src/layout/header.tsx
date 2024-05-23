import styled from "styled-components";
import Logo from "../assets/logo/CINEMA_SNAP_LOGO.png";
import NavySearchIcon from "../assets/icon/Navy Search.png";
import CloseIcon from "../assets/icon/Close.png";
import MenuIcon from "../assets/icon/Menubar.png";
import React, { useState } from "react";
import { flexCenter } from "../style/common.style";
import SearchModal from "./component/search-modal";
import MobileMenuModal from "./component/mobile-menu";

const Header = () => {
  const navbarItems: string[] = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const logoIndex = Math.floor(navbarItems.length / 2);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const openSearchModal = () => {
    setIsOpenMobileMenu(false);
    setIsSearchOpen((prev) => !prev);
  };

  const openMenu = () => {
    setIsSearchOpen(false);
    setIsOpenMobileMenu((prev) => !prev);
  };

  return (
    <>
      <Navbar>
        <SearchImg src={isSearchOpen ? CloseIcon : NavySearchIcon} onClick={openSearchModal} />
        {navbarItems.map((item: string, idx: number) => (
          <React.Fragment key={idx}>
            {idx === logoIndex && <img src={Logo} width={140} />}
            <NavItem marginLeft={idx >= logoIndex ? "100px" : "0"} marginRight={idx < logoIndex ? "100px" : "0"}>
              {item}
            </NavItem>
          </React.Fragment>
        ))}
        <MenuImg src={MenuIcon} onClick={openMenu} />
      </Navbar>
      {isSearchOpen && <SearchModal />}
      {isOpenMobileMenu && <MobileMenuModal navbarItems={navbarItems} />}
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
  & > span {
  }
`;

const NavItem = styled.span<{ marginLeft: string; marginRight: string }>`
  position: relative;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  left: 200px;
  top: 60px;
  color: ${({ theme }) => theme.COLORS.white};
  width: 25px;
  cursor: pointer;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    left: 40px;
  }
`;

const MenuImg = styled.img`
  position: absolute;
  width: 35px;
  display: none;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: block;
    right: 40px;
  }
`;
