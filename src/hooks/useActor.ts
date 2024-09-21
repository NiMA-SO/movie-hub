import { useQuery } from "@tanstack/react-query"
import APIClient from "../service/api-client"

interface Actor{
    id:number;
    original_name: string;
    profile_path:string;
}

const apiClient = new APIClient<Actor>('/person/popular')

const useActor = () => {
    return useQuery({
        queryKey: ['actor'],
        queryFn: apiClient.getFilm
    })
}

export default useActor