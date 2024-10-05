import { useState } from "react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImdbRate from "./ImdbRate";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Discover } from "../hooks/useDiscover";

interface Props {
  post: Discover;
}
const PostImage = ({ post }: Props) => {
  const [imgImdbHover, setImgImdbHover] = useState<number>(Number(null));

  return (
    <>
      <h2 className="text-[25px]">Images :</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
        className="w-full h-[250px] sm:h-[210px] md:h-[280px] lg:h-[250px] xl:h-[250px] rounded-md select-none mt-3"
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        spaceBetween={"20px"}
        loop={true}
        pagination={{ type: "progressbar", enabled: true }}
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        keyboard={true}
        centeredSlides={true}
      >
        {post.images.backdrops.map((image, index) => (
          <SwiperSlide
            className="mt-6 overflow-hidden w-[320px] h-full flex items-center justify-center"
            key={index}
            onMouseEnter={() => setImgImdbHover(index + 1)}
            onMouseLeave={() => setImgImdbHover(Number(null))}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
              alt={"image"}
              className={`rounded-lg border-[#e5e5e5] dark:border-[#3a3a3c] border-2 w-full mx-auto`}
            />
            {imgImdbHover === index + 1 && (
              <div className="absolute py-2 w-[316px] backdrop-blur-sm bg-black/30">
                <ImdbRate
                  rating={image?.vote_average}
                  ratingCount={image?.vote_count}
                  imdbId={post.imdb_id}
                  blur={true}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-16 justify-center">
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

export default PostImage;
