import { Link } from "react-router-dom";
import useChangeProperty from "../../hooks/useChangeProperty";
import ImdbRate from "../post/ImdbRate";

interface Props {
  seriesId: number;
}
const UpdateProperty = ({ seriesId }: Props) => {
  const { data } = useChangeProperty({ seriesId });
  if (data?.backdrop_path)
    return (
      <li className="h-[80px] overflow-hidden col-span-2 rounded-lg flex justify-center items-center relative" >
        <Link to={`/post/${data.id}/tv`}>
        <img
          src={`https://image.tmdb.org/t/p/w780${data?.backdrop_path}`}
          alt=""
          className=" w-full"
        />
        <div className="absolute top-0 w-full h-full bg-black/30 backdrop-blur-[1px] p-2 flex justify-between items-center">
          <span className="text-white dark:text-white">{data.name}</span>
          <span>
            <ImdbRate
              blur={true}
              rating={data.vote_average}
              ratingCount={data.vote_count}
            />
          </span>
        </div>
        </Link>
      </li>
    );
};

export default UpdateProperty;
