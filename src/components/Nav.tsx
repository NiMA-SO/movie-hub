import Switch from "./Switch"
import NavList from "./NavList"

const Nav = () => {
  return (
    <nav className="w-[53%] h-full flex justify-around items-center">
         <NavList/>
         <Switch/>
        <div className="w-[20%] md:w-[20%] lg:w-[25%] xl:w-[20%]  border-[#E5E5E5] dark:border-[#3a3a3c] border flex justify-between flex-wrap rounded-xl overflow-hidden items-center text-[#333333] dark:text-[#f2f2f7] gap-[1px] text-center">
            <span className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer md:w-[100%] lg:w-[40%] ">Login</span>
            <span className="md:hidden lg:block text-[#E5E5E5] dark:text-[#3a3a3c]">|</span>
            <span className="hover:bg-[#FF3B30] dark:hover:bg-[#ff9500] py-2 px-2 hover:text-white dark:hover:text-black font-semibold duration-200 cursor-pointer md:w-[100%] lg:w-[55%] ">Register</span>
        </div>
    </nav>
  )
}

export default Nav