import { useContext } from "react";
import useSeasons from "../../../hooks/useSeasons";
import ImdbRate from "../ImdbRate";
import PostModalContext from "./PostModalContext";

interface Props {
  postId: number;
}
const PostModalSeason = ({ postId }: Props) => {
  const { toggle, dispatch } = useContext(PostModalContext);

  const { data: seasons } = useSeasons({
    postId: postId,
    seasonNumber: toggle,
  });

  if (seasons)
    return (
      <>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-[100vw] md:inset-0 h-[100vh] bg-[#000000b3]"
          onClick={(e) => {
            const target = e.target as HTMLElement; 
            e.preventDefault();
            if (target.id === 'default-modal') {
              dispatch(null);
            }
          }}
        >
          <div className="relative p-4 w-full lg:w-[70%] max-h-full ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 sticky top-0 bg-white dark:bg-gray-700 z-[51]">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Season: {toggle}
                </h3>
                <button
                  type="button"
                  onClick={() => dispatch(null)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                  {seasons?.episodes.map((episode) => (
                    <li
                      key={episode.episode_number}
                      className="cursor-pointer w-full flex flex-col xl:flex-row relative overflow-hidden items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                    >
                      <img
                        className="object-cover w-[500px] h-[281px]  "
                        src={
                          episode.still_path
                            ? `https://image.tmdb.org/t/p/w500${episode.still_path}`
                            : "https://via.placeholder.com/500x281?text=No+Image"
                        }
                        alt=""
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal ">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#ff3b30] dark:hover:text-[#ff9500]">
                          <span>
                            {episode.episode_number + " : " + episode.name}
                          </span>
                          {episode.vote_average && episode.vote_count && (
                            <div className="absolute top-0 right-0 rounded-lg backdrop:blur-[30px] bg-white/40 dark:bg-black/40 w-[100px] h-[100px] flex justify-center items-center md:">
                              <ImdbRate
                                blur={false}
                                rating={episode.vote_average}
                                ratingCount={episode.vote_count}
                                imdbId="#"
                              />
                            </div>
                          )}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {episode.overview}
                        </p>
                        {episode.air_date && (
                          <span>air_date: {episode.air_date}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default PostModalSeason;
