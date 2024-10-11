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
import useMovies from "../../../hooks/useNew";
import {
  FaAngleRight,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useContext, useState } from "react";
import PostContext from "../PostType";
import { Link } from "react-router-dom";
import ImdbRate from "../ImdbRate";

const TrendingSwiper = () => {
  const { postType } = useContext(PostContext);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  // const [hover, setHover] = useState<number | null>(null);

  const { data: movies } = useMovies(
    `/trending/all/${postType}`,
    `trending ${postType}`
  );

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
          className="w-full h-[25rem] md:h-[35rem] lg:h-[35rem] relative pb-10"
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
          parallax={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {movies?.results.map(
            (movie, index) =>
              movie.poster_path && (
                <SwiperSlide
                  className={`flex justify-center py-12 w-[14rem] h-[25rem] ${
                    activeSlide === index
                      ? "sm:w-[36.25rem] sm:h-[23.5625rem] md:w-[42.25rem] md:h-[28.5625rem] lg:w-[47.25rem] lg:h-[33.5625rem]"
                      : "md:w-[19rem] md:h-[31rem] lg:w-[22rem] lg:h-[34rem]"
                  }`}
                  key={movie.id}
                >
                  <Link
                    to={`/post/${movie.id}/${movie.media_type}`}
                    className="w-full h-full flex justify-center relative"
                    // onMouseEnter={() => setHover(movie.id)}
                    // onMouseLeave={() => setHover(null)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/${
                        activeSlide === index
                          ? "w500" + movie.backdrop_path
                          : "w220_and_h330_face" + movie.poster_path
                      }`}
                      alt={movie.title}
                      className="hidden sm:block mx-auto w-full rounded-2xl duration-200"
                    />
                    <img
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt={movie.title}
                      className="sm:hidden mx-auto w-full rounded-2xl duration-200"
                    />
                    {
                      /*hover === movie.id */ activeSlide === index && (
                        <h2
                          className={
                            " duration-200 absolute bottom-0 gap-3 text-md w-full break-words z-40 text-white bg-[#0000008c]  rounded-xl text-left backdrop-blur-[10px] flex flex-col justify-between p-3"
                          }
                        >
                          <p className="flex justify-between items-center">
                            Name{" "}
                            {movie.media_type == "tv"
                              ? "series"
                              : movie.media_type}{" "}
                            : {movie.title ? movie.title : movie.name}
                            <FaAngleRight className="text-[20px]" />
                          </p>
                          <ImdbRate
                            blur={true}
                            rating={movie.vote_average}
                            imdbId={movie.imdb_id}
                            ratingCount={movie.vote_count}
                          />
                          <p className="flex justify-between items-center">
                            <span className="hidden lg:block">
                              {movie.overview.substring(0, 70)}...
                            </span>
                            <span className="block lg:hidden">
                              {movie.overview.substring(0, 20)}...
                            </span>
                            <FaAngleRight className="text-[20px]" />
                          </p>
                        </h2>
                      )
                    }
                  </Link>
                </SwiperSlide>
              )
          )}
          <div className="flex justify-around">
            <div className="swiper-pagination "></div>
          </div>
        </Swiper>
        <div className="flex gap-16">
          <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] prevBtn z-[20]">
            <FaArrowAltCircleLeft />
          </button>
          <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtn z-[10]">
            <FaArrowAltCircleRight />
          </button>
        </div>
      </>
    );
};

export default TrendingSwiper;
