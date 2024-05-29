import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/CINEMA_SNAP_LOGO.png";
import NavySearchIcon from "../assets/icon/Navy Search.png";
import CloseIcon from "../assets/icon/Close.png";
import MenuIcon from "../assets/icon/Menubar.png";
import { flexCenter } from "../style/common.style";
import SearchModal from "./component/search-modal";
import MobileMenuModal from "./component/mobile-menu";

const Header = () => {
  const navigate = useNavigate();
  const navbarItems = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const logoIndex = Math.floor(navbarItems.length / 2);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const openSearchModal = () => {
    setIsOpenMobileMenu(false);
    setIsSearchOpen((prev) => !prev);
  };

  const openMenu = () => {
    setIsSearchOpen(false);
    setIsOpenMobileMenu((prev) => !prev);
  };

  const goMovieCategory = (category: string) => {
    navigate(`/${category.toLowerCase().replace(/ /g, "_")}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container style={{ display: showHeader ? "flex" : "none" }}>
      <Navbar>
        <SearchImg src={isSearchOpen ? CloseIcon : NavySearchIcon} onClick={openSearchModal} />
        {navbarItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx === logoIndex && <img onClick={() => navigate("/")} src={Logo} width={140} />}
            <NavItem
              onClick={() => goMovieCategory(item)}
              style={{
                marginLeft: idx >= logoIndex ? "100px" : "0",
                marginRight: idx < logoIndex ? "100px" : "0",
              }}
            >
              {item}
            </NavItem>
          </React.Fragment>
        ))}
        <MenuImg src={MenuIcon} onClick={openMenu} />
      </Navbar>
      {isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen} />}
      {isOpenMobileMenu && <MobileMenuModal navbarItems={navbarItems} setIsOpenMobileMenu={setIsOpenMobileMenu} />}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  ${flexCenter}
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  ${flexCenter}
  & > * {
    cursor: pointer;
  }
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.gray[300]};
  background-color: ${({ theme }) => theme.COLORS.white};
  z-index: 1000;
`;

const NavItem = styled.span`
  position: relative;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  left: 205px;
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
