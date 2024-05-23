import { Outlet } from "react-router-dom";
import Header from "./header";
import ScrollButton from "./scroll-btn";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollButton />
    </>
  );
};

export default Layout;
