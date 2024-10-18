import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";

const AuthButtons = () => {
  const session = localStorage.getItem("session_id");

  const [toggle, setToggle] = useState(false);

  if (!session)
    return (
      <div className="w-[20%]  border-[#E5E5E5] dark:border-[#3a3a3c] border flex justify-between rounded-xl overflow-hidden items-center text-[#333333] dark:text-[#f2f2f7] gap-[1px] text-center ">
        <Link
          to={"/Login"}
          className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 w-[40%] h-full pt-[0.7rem] hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer text-[15px]"
        >
          Login
        </Link>
        <span className="lg:hidden xl:block text-[#E5E5E5] dark:text-[#3a3a3c]">
          |
        </span>
        <Link
          to={"https://www.themoviedb.org/signup"}
          target="_blank"
          className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 w-[55%] h-full pt-[0.7rem] hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer text-[15px]"
        >
          Register
        </Link>
      </div>
    );
  if (session)
    return (
      <div
        className="relative w-[45px] h-[45px] rounded-full border-2 border-[#ff3b30] dark:border-[#ff9500] flex justify-center items-center cursor-pointer"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        <IoPersonCircle className="w-full h-full text-[#ff3b30] dark:text-[#ff9500]" />
        {toggle && (
          <div
            className="w-[200px] absolute top-[100%] pt-4"
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          >
            <ul className=" bg-white dark:bg-[#3a3a3c] rounded-xl overflow-hidden px-4 flex flex-col gap-2 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
              <Link to={'/profile'}>
                <li className="py-2 px-2 bg-slate-300 hover:bg-[#1c1c1e] duration-200  hover:text-white rounded-lg cursor-pointer">
                  Profile
                </li>
              </Link>
              <li
                className="py-2 px-2 bg-slate-300 hover:bg-[#1c1c1e] duration-200  hover:text-white rounded-lg cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("session_id");
                }}
              >
                LogOut
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default AuthButtons;
