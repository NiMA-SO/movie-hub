import { Discover } from "../hooks/useDiscover";
import ImdbRate from "./ImdbRate";
import RunTime from "./RunTime";

interface Props {
  post: Discover;
}

const PostProperty = ({ post }: Props) => {

  return (
    <>
      <div className="grid grid-cols-8 col-span-2">
        <img
          className="col-span-8 mx-auto lg:col-span-2 rounded-xl w-[320px] border-2 border-[#ff3b30] dark:border-[#ff9500]"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${post?.backdrop_path}`}
          alt={`https://image.tmdb.org/t/p/w220_and_h330_face/${post?.backdrop_path}`}
        />
        <div className="col-span-8 lg:col-span-6 grid grid-cols-8 px-4 py-2 pb-4 leading-normal  gap-4">
          <div className="col-span-8 sm:col-span-6 flex flex-col justify-between">
            <h5 className="pl-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-l-4 border-[#ff3b30] dark:border-[#ff9500]">
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

            {post?.original_language && (
              <p className="flex">
                Original Language : {post.original_language}
              </p>
            )}
            {post?.origin_country?.length > 0 && (
              <p className="flex">
                Original Country :{" "}
                {post?.origin_country.map((country) => country).join(", ")}
              </p>
            )}
            {post?.runtime != 0 && post?.runtime && (
              <p className="flex gap-1">Runtime : <RunTime number={post.runtime} /></p>
            )}
            {post?.budget != 0 && post?.budget && (
              <p className="flex">
                Budget : {post?.budget.toLocaleString("en-US")}
              </p>
            )}
            {post?.revenue != 0 && post?.revenue && (
              <p className="flex">
                Revenue : {post?.revenue.toLocaleString("en-US")}
              </p>
            )}

            {post?.popularity && (
              <p className="flex">Popularity : {post?.popularity}</p>
            )}
            {post?.production_countries?.length > 0 && (
              <p className="flex">
                Production Countries :{" "}
                {post?.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </p>
            )}
            {post?.tagline && <p className="flex">Tagline : {post?.tagline}</p>}
            {post?.homepage && (
              <a
                href={post?.homepage}
                target="_blank"
                className="text-[#ff3b30] dark:text-[#ff9500] font-bold"
              >
                HomePage
              </a>
            )}
          </div>
          <div className="col-span-8 sm:col-span-2 py-6">
            {post?.vote_average != 0 && post?.vote_average && (
              <ImdbRate
                rating={post?.vote_average}
                ratingCount={post?.vote_count}
                imdbId={post?.imdb_id}
                blur={false}
              />
            )}
          </div>
        </div>
      </div>
      {post?.production_companies?.length > 0 && (
        <p className="flex gap-6 bg-[#f2f2f7] dark:bg-[#3a3a3c] justify-center col-span-2 py-3 rounded-xl flex-wrap">
          {post?.production_companies.map((companies) =>
            companies.logo_path ? (
              <span className="flex flex-col items-center justify-between gap-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`}
                  alt=""
                  className="w-[70px] h-[50px] rounded-lg mx-auto"
                />
                <p>{companies.name}</p>
              </span>
            ) : null
          )}
        </p>
      )}
      <p className=" col-span-2 bg-[#00000020] px-3 py-2 rounded-lg mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
        {post?.overview}
      </p>
    </>
  );
};

export default PostProperty;
