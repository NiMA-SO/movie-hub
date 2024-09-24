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
  release_date: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
  name: string;
  genres: Genre[];
  status: string;
  runtime: number;
  spoken_languages: Spoken[];
  imdb_id: string;
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
