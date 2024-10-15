import { useContext } from "react";
import PostContext from "./post/PostType";
import useDiscover from "../hooks/useDiscover";
import Discover from "./post/post/Discover";
import { useParams } from "react-router-dom";
import PostNav from "./post/post/PostNav";
import UpdateTv from "./update/UpdateTv";
import UpdatePeople from "./update/UpdatePeople";

const HomeMainGrid = () => {
  const { postType } = useContext(PostContext);
  
  const { page } = useParams<{ page: string }>();  // گرفتن پارامتر صفحه از URL
  const currentPage = Number(page) || 1;  // تبدیل پارامتر به عدد، و پیش‌فرض 1

  if(postType == 'day' || postType == 'week'){
    const { data, isFetching, isPreviousData } = useDiscover(
      `/trending/all/${postType}`,
      `discover ${postType}`,
      currentPage  // استفاده از صفحه فعلی
    );
    return (
      <main className="w-[98%] mx-auto grid grid-cols-8 gap-4 my-12">
        <div className="col-span-8 xl:col-span-6 p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7]">
          {isFetching ? (
            <p>Loading...</p>
          ) : data && data?.results?.length > 0 ? (
            <Discover data={data.results} />
          ) : (
            <p>No results found.</p>
          )}
          <PostNav data={data} isPreviousData={isPreviousData} />
          <UpdatePeople />
        </div>
        <div className="hidden md:block col-span-8 xl:col-span-2 dark:bg-[#2c2c2e] p-4 overflow-hidden text-[#333333] dark:text-[#f2f2f7] self-start bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 ">
          <UpdateTv />
          {/* <UpdateMovie /> */}
        </div>
      </main>
    );
  }

 
};

export default HomeMainGrid;
