import { useContext } from "react";
import GenreContext from "./GenreContext";
import useGenres from "../../hooks/useGenres";

const NavData = () => {
  const { data: movie } = useGenres("/genre/movie/list", "movies:genres");
  const { data: series } = useGenres("/genre/tv/list", "series:genres");
  const { genreSelect, dispatch } = useContext(GenreContext);

  if (genreSelect != "NONE")
    return (
      <div>
        <div
          className="select-none bg-blend-multiply genre py-3 px-4 w-[40%]  absolute left-[50%] translate-x-[-70%] top-[7vh] rounded-xl  pt-[50px] z-20"
          onMouseEnter={() => {
            genreSelect === "SERIES"
              ? dispatch({ type: "SERIES" })
              : genreSelect === "MOVIES" && dispatch({ type: "MOVIES" });
          }}
          onMouseLeave={() => dispatch({ type: "NONE" })}
        >
          <div className="z-[-1] w-[30px] h-[30px] rounded-md rotate-45 absolute xl:right-[300px] lg:right-[200px] md:right-[50px] top-[40px] bg-[#f9f9f9] dark:bg-[#2c2c2e]  p-4"></div>
          <ul className=" grid grid-cols-3 gap-2 backdrop-blur-[20px] rounded-2xl px-4 py-2 text-center dark:text-[#f2f2f7] text-[#333333] bg-[#f9f9f9] dark:bg-[#2c2c2e]"
          onMouseEnter={() => {
            genreSelect === "SERIES"
              ? dispatch({ type: "SERIES" })
              : genreSelect === "MOVIES" && dispatch({ type: "MOVIES" });
          }}
          onMouseLeave={() => dispatch({ type: "NONE" })}>
            {genreSelect === "SERIES" &&
              series?.genres.map((genre) => (
                <li
                  key={genre.id}
                  className="border-b-2 border-transparent hover:border-[#ff5733] dark:hover:border-[#ffd580] hover:text-[#ff5733] dark:hover:text-[#ffd580] cursor-pointer py-1"
                >
                  {genre.name}
                </li>
              ))}
            {genreSelect === "MOVIES" &&
              movie?.genres.map((genre) => (
                <li
                  key={genre.id}
                  className="border-b-2 border-transparent hover:border-[#ff5733] dark:hover:border-[#ffd580] hover:text-[#ff5733] dark:hover:text-[#ffd580] cursor-pointer py-1"
                >
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
};

export default NavData;
