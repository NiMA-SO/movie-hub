import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";
import PostVideos from "../components/PostVideos";
import PostRecommendations from "../components/PostRecommendations";
import PostImage from "../components/PostImage";
import PostProperty from "../components/PostProperty";
import PostSimilar from "../components/PostSimilar";
import PostReviews from "../components/PostReviews";
import PostCast from "../components/PostCast";
import PostCrew from "../components/PostCrew";
import PostAccordions from "../components/PostAccordions";
import PostModalProvider from "../components/PostModalProvider";

const PostDetail = () => {
  const { id, type } = useParams();
  const { data: post } = usePostDetail({ postId: Number(id), type });

  console.log(post)

  if (post)
    return (
  <PostModalProvider>
      <main className="w-[98%] sm:w-[80%] mx-auto grid grid-cols-8 gap-4 my-12 auto-rows-auto">
        <div className="col-span-8 xl:col-span-5 p-4 rounded-xl overflow-hidden bg-white dark:bg-[#2c2c2e] text-[#333333] dark:text-[#f2f2f7] self-start">
          <div className="w-full rounded-xl grid grid-cols-2 gap-4">
            {post && <PostProperty post={post} />}
          </div>
          {/* {post.videos.results && post.videos.results.length != 0 && (
            <PostVideos post={post.videos.results} />
            )} */}
            <PostAccordions post={post} />
            {post.recommendations.results &&
              post.recommendations.results.length != 0 && (
                <PostRecommendations post={post.recommendations.results} />
              )}
            {post.similar.results && post.similar.results.length != 0 && (
              <PostSimilar post={post} type={type} />
            )}
        </div>
        <div className="col-span-8 xl:col-span-3 bg-white dark:bg-[#2c2c2e] p-4 rounded-xl overflow-hidden text-[#333333] dark:text-[#f2f2f7] self-start">
          {post.images.backdrops && post.images.backdrops.length != 0 && (
            <PostImage post={post} />
          )}
          {post.credits.cast && post.credits.cast.length > 0 && (
            <PostCast post={post.credits.cast} />
          )}
          {post.credits.crew && post.credits.crew.length > 0 && (
            <PostCrew post={post.credits.crew} />
          )}
          {post.reviews.results &&
            post.reviews.results.length != 0 &&
            post?.reviews.results.filter(
              (review) => review.author_details.avatar_path
            ).length != 0 && <PostReviews post={post.reviews.results} />}
        </div>
      </main>

  </PostModalProvider>
    );
};

export default PostDetail;
