import usePostDetail from "../hooks/usePostDetail";
import ImdbRate from "./ImdbRate";

interface Props {
  postId: number;
  type: string;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Post = ({ postId, type }: Props) => {
  const { data: post } = usePostDetail({ postId, type });

  const runtimeMovie = (num: number) => {
    if (num >= 60) {
      const hours = Math.floor(num / 60); // ساعت‌ها
      const minutes = num % 60; // دقیقه‌های باقی‌مانده
      return minutes > 0 ? `${hours} H ${minutes} M` : `${hours} H`; // نمایش ساعت و دقیقه یا فقط ساعت
    } else {
      return `${num} M`; // نمایش دقیقه‌ها
    }
  };

  if (post)
    return (
      <a
        href="#"
        className="overflow-hidden w-full col-span-1 grid grid-cols-8 bg-white dark:bg-[#2c2c2e] border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="col-span-8 lg:col-span-2 flex items-center justify-center ">
          <img
            className="w-[300px] my-2 lg:w-[90%] rounded-lg"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${post?.poster_path}`}
            alt=""
          />
        </div>
        <div className="col-span-8 lg:col-span-6 grid grid-cols-8 p-4 leading-normal  gap-4">
          <div className="col-span-8 sm:col-span-6 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {type == "tv" ? "Series" : capitalizeFirstLetter(type)} Name :{" "}
              {post?.original_title ? post.original_title : post?.name}
            </h5>

            <p className="flex">Status : {post?.status}</p>

            {post?.genres?.length > 0 && (
              <p className="flex">
                Genres : {post?.genres.map((genre) => genre.name).join(" , ")}
              </p>
            )}

            {post?.release_date && (
              <p className="flex">
                Release Date : {post?.release_date.replace(/-/g, " / ")}
              </p>
            )}

            {post?.spoken_languages?.length > 0 && (
              <p className="flex">
                Languages :{" "}
                {post?.spoken_languages
                  .map((spoken) => spoken.english_name)
                  .join(", ")}
              </p>
            )}

            {post?.runtime != 0 && post?.runtime && (
              <p className="flex">Runtime : {runtimeMovie(post?.runtime)}</p>
            )}

            {post?.popularity && (
              <p className="flex">Popularity : {post?.popularity}</p>
            )}
          </div>
          <div className="col-span-8 sm:col-span-2 py-6">
            {post?.vote_average != 0 && post?.vote_average && (
              <ImdbRate
                rating={post?.vote_average}
                ratingCount={post?.vote_count}
                imdbId={post?.imdb_id}
              />
            )}
          </div>
          <p className="bg-[#00000020] px-3 py-2 rounded-lg mb-3 font-normal text-gray-700 dark:text-gray-400 col-span-8 text-justify">
            {post?.overview?.substring(0, 200)}...
          </p>
          <button
            type="button"
            className="h-14 col-span-8 duration-300 text-white bg-gradient-to-br from-[#ff3b30] to-[#ff9500] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#ff5733] dark:focus:ring-[#ff9500] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Download the {type == "tv" ? "Series" : capitalizeFirstLetter(type)}
          </button>
        </div>
      </a>
    );

  return null; // برای حالتی که داده‌ها هنوز بارگیری نشده‌اند
};

export default Post;
