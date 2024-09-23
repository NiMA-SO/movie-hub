import Post from "./Post";

interface Discover {
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  media_type: string
  name: string;
  genres: Genre[];
  status:string;
  runtime: number;
  spoken_languages: Spoken[];
  imdb_id: string;
}

interface Genre{
  id: number;
  name: string
}

interface Spoken {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Props {
  data: Discover[] | undefined;
}

const Discover = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {data?.map((post) => (
       <Post postId={post.id} type={post.media_type} key={post.id}/>
      ))}
    </div>
  );
};

export default Discover;
