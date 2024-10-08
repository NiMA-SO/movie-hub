import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const SkeletonActor = () => {
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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (index) => (
            <SwiperSlide
              key={index}
              className="text-center "
            >
              <svg
                className="animate-pulse text-gray-200 dark:text-gray-700 rounded-full  w-[100px] h-[100px]  mx-auto mb-1 border-2 border-[#ff5733] dark:border-[#ffd580] overflow-hidden object-contain"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <button className=" duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtnActor z-[10] mb-10">
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default SkeletonActor;
