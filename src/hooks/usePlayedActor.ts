import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import { Film } from "./useNew";

const usePlayedActor = (endpoint: string, query:string) => {
    const apiClient = new APIClient<Film>(endpoint)
    return useQuery({
        queryKey:[query],
        queryFn: apiClient.getPlayedActor
    })
}

export default usePlayedActor;