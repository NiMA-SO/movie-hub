import Search from "./Search";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NavList from "./NavList";
import Switch from "./Switch";
import AuthButtons from "./AuthButtons";
import BurgerSideBar from "./BurgerSideBar";

const Nav = () => {
  const [searchVisible, setVisible] = useState(false);
  return (
    <>
      <nav className="w-[100%] h-full flex gap-4 justify-end lg:justify-around  items-center col-span-3 lg:col-span-6">
        <div className="hidden xl:flex justify-between items-center gap-[10px] w-[80%]">
          <NavList />
          <Switch />
          <AuthButtons />
        </div>
        <div className="flex gap-5 text-[#FF3B30] dark:text-[#ff9500]  text-[20px] cursor-pointer duration-200">
          <FaSearch
            className={`${
              searchVisible && "rotate-90"
            }`}
            onClick={() => setVisible(!searchVisible)}
          />
          <BurgerSideBar />
        </div>
      </nav>
      {searchVisible && <Search />}
    </>
  );
};

export default Nav;
