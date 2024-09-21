import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface Genre{
    id:number;
    name:string;
}



const useGenres = (endpoint : string,query : string) =>{
    const apiClient = new APIClient<Genre>(endpoint)
    return useQuery({
        queryKey: [query],
        queryFn: apiClient.getGenres
    })
}

export default useGenres;