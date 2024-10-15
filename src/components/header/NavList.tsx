import { useContext, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import GenreContext from "./GenreContext";

const NavList = () => {
  const {genreSelect,dispatch} = useContext(GenreContext)
  
  useEffect(() => {
    if(genreSelect === ''){
      dispatch({type: 'NONE'})
    }
  }, []);
  return (
    <ul className="dark:text-white justify-around gap-3 flex z-40">
      <li className="hover:border-b-[2px] border-[#ff5733] hover:text-[#ff3b30] dark:border-[#ff9500] dark:hover:text-[#ff9500] px-2 py-[10px] duration-[50ms] cursor-pointer">
        <Link to={"/"} className="flex items-center justify-between">
          Home
        </Link>
      </li>
      <li className={`list-con  ${genreSelect === 'MOVIES' && 'border-b-[2px] border-[#ff5733] text-[#ff3b30] dark:border-[#ff9500] dark:text-[#ff9500] '} px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1`} onMouseEnter={() => dispatch({type:'MOVIES'})} onMouseLeave={() => dispatch({type: 'NONE'})}>
        Movies
        <IoIosArrowDown className={`${genreSelect === 'MOVIES' && 'arrowDown'} duration-200`}  />

      </li>
      <li className={`list-con  ${genreSelect === 'SERIES' && 'border-b-[2px] border-[#ff5733] text-[#ff3b30] dark:border-[#ff9500] dark:text-[#ff9500]'}  px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1`} onMouseEnter={() => dispatch({type:'SERIES'})} onMouseLeave={() => dispatch({type:'NONE'})}>
        Series
        <IoIosArrowDown className={`${genreSelect === 'SERIES' && 'arrowDown'} duration-200`}  />
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
