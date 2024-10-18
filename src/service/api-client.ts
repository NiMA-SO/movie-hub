import axios, { AxiosRequestConfig } from "axios";
import { Discover } from "../hooks/useDiscover";

export interface FetchResponse<T> {
  genres: T[];
}
export interface FetchResponseFilm<T> {
  page: number;
  results: T[];
  next: number;
}
export interface FetchResponsePlayedActor<T> {
  cast: T[];
}

interface ActorDetail {
  id: number;
  name: string;
  imdb_id: string;
  place_of_birth: string;
  profile_path: string;
  biography: string;
  birthday: string;
  gender: number;
  popularity: number;
  known_for_department: string;
}

export interface FetchResponseAllActor<T> {
  page: number;
  results: T[];
  total_pages: number;
  next: string | null;
}

interface FetchResponseDiscover<T> {
  page: number;
  results: T[];
  total_results: number;
}

interface FetchResponsePostImages<T> {
  id: number;
  backdrops: T[];
}
interface FetchResponsePostVideos<T> {
  id: number;
  results: T[];
}

interface FetchResponsePostChanges<T> {
  results: T[];
}

interface AuthToken {
  success: boolean;
  expires_at: string;
  request_token: string;
}
interface AuthSession {
  success: boolean;
  session_id: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0f63686a69a1ad9c568c51b88242c7ce",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getGenres = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getFilm = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseFilm<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getActorDetail = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<ActorDetail>(this.endpoint, config)
      .then((res) => res.data);
  };
  getPostDetail = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Discover>(this.endpoint, config)
      .then((res) => res.data);
  };
  getPostImages = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponsePostImages<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getPostVideos = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponsePostVideos<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getPlayedActor = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponsePlayedActor<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getAllActor = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseAllActor<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getDiscover = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseDiscover<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getSeasons = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
  getChanges = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponsePostChanges<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getChangeProperty = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
  getAuthToken = (config: AxiosRequestConfig) => {
    return axiosInstance.get<AuthToken>(this.endpoint, config).then((res) => res.data);
  };
  getAuthSession = (config: AxiosRequestConfig) => {
    return axiosInstance.post<AuthSession>(this.endpoint, config.data).then((res) => res.data);
  };
  postAcceptLogin = (config: AxiosRequestConfig) => {
    return axiosInstance.post<AuthToken>(this.endpoint, config.data).then((res) => res.data);
};
}

export default APIClient;
