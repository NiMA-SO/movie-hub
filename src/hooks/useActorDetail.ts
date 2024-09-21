import { useQuery } from "@tanstack/react-query"
import APIClient from "../service/api-client"


const useActorDetail = (id: number)=> {
    const apiClient = new APIClient(`/person/${id}`)
    return useQuery({
        queryKey: ['actor detail', id],
        queryFn: apiClient.getActorDetail
    })
}

export default useActorDetail