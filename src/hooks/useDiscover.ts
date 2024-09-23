import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

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

const useDiscover = (endpoint: string, query: string) => {
  const apiClient = new APIClient<Discover>(endpoint);
  return useQuery({
    queryKey: [query],
    queryFn: () =>
      apiClient.getDiscover({
        params: {
          page: 2,
        },
      }),
  });
};

export default useDiscover;
