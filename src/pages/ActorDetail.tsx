import { useParams } from "react-router-dom";
import useActorDetail from "../hooks/useActorDetail";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import usePlayedActor from "../hooks/usePlayedActor";
import ExpandableText from "../components/ExpandableText";
import SkeletonActorDetail from "../components/actor/actorDetail/SkeletonActorDetail";

const ActorDetail = () => {
  const param = useParams();
  const { data: person , isLoading: personLoad } = useActorDetail(Number(param.id));
  const { data: moviesPlayed, isLoading: movieLoad } = usePlayedActor(`/person/${param?.id}/movie_credits`,'movies played',Number(param.id));
  const { data: seriesPlayed, isLoading: seriesLoad } = usePlayedActor(`/person/${param?.id}/tv_credits`,'series played',Number(param.id));

  if(personLoad || movieLoad || seriesLoad){
    return <SkeletonActorDetail />
  }

  return (
    <div className="mx-auto my-8 w-[90%] grid grid-cols-6 gap-4">
      <table className="col-span-6 lg:col-span-2 bg-[#ffffff] dark:bg-[#2c2c2e] p-4 rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7]">
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c] ">
          <img
            src={`https://image.tmdb.org/t/p/w200${person?.profile_path}`}
            alt={person?.name}
            className="mx-auto rounded-3xl my-2"
          />
          <h2
            className="text-[16px] bg-[#f5c518] text-black font-bold px-[6px] rounded-md w-[3.5rem] select-none mb-2 mx-auto cursor-pointer"
            onClick={() =>
              (location.href = `https://www.imdb.com/name/${person?.imdb_id}`)
            }
          >
            IMDB
          </h2>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c] mt-2">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Name:</h2>
            <p className="">{person?.name}</p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Birthday:</h2>
            <p className="">{person?.birthday}</p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Known For:</h2>
            <p className="">{person?.known_for_department}</p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Gender:</h2>
            <p className="">
              {person?.gender == 0
                ? "Not set / not specified"
                : person?.gender == 1
                ? "Female"
                : person?.gender == 2
                ? "Male"
                : person?.gender == 3 && "Non-binary"}
            </p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Popularity:</h2>
            <p className="">{person?.popularity}</p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3 flex justify-between items-center">
            <h2 className="text-[16px]">Place of Birth:</h2>
            <p className="">{person?.place_of_birth}</p>
          </td>
        </tr>
        <tr className="border-collapse border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c]">
          <td className="px-7 py-3">
            <h2 className="text-xl mb-2">Biography:</h2>
            <ExpandableText limitLength={300}>{person?.biography}</ExpandableText>
          </td>
        </tr>
      </table>
      <div className="h-[850px] col-span-6 lg:col-span-4 bg-[#ffffff] dark:bg-[#2c2c2e] rounded-3xl overflow-hidden text-[#333333] dark:text-[#f2f2f7] ">
        <div className="border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c] px-6 pt-3">
          <h2 className="text-[25px]">
            The movies{" "}
            {person?.gender === 1 ? "she" : person?.gender === 2 ? "he" : ""} played :
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
              0:{slidesPerView:3},
              640:{slidesPerView:5},
              1024:{slidesPerView:4},
              1150:{slidesPerView:5},
              1300:{slidesPerView:6},
            }}
            spaceBetween={"20px"}
            loop={true}
            pagination={{type:'progressbar',enabled:true}}
            autoplay={{ delay: 10000 }}
            grabCursor={true}
            keyboard={true}
          >
            {moviesPlayed?.cast.map((movie) => (
              <SwiperSlide className="mt-6" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} className="rounded-lg border-2 border-[#e5e5e5] dark:border-[#3a3a3c]" />
                <p className="mt-2 ml-2">
                  {movie?.original_title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="border-[1px] border-solid border-[#e5e5e5] dark:border-[#3a3a3c] px-6 pt-3">
          <h2 className="text-[25px]">
            The series{" "}
            {person?.gender === 1 ? "she" : person?.gender === 2 ? "he" : ""} played :
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
              0:{slidesPerView:3},
              640:{slidesPerView:5},
              1024:{slidesPerView:4},
              1150:{slidesPerView:5},
              1300:{slidesPerView:6},
            }}
            spaceBetween={"20px"}
            loop={true}
            pagination={{type:'progressbar',enabled:true}}
            autoplay={{ delay: 10000 }}
            grabCursor={true}
            keyboard={true}
          >
            {seriesPlayed?.cast.map((series) => (
              <SwiperSlide className="mt-6" key={series.id}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${series.poster_path}`} alt={series.title} className="rounded-lg border-2 border-[#e5e5e5] dark:border-[#3a3a3c]" />
                <p className="mt-2 ml-2">
                  {series?.original_name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
