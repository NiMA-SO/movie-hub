import { Swiper, SwiperSlide } from "swiper/react";
import { Crew } from "../hooks/useDiscover";
import { Link } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import "./credit.css";

interface Props {
  post: Crew[];
}
const PostCrew = ({ post }: Props) => {
  // const [imgImdbHover, setImgImdbHover] = useState<number>(Number(null));

  return (
    <>
      <h2 className="text-[25px] mt-3">Crew :</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCards]}
        className="w-full rounded-md select-none mt-3 overflow-visible pb-[40px]"
        slidesPerView={"auto"}
        spaceBetween={"20px"}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{ delay: 1000 }}
        grabCursor={true}
        keyboard={true}
        // effect="cards"
        centeredSlides={true}
        // cardsEffect={{
        //   slideShadows: false,
        //   rotate: true,
        //   perSlideOffset: 4,
        //   perSlideRotate: 4,
        // }}
      >
        {post?.map((actor, index) => (
          <SwiperSlide
            className="crew mt-6 w-[300px] h-[auto]  overflow-hidden flex justify-between items-center pb-[15px] flex-col bg-[#f2f2f7] rounded-lg dark:bg-[#333333] border-b-2 border-[#ff3b30] dark:border-[#ff9500]"
            key={index}
            // onMouseEnter={() => setImgImdbHover(index + 1)}
            // onMouseLeave={() => setImgImdbHover(Number(null))}
          >
            <Link to={`/actor/${actor.id}`}>
              <div className="flex flex-col justify-around gap-3 text-[#1c1c1e] dark:text-[#fff] px-3 py-2 w-full rounded-b-lg">
                {actor.original_name && actor.job && (
                  <p className="mt-2 flex flex-wrap">
                    <p>
                      <strong>{actor.original_name}</strong> as {actor.job}
                    </p>
                  </p>
                )}
                {actor.known_for_department && (
                  <p>
                    <strong>The famous part of the actor :</strong>{" "}
                    {actor.known_for_department}{" "}
                  </p>
                )}
                <p>
                  <strong>Is the actor an adult :</strong>{" "}
                  {actor.adult ? "True" : "False"}{" "}
                </p>
                {actor.popularity && (
                  <p>
                    <strong>Popularity :</strong> {actor.popularity}{" "}
                  </p>
                )}
                {actor.department && (
                  <p>
                    <strong>Department :</strong> {actor.department}{" "}
                  </p>
                )}
                {actor.gender != 0 && (
                  <p>
                    <strong>Gender :</strong>{" "}
                    {actor?.gender === 1
                      ? "Woman"
                      : actor?.gender === 2
                      && "Man"}
                  </p>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PostCrew;
