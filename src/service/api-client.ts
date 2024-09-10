import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    genres: T[]
}
export interface FetchResponseFilm<T> {
    page: number;
    results: T[]
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

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }

  getFilm = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponseFilm<T>>(this.endpoint, config).then(res => res.data)
  }

  // get = (id : number | string) =>{
  //   return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data)
  // }
}

export default APIClient;