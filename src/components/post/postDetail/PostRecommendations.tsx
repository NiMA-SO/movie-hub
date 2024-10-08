import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Recommendations } from "../../../hooks/useDiscover";
import ImdbRate from "../ImdbRate";

interface Props {
  post: Recommendations[];
}
const PostRecommendations = ({ post }: Props) => {
  const [imgImdbHover, setImgImdbHover] = useState<number>(Number(null));

  if(post)return (
    <>
      <h2 className="text-[25px] mt-10">Recommendations :</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCoverflow]}
        className="w-full  rounded-md select-none mt-3"
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   640: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //   1280: { slidesPerView: 1 },
        //   1300: { slidesPerView: "auto" },
        // }}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".nextBtnRecommendations",
          prevEl: ".prevBtnRecommendations",
        }}
        loop={true}
        pagination={{ type: "progressbar", enabled: true }}
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        keyboard={true}
        centeredSlides={true}
        effect="coverflow"
      >
        {post?.map((recommendations, index) => (
          <SwiperSlide
            className="mt-6 rounded-lg overflow-hidden flex justify-center items-center w-[300px] h-[448px]"
            key={index}
            onMouseEnter={() => setImgImdbHover(index + 1)}
            onMouseLeave={() => setImgImdbHover(Number(null))}
          >
            <Link to={`/post/${recommendations.id}/${recommendations.media_type}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${recommendations.poster_path}`}
                alt={"image"}
                className={`rounded-lg mx-auto w-[300px] border-[#e5e5e5] dark:border-[#3a3a3c] border-2`}
              />
              {imgImdbHover === index + 1 && (
                <div className="absolute bottom-[0px] flex justify-around items-center text-white py-2 w-[299px] rounded-b-lg backdrop-blur-sm bg-black/30">
                  <span className="ml-4">{recommendations?.original_title ? recommendations.original_title : recommendations.original_name} : </span>
                  <ImdbRate
                    rating={recommendations?.vote_average}
                    ratingCount={recommendations?.vote_count}
                    blur={true}
                  />
                </div>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-16 justify-center mt-5">
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] prevBtnRecommendations z-[20]">
          <FaArrowAltCircleLeft />
        </button>
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtnRecommendations z-[10]">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </>
  );
};

export default PostRecommendations;
