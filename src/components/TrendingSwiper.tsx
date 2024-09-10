import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useMovies from "../hooks/useNew";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import "./../pages/index.css";
// import { useState } from "react";

const TrendingSwiper = () => {
  const { data: movies } = useMovies("/trending/all/day", "trending");
  // const { data: series } = useMovies("/discover/movie", "newMovie");
  // const [hover, setHover] = useState("");

  // console.log(data);

  if (movies && Swiper)
    return (
      <>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Keyboard,
            Autoplay,
            EffectCoverflow,
          ]}
          className="w-[80%] h-[25rem] md:h-[35rem] lg:h-[35rem] relative pb-10"
          slidesPerView={"auto"}
          spaceBetween={"20px"}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          grabCursor={true}
          keyboard={true}
          effect="coverflow"
          coverflowEffect={{
            stretch: 0,
            slideShadows: false,
            rotate: 0,
            depth: 100,
            modifier: 2.5,
          }}
          centeredSlides={true}
          // parallax={true}
        >
          {movies?.results.map(
            (movie) =>
              movie.poster_path && (
                <SwiperSlide
                  className="flex justify-center py-12 w-[15rem] h-[25rem] md:w-[20rem] md:h-[31rem] lg:w-[23rem] lg:h-[34rem]"
                  key={movie.id}
                >
                  {/* <div
                    className="text-center duration-200 z-30 flex justify-center items-center w-[300px]"
                    onMouseEnter={() => setHover(movie.title)}
                    onMouseLeave={() => setHover("")}
                  > */}
                  {/* {hover === movie.title && (
                      <h2 className={" duration-200 absolute top-0  text-md w-[300px] h-[100%] break-words z-40 text-white bg-[#0000008c]  rounded-xl text-left backdrop-blur-[10px] flex flex-col justify-between p-3"}>
                        <p className="flex justify-between items-center">{movie.title} : {movie.release_date} <FaAngleRight className="text-[20px]" /></p>
                        <p className="flex justify-between items-center">{movie.title} : {movie.release_date} <FaAngleRight className="text-[20px]" /></p>
                      </h2>
                    )} */}
                  <img
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt={movie.title}
                    className="mx-auto w-full rounded-2xl duration-200"
                  />
                  {/* </div> */}
                </SwiperSlide>
              )
          )}
          <div className="flex justify-around">
            <div className="swiper-pagination "></div>
          </div>
        </Swiper>
        <div className="flex gap-16">
          <button className=" text-[#ff5733] dark:text-[#ffd580] text-[40px] prevBtn z-[20]">
            <FaArrowAltCircleLeft />
          </button>
          <button className=" text-[#ff5733] dark:text-[#ffd580] text-[40px] nextBtn z-[10]">
            <FaArrowAltCircleRight />
          </button>
        </div>
      </>
    );
};

export default TrendingSwiper;
