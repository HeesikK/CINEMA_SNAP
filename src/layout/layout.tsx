import { Outlet } from "react-router-dom";
import Header from "./header";
import ScrollButton from "./scroll-btn";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <ScrollButton />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
`;
