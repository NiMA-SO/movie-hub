import { Discover } from "../../../hooks/useDiscover";
import PostProperty from "./PostProperty";
// import usePostDetail from "../hooks/usePostDetail";
// import ImdbRate from "./ImdbRate";
// import RunTime from "./RunTime";

interface Props {
  // postId: number;
  // type: string;
  post: Discover
}

const Post = ({ post }: Props) => {

  if (post)
    return (
     
        <div className="overflow-hidden w-full col-span-1 grid grid-cols-8 bg-white dark:bg-[#2c2c2e] border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <PostProperty post={post} type={post.media_type} postId={post.id} />
        </div>
     
    );

  return null; // برای حالتی که داده‌ها هنوز بارگیری نشده‌اند
};

export default Post;
