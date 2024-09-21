import usePostDetail from "../hooks/usePostDetail";

interface Props {
  postId: number;
  type: string;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Post = ({ postId, type }: Props) => {
  const { data: post } = usePostDetail({ postId, type });

  console.log(post);
  return (
    <a
      href="#"
      className="w-full col-span-1 flex flex-col items-center bg-white dark:bg-[#2c2c2e] border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${post?.poster_path}`}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {type == "tv" ? "Series" : capitalizeFirstLetter(type)} Name :{" "}
          {post?.original_title ? post.original_title : post?.name}
        </h5>
        <p className="flex">Status : {post?.status}</p>
        {post?.runtime && <p className="flex">Runtime : {post?.runtime}</p>}
        {post?.genres.length && (
          <p className="flex">
            Genre : {post?.genres.map((genre) => genre.name).join(" , ")}
          </p>
        )}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post?.overview}
        </p>
      </div>
    </a>
  );
};

export default Post;
