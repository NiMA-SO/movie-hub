import { FaAlignRight } from "react-icons/fa";
import SideBar from "./SideBar";
import { useState } from "react";

const BurgerSideBar = () => {
    const [toggle , setToggle] = useState(false)
  return (
    <div className="block xl:hidden">
      <FaAlignRight onClick={() => setToggle(!toggle)} />
      <SideBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default BurgerSideBar;
