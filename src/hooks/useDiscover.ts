import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

// تعریف اینترفیس‌های مربوط به داده‌ها
export interface Discover {
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
  name: string;
  status: string;
  imdb_id: string;
  runtime: number;
  spoken_languages: Spoken[];
  genres: Genre[];
  homepage: string;
  origin_country: string[];
  production_countries: Companies[];
  budget: number;
  revenue: number;
  tagline: string;
  number_of_seasons: number;
  number_of_episodes: number;

  credits: {cast : Cast[], crew : Crew[]}
  images: {backdrops : Images[]}
  reviews: {results : Reviews[]}
  similar: {results: Similar[]}
  videos: {results: PostVideo[]}
  recommendations: {results : Recommendations[]}
  production_companies: Companies[];
  seasons: Seasons[]
}

interface Seasons{
  season_number: number,
  episode_count: number,
  air_date: number,
  name: string,
  poster_path: string
}
interface Companies{
  id: number;
  logo_path: string;
  name: string;
  origin_country: string
}

export interface Cast{
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew{
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}


export interface Images{
  aspect_ratio: number;
  width: number;
  height: number;
  file_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Reviews {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string; // تاریخ به فرمت ISO-8601
  id: string; // شناسه‌ی نقد
  updated_at: string; // تاریخ آخرین بروزرسانی
  url: string; // لینک نقد در سایت TMDB
  imdb_id: string;
}
interface Similar{
  id: number;
  original_title: string;
  original_name: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count:number;
  media_type: string;
}
export interface Recommendations{
  id: number,
  original_title:string;
  original_name:string;
  poster_path: string,
  release_date: string,
  vote_average: number;
  vote_count:number;
  media_type: string;
}

export interface PostVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
interface Genre {
  id: number;
  name: string;
}

interface Spoken {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// اضافه کردن صفحه به پارامترهای هوک
const useDiscover = (endpoint: string, query: string, page: number) => {
  const apiClient = new APIClient<Discover>(endpoint);

  return useQuery({
    queryKey: [query, page], // صفحه را به queryKey اضافه می‌کنیم تا داده‌ها بر اساس صفحه تغییر کنند
    queryFn: () =>
      apiClient.getDiscover({
        params: {
          page: page, // شماره صفحه به API فرستاده می‌شود
        },
      }),
    keepPreviousData: true, // داده‌های صفحه قبلی را حفظ می‌کند تا بارگذاری صفحه جدید نرم‌تر باشد
  });
};

export default useDiscover;
