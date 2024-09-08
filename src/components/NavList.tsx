import { FaAppleAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="dark:text-white flex justify-around gap-3">
      <li className="hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer">
        <Link to={"/"} className="flex items-center justify-between">
          Home
        </Link>
      </li>
      <li className="list-con hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1">
        Movies
        <IoIosArrowDown className="arrowDown duration-200"  />

      </li>
      <li className="list-con hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1">
        Series
        <IoIosArrowDown className="arrowDown duration-200"  />
      </li>
      <li className="list-con hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1">
        Sort
        <IoIosArrowDown className="arrowDown duration-200" />
      </li>
      <li className="hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer">
        Top Rated
      </li>
    </ul>
  );
};

export default NavList;
