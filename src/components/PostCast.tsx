import { Swiper, SwiperSlide } from "swiper/react";
import { Cast } from "../hooks/useDiscover";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./credit.css";
import men from "./../assets/men.png";
import women from "./../assets/women.png";

interface Props {
  post: Cast[];
}
const PostCast = ({ post }: Props) => {
  const [imgImdbHover, setImgImdbHover] = useState<number>(Number(null));
  return (
    <>
      <h2 className="text-[25px] mt-3">Top Cast :</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCards]}
        className="w-full rounded-md select-none mt-3 overflow-visible pb-[40px]"
        slidesPerView={"auto"}
        spaceBetween={"20px"}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        keyboard={true}
        effect="cards"
        centeredSlides={true}
        cardsEffect={{
          slideShadows: false,
          rotate: true,
          perSlideOffset: 4,
          perSlideRotate: 4,
        }}
      >
        {post?.map((actor, index) => (
          <SwiperSlide
            className="mt-6 w-[320px] overflow-hidden flex justify-between items-center pb-[15px] flex-col bg-[#f2f2f7] rounded-lg dark:bg-[#333333] border-b-2 border-[#ff3b30] dark:border-[#ff9500]"
            key={index}
            onMouseEnter={() => setImgImdbHover(index + 1)}
            onMouseLeave={() => setImgImdbHover(Number(null))}
          >
            <Link to={`/actor/${actor.id}`}>
            <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : actor?.gender === 1
                    ? women
                    : actor.gender === 2
                    ? men
                    : "https://www.kindpng.com/picc/m/421-4212275_cool-avatar-png-transparent-png.png"
                }
                alt={actor.original_name}
                className={`rounded-lg border-2 border-[#e5e5e5] dark:border-[#3a3a3c] w-full ${
                  !actor.profile_path && "w-[320px] h-[478px]"
                }`}
              />
             {actor.original_name && actor.character && <p className="mt-2 mx-2 flex flex-wrap">
                <p>
                  <strong>{actor.original_name}</strong> as {actor.character}
                </p>
              </p>}
              {imgImdbHover === index + 1 && (
                <div className="absolute top-0 flex flex-col justify-around gap-2 text-white px-2 py-2 w-full rounded-b-lg backdrop-blur-sm   bg-black/30">
                {actor.known_for_department && <p>
                  <strong>The famous part of the actor :</strong> as{" "}
                  <strong>{actor.known_for_department}</strong>{" "}
                </p>}
                <p>
                  <strong>Is the actor an adult :</strong>{" "}
                  <strong>{actor.adult ? "True" : "False"}</strong>{" "}
                </p>
                {actor.popularity && <p>
                  <strong>Popularity :</strong>{" "}
                  <strong>{actor.popularity}</strong>{" "}
                </p>}
                {actor.gender && <p>
                  <strong>Gender :</strong>{" "}
                  <strong>
                    {actor?.gender === 1
                      ? "Woman"
                      : actor?.gender === 2
                      ? "Man"
                      : ""}
                  </strong>{" "}
                </p>}
              </div>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PostCast;
