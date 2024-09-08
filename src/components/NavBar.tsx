import Nav from "./Nav";
import Search from "./Search";

const NavBar = () => {
  return (
    <header className="h-[10vh] flex justify-center scroll-[] bg-[#f9f9f9] dark:bg-[#2c2c2e] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
      <div className="w-[90%] flex items-center ">
        <h1 className="pb-2 bold font-bold w-[17%]">
          <span className="text-[50px] text-[#333333] dark:text-[#f2f2f7] font-sans">Movies</span>
          <span className="text-[40px] text-[#FF3B30] dark:text-[#ff9500] font-sans">Hub</span>
        </h1>
        <Search/>
       
        <Nav/>
      </div>
    </header>
  );
};

export default NavBar;
