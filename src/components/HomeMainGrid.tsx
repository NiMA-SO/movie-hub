import { useContext } from "react";
import Discover from "./Discover";
import PostContext from "./PostType";
import useDiscover from "../hooks/useDiscover";

const HomeMainGrid = () => {
  const {postType} = useContext(PostContext);
    
  const { data } = useDiscover(`/trending/all/${postType}`,`dicover ${postType}`);
  console.log(data)
  if(data) return ( 
    <main className="w-[98%] mx-auto grid grid-cols-8 gap-4 my-12">
      <div className="col-span-8 lg:col-span-6 p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7]">
        <Discover data={data?.results} />
      </div>
      <div className="col-span-8 lg:col-span-2 bg-white dark:bg-[#2c2c2e] p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7]"></div>
    </main>
  );
};

export default HomeMainGrid;
