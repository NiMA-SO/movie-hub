import { Link } from "react-router-dom";
import useChangeProperty from "../../hooks/useChangeProperty";
import ImdbRate from "../post/ImdbRate";

interface Props {
  type: string;
  id: number;
}
const UpdateProperty = ({ type, id }: Props) => {
  const { data } = useChangeProperty({ type, id });
  console.log(data);
  // محاسبه طول متن برای تعیین تعداد ردیف‌ها
  // const textLength = data?.name.length || 0;
  // const rowSpan = Math.ceil(textLength / 30); // بر اساس تعداد کاراکترها تعداد ردیف را تعیین کنید (مثلاً هر 20 کاراکتر یک ردیف جدید)

  if (data?.backdrop_path || data?.poster_path || data?.profile_path)
    return (
      <li
        className={`flex justify-center items-center relative overflow-hidden col-span-2 md:col-span-1 rounded-lg hover:scale-[1.05] duration-200 ${
          type === "person" && 'h-[300px]'
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${
            data?.backdrop_path
              ? data?.backdrop_path
              : data?.poster_path
              ? data?.poster_path
              : data?.profile_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          gridRowEnd: `span ${1}`, // تعیین تعداد ردیف‌ها بر اساس طول متن
        }}
      >
        <Link
          to={`${type != 'person' ? `/post/${data?.id}/${type}` : `/actor/${id}`}`}
          className="w-full h-full flex flex-col justify-center items-center relative"
        >
          <div className="w-full h-full bg-black/30 backdrop-blur-[1px] p-2 flex flex-col justify-between items-center gap-2 pb-3">
            <span className="text-white dark:text-white w-70px">
              {data?.name ? data.name : data?.title}
            </span>
            {data?.vote_average ? (
              <span>
                <ImdbRate
                  blur={true}
                  rating={data?.vote_average}
                  ratingCount={data?.vote_count}
                />
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </li>
    );
};

export default UpdateProperty;
