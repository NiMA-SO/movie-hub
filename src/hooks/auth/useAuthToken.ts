import { useQuery } from "@tanstack/react-query";
import APIClient from "../../service/api-client";

const useAuthToken = () => {
    const apiClient = new APIClient('/authentication/token/new');
    return useQuery({
        queryKey: ['token'],
        queryFn: apiClient.getAuthToken
    })
}

export default useAuthToken;