import { Link } from "react-router-dom";
import Nav from "./Nav";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 select-none flex justify-center scroll-[] bg-white dark:bg-[#2c2c2e] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
      <div className="w-[90%] grid grid-cols-8  ">
        <h1 className="pb-2 bold font-bold w-[100%] col-span-6  ">
          <Link to={"/"}>
          <span className="text-[40px] lg:text-[50px] text-[#333333] dark:text-[#f2f2f7] font-sans">Movies</span>  <span className="text-[30px] lg:text-[40px] text-[#FF3B30] dark:text-[#ff9500] font-sans">Hub</span>
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default NavBar;
