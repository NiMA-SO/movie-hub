import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

export interface Film {
  id: number;
  original_title: string;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date:string;
  original_name:string
  vote_average:number;
  vote_count:number;
  media_type: string;
  imdb_id: string;
}

const useNews = (endpoint: string, query: string) => {
  const date = new Date();
  const dateFormat = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDay()).padStart(2, "0")}`;


  const apiClient = new APIClient<Film>(endpoint);
  return useQuery({
    queryKey: [query],
    queryFn: () =>
      apiClient.getFilm({
        params: {
          sort_by: "release_date.desc",
          "release_date.lte": dateFormat,
          page:1
        },
      }),
  });
};

export default useNews;
