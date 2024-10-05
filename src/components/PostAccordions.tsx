import React, { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Discover } from "../hooks/useDiscover";
import { BiSolidCameraMovie } from "react-icons/bi";
import PostModalSeason from "./PostModalSeason";
import PostModalContext from "./PostModalContext";

interface Props {
  post: Discover;
}

const PostAccordions = ({ post }: Props) => {
  const {toggle, dispatch} = useContext(PostModalContext)
  const [containerToggleAccordion, setContainerToggleAccordion] =
    useState(false);

  if (post.seasons)
    return (
      <>
        <h2
          id="accordion-open-heading-1"
          onClick={() =>
            setContainerToggleAccordion(containerToggleAccordion ? false : true)
          }
        >
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-2 ring-inset focus:ring-[#ff5733] dark:focus:ring-[#ffd580] dark:border-gray-700 dark:text-gray-400 hover:bg-[#e5e5e5] dark:hover:bg-[#3a3a3c] gap-3"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center gap-5">
            <BiSolidCameraMovie className="size-6" />
              <div className="flex gap-3">
                <span className="bg-[#e5e5e5] dark:bg-[#3a3a3c] px-2 py-[2px] rounded-xl">
                  Seasons : {post.number_of_seasons}
                </span>
                <span className="bg-[#e5e5e5] dark:bg-[#3a3a3c] px-2 py-[2px] rounded-xl">
                  Episodes : {post.number_of_episodes}
                </span>
              </div>
            </span>
            <IoIosArrowForward
              className={`text-[18px] ${
                containerToggleAccordion && "rotate-90"
              }`}
            />
          </button>
        </h2>
        {containerToggleAccordion && (
          <div
            id="accordion-open"
            data-accordion="open"
          >
            {post.seasons.map((season, index) => (
              <React.Fragment key={index}>
                <h2
                  id="accordion-open-heading-1"
                  onClick={() =>
                    dispatch(
                      toggle ? null : season.season_number
                    )
                  }
                >
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 ring-inset ${toggle === season.season_number ? 'ring-2  ring-[#ff5733] dark:ring-[#ffd580]' : ''} dark:border-gray-700 dark:text-gray-400 hover:bg-[#e5e5e5] dark:hover:bg-[#3a3a3c] gap-3`}
                    data-accordion-target="#accordion-open-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-open-body-1"
                  >
                    <span className="flex items-center gap-5">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                        alt="Poster"
                        className="w-[70px] h-[100px] rounded-xl border-2 border-[#ff3b30] dark:border-[#ff9500]"
                      />
                      <div className="flex gap-3">
                        <span className="bg-[#e5e5e5] dark:bg-[#3a3a3c] px-2 py-[2px] rounded-xl">
                          Seasons : {season.season_number}
                        </span>
                        <span className="bg-[#e5e5e5] dark:bg-[#3a3a3c] px-2 py-[2px] rounded-xl">
                          Eposodes : {season.episode_count}
                        </span>
                        <span className="bg-[#e5e5e5] dark:bg-[#3a3a3c] px-2 py-[2px] rounded-xl">
                          AirDate : {season.air_date}
                        </span>
                      </div>
                    </span>
                    <IoIosArrowForward
                      className={`text-[18px] ${
                        toggle === season.season_number && "rotate-90"
                      }`}
                    />
                  </button>
                </h2>
                {toggle == season.season_number && (
                  <PostModalSeason postId={post.id}/>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </>
    );
};

export default PostAccordions;
