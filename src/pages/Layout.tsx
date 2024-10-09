import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import "./index.css";
import GenreProvider from "../components/header/GenreProvider";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <GenreProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </GenreProvider>
    </>
  );
};

export default Layout;
