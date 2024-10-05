import { Swiper, SwiperSlide } from "swiper/react";
import { Discover } from "../hooks/useDiscover";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import ImdbRate from "./ImdbRate";
import { useState } from "react";

interface Props {
  post: Discover;
  type: string | undefined;
}

const PostSimilar = ({ post, type }: Props) => {
  const [imgImdbHover, setImgImdbHover] = useState<number | null>(null); // اصلاح شده

  
  if(post)return (
    <>
      <h2 className="text-[25px] mt-10">Similar :</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCoverflow]}
        className="w-full  rounded-md select-none mt-3"
        slidesPerView="auto" // اصلاح شده
        navigation={{
          nextEl: ".nextBtnSimilar",
          prevEl: ".prevBtnSimilar",
        }}
        loop={true}
        pagination={{ type: "progressbar", enabled: true }}
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        keyboard={true}
        centeredSlides={true}
        effect="coverflow"
      >
        {post?.similar.results.map((similar, index) => (
          <SwiperSlide
            className="mt-6 rounded-lg overflow-hidden flex justify-center items-center w-[300px] h-[448px]"
            key={index}
            onMouseEnter={() => setImgImdbHover(index + 1)}
            onMouseLeave={() => setImgImdbHover(null)} // اصلاح شده
          >
            <Link to={`/post/${similar.id}/${type}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${similar.poster_path}`}
                alt="image" // اصلاح شده
                className={`rounded-lg mx-auto w-[300px] border-[#e5e5e5] dark:border-[#3a3a3c] border-2`}
              />
              {imgImdbHover === index + 1 && (
                <div className="absolute bottom-[0px] flex justify-around items-center text-white py-2 w-[299px] rounded-b-lg backdrop-blur-sm bg-black/30">
                  <span className="ml-4 w-[200px] text-justify">{similar.original_title ? similar.original_title : similar.original_name} : </span>
                  <ImdbRate
                    rating={similar?.vote_average}
                    ratingCount={similar?.vote_count}
                    blur={true}
                  />
                </div>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-16 justify-center mt-5">
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] prevBtnSimilar z-[20]">
          <FaArrowAltCircleLeft />
        </button>
        <button className="duration-200 text-[#ff5733] hover:text-[#b63c22] dark:text-[#ffd580] hover:dark:text-[#c7942e] text-[40px] nextBtnSimilar z-[10]">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </>
  );
};

export default PostSimilar;
