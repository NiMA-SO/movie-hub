import About from "./About";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-white dark:bg-[#333333] shadow-md border-t-2 border-[#ff5733] dark:border-[#ffd580]">
      <div className="w-[80%] h-full mx-auto grid grid-cols-8">
        <div className="col-span-8 py-4 flex flex-col items-center">
          <About />
        </div>
        {/* <div className="col-span-4">
            
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
