import { useContext } from "react";
import PostContext from "./PostType";

const Type = () => {
  const { postType, dispatch } = useContext(PostContext);
  if (!postType) dispatch({ type: "day" });
  return (
    <div
      className="inline-flex rounded-md overflow-hidden shadow-sm relative bg-white dark:bg-[#3a3a3c] border-[1px]  border-[#ff3b30] dark:border-[#ff9500]"
      role="group"
    >
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-[#333333] dark:text-[#f2f2f7] rounded-s-lg z-[5]"
        onClick={() => dispatch({ type: "day" })}
      >
        Today
      </button>
      <div
        className={`h-full duration-500 bg-[#ff3b30] dark:bg-[#ff9500] absolute ${
          postType == "day" ? "left-0 w-[75px]" : "left-[75px] w-[100px] "
        }`}
      ></div>

      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-[#333333] dark:text-[#f2f2f7] rounded-e-lg z-[5]"
        onClick={() => dispatch({ type: "week" })}
      >
        This Week
      </button>
    </div>
  );
};

export default Type;
