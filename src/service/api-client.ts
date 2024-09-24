import axios, { AxiosRequestConfig } from "axios";
import { Discover } from "../hooks/useDiscover";

export interface FetchResponse<T> {
    genres: T[]
}
export interface FetchResponseFilm<T> {
    page: number;
    results: T[]
    next: number
}
export interface FetchResponsePlayedActor<T> {
  cast: T[]
}

interface ActorDetail{
  id: number;
  name:string;
  imdb_id:string;
  place_of_birth:string
  profile_path: string;
  biography: string;
  birthday:string;
  gender: number;
  popularity: number;
  known_for_department:string
}

export interface FetchResponseAllActor<T> {
  page: number;
  results: T[];
  total_pages: number;
  next: string | null
}

interface FetchResponseDiscover<T>{
  page: number;
  results: T[];
  total_results: number
}


const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0f63686a69a1ad9c568c51b88242c7ce",
  },
});



class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string){
    this.endpoint= endpoint;
  }

  getGenres = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }

  getFilm = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponseFilm<T>>(this.endpoint, config).then(res => res.data)
  }
  getActorDetail = (config: AxiosRequestConfig) => {
    return axiosInstance.get<ActorDetail>(this.endpoint, config).then(res => res.data)
  }
  getPostDetail = (config: AxiosRequestConfig) => {
    return axiosInstance.get<Discover>(this.endpoint, config).then(res => res.data)
  }
  getPlayedActor = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponsePlayedActor<T>>(this.endpoint, config).then(res => res.data)
  }

  getAllActor = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponseAllActor<T>>(this.endpoint, config).then(res => res.data)
  }
  getDiscover = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponseDiscover<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient;