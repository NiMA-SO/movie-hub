import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useActor from "../hooks/useActor";
import { Link } from "react-router-dom";
import SkeletonActor from "./SkeletonActor";

const Actor = () => {
  const { data, isLoading } = useActor();

  if (isLoading) return <SkeletonActor />;
  return (
    <div className="h-[150px] w-full mx-auto my-10 flex  justify-around gap-4 select-none">
      <button className=" duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] prevBtnActor z-[20] mb-10">
        <FaArrowAltCircleLeft />
      </button>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
        className="w-full h-full"
        slidesPerView={10}
        breakpoints={{
          0: { slidesPerView: 1 },
          340: { slidesPerView: 2 },
          460: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
          1536: { slidesPerView: 9 },
        }}
        spaceBetween={"20px"}
        navigation={{
          nextEl: ".nextBtnActor",
          prevEl: ".prevBtnActor",
        }}
        //   pagination={{
        //     clickable: true,
        //     el: ".swiper-pagination",
        //     dynamicBullets: true,
        //   }}
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        keyboard={true}
      >
        {data?.results.map((actor) => (
          <SwiperSlide
            key={actor.id}
            className=" text-black dark:text-white text-center"
          >
            <Link to={`actor/${actor.id}`}>
              <div
                className={
                  " w-[100px] h-[100px] rounded-full  mx-auto mb-1 border-2 border-[#ff5733] dark:border-[#ffd580] overflow-hidden object-contain"
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  className="w-[101%] h-[105%]"
                  alt=""
                />
              </div>
              <h3>{actor.original_name}</h3>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide className=" text-black dark:text-white text-center">
          <Link to={"/actors"}>
            <div
              className={
                " w-[100px] h-[100px] rounded-full  mx-auto mb-1 border-2 border-[#ff5733] dark:border-[#ffd580] overflow-hidden object-contain flex justify-center items-center"
              }
            >
              All
            </div>
            <h3>see more</h3>
          </Link>
        </SwiperSlide>
        {/* https://themoviedb.org/person/${actor.profile_path} */}
        {/* <div className="flex justify-around">
            <div className="swiper-pagination "></div>
          </div> */}
      </Swiper>

      <button className=" duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtnActor z-[10] mb-10">
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default Actor;
