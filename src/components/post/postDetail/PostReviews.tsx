import { Link } from "react-router-dom";
import { Reviews } from "../../../hooks/useDiscover";
import ImdbRate from "../ImdbRate";
import ExpandableText from "../../ExpandableText";

interface Props {
  post: Reviews[];
}

const getTimeSincePosted = (created_at: string) => {
  const now = new Date();
  const postedDate = new Date(created_at);
  const seconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year(s) ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month(s) ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day(s) ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour(s) ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute(s) ago`;

  return `${Math.floor(seconds)} second(s) ago`;
};

// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
// return new Intl.DateTimeFormat('en-US', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// }).format(date);
//   return `Date: ${date.getFullYear()} / ${date.getMonth()} / ${date.getDay()}  |  Time: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
// };

const PostReviews = ({ post }: Props) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <h2 className="text-[25px] my-8 ">Reviews :</h2>
      <div className="gap-2 flex flex-col">
        {post.map((review, index) => (
          <div key={index} className="w-full py-3 mx-auto flex flex-wrap items-center gap-2 bg-[#e5e5e5] dark:bg-[#3a3a3c] rounded-xl">
            <div className="w-[60px] h-[60px] mx-2 rounded-full overflow-hidden self-start">
              <img
                src={
                  review.author_details.avatar_path
                    ? `${baseUrl}${review.author_details.avatar_path}`
                    : "https://www.kindpng.com/picc/m/421-4212275_cool-avatar-png-transparent-png.png"
                }
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col mx-auto sm:mx-0 w-[90%] sm:w-[75%] gap-1">
              <h2 className="text-[16px] flex gap-7">
                <Link
                  to={review.url}
                >
                  <strong>{review.author_details.username} :</strong>
                </Link>
                <span>{getTimeSincePosted(review.created_at)}</span>
              </h2>
              <ExpandableText limitLength={100}>
                {review.content}
              </ExpandableText>
            </div>

            {review.author_details.rating && (
              <ImdbRate rating={review?.author_details.rating} blur={false} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PostReviews;
