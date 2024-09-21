import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const SkeletonActorDetail = () => {
  return (
    <div className="mx-auto my-8 w-[90%] grid grid-cols-6 gap-4">
      <table className="col-span-6 lg:col-span-2 bg-[#f9f9f9] dark:bg-[#2c2c2e] p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7]">
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c] ">
          <div className="flex items-center justify-center w-[200px] h-[280px] bg-gray-300 rounded-2xl mx-auto my-3 dark:bg-gray-700 animate-pulse">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <h2 className="text-[16px] bg-[#f5c518] text-black font-bold px-[6px] rounded-md w-[3.5rem] select-none  mx-auto cursor-pointer">
            IMDB
          </h2>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Name:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Birthday:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Known For:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Gender:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Popularity:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Place of Birth:</h2>
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3">
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </td>
        </tr>
      </table>
      <div className="h-[850px] col-span-6 lg:col-span-4 bg-[#f9f9f9] dark:bg-[#2c2c2e] p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7] ">
        <div>
          <h2 className="text-[25px]">
            <div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
          </h2>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Keyboard,
              Autoplay,
              EffectCreative,
            ]}
            className="w-full h-[330px] rounded-md select-none mt-3"
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 3 },
              640: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              1150: { slidesPerView: 5 },
              1300: { slidesPerView: 6 },
            }}
            spaceBetween={"20px"}
            loop={true}
            pagination={{ type: "progressbar", enabled: true }}
            autoplay={{ delay: 10000 }}
            grabCursor={true}
            keyboard={true}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <SwiperSlide className="mt-6" key={index}>
                <div className="flex items-center justify-center w-[170px] h-[250px] bg-gray-300 rounded-2xl mx-auto my-3 dark:bg-gray-700 animate-pulse">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4 ml-4"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12">
          <h2 className="text-[25px]">
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
          </h2>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Keyboard,
              Autoplay,
              EffectCreative,
            ]}
            className="w-full rounded-md select-none mt-3"
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 3 },
              640: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              1150: { slidesPerView: 5 },
              1300: { slidesPerView: 6 },
            }}
            spaceBetween={"20px"}
            loop={true}
            pagination={{ type: "progressbar", enabled: true }}
            autoplay={{ delay: 10000 }}
            grabCursor={true}
            keyboard={true}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <SwiperSlide className="mt-6" key={index}>
                <div className="flex items-center justify-center w-[170px] h-[250px] bg-gray-300 rounded-2xl mx-auto my-3 dark:bg-gray-700 animate-pulse">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4 ml-4"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SkeletonActorDetail;
