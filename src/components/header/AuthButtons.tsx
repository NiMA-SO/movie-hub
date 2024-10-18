import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="w-[20%] md:w-[20%] lg:w-[25%] xl:w-[20%]  border-[#E5E5E5] dark:border-[#3a3a3c] border flex justify-between rounded-xl overflow-hidden items-center text-[#333333] dark:text-[#f2f2f7] gap-[1px] text-center ">
      <Link to={'/Login'} className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 w-[40%] h-full pt-[0.7rem] hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer text-[15px]">
        Login
      </Link>
      <span className="lg:hidden xl:block text-[#E5E5E5] dark:text-[#3a3a3c]">
        |
      </span>
      <Link to={'/Register'} className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 w-[55%] h-full pt-[0.7rem] hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer text-[15px]">
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
