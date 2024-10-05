import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PostVideo } from "../hooks/useDiscover";

interface Props {
  post: PostVideo[];
}

const PostVideos = ({ post }: Props) => {
  if (!post || post.length === 0) {
    return <p>No videos available</p>; // حالت پیش‌فرض در صورت عدم وجود ویدئوها
  }

  if(post && post.length > 0)return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
        className="w-full rounded-md select-none mt-3"
        slidesPerView={1}
        navigation={{
          nextEl: ".nextBtnVideos",
          prevEl: ".prevBtnVideos",
        }}
        spaceBetween={20} // مقدار باید عدد باشد
        loop={true}
        pagination={{ type: "progressbar", enabled: true }}
        grabCursor={true}
        centeredSlides={true}
      >
        {post.map((video, index) => (
          <SwiperSlide className="mt-6 overflow-hidden" key={index}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.key}`}
              className="rounded-xl border-2 border-[#ff3b30] dark:border-[#ff9500]"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-16 justify-center mt-5">
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] prevBtnVideos z-[20]">
          <FaArrowAltCircleLeft />
        </button>
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtnVideos z-[10]">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </>
  );
};

export default PostVideos;
