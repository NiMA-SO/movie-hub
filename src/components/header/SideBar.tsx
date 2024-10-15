// import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Switch from "./Switch";

interface Props {
  toggle: boolean;
  setToggle: (bool: boolean) => void;
}

const SideBar = ({ toggle, setToggle }: Props) => {
  return (
    <>
      {toggle && (
        <div
          className="bg-black/45 w-full fixed top-0 left-0 z-40 "
          id="modal-container"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            e.preventDefault();
            if (target.id == "modal-container") {
              setToggle(false);
            }
          }}
        >
          <div
            id="drawer-navigation"
            className="relative w-64 h-[100vh] p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
            aria-labelledby="drawer-navigation-label"
          >
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Menu
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={() => setToggle(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li className="">
                  <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    Home
                  </Link>
                </li>
                <li
                  className={`list-con  ${
                    // genreSelect === "MOVIES" &&
                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  } px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1`}
                //   onMouseEnter={() => dispatch({ type: "MOVIES" })}
                //   onMouseLeave={() => dispatch({ type: "NONE" })}
                >
                  Movies
                  {/* <IoIosArrowDown
                    className={`${
                      genreSelect === "MOVIES" && "arrowDown"
                    } duration-200`}
                  /> */}
                </li>
                <li
                  className={`list-con  ${
                    // genreSelect === "SERIES" &&
                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  }  px-2 py-[10px] duration-[50ms] cursor-pointer flex items-center gap-1`}
                //   onMouseEnter={() => dispatch({ type: "SERIES" })}
                //   onMouseLeave={() => dispatch({ type: "NONE" })}
                >
                  Series
                  {/* <IoIosArrowDown
                    className={`${
                      genreSelect === "SERIES" && "arrowDown"
                    } duration-200`}
                  /> */}
                </li>
                <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  Sort
                  {/* <IoIosArrowDown className="arrowDown duration-200" /> */}
                </li>
                <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  Top Rated
                </li>
                <Switch />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
