import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import { Discover } from "./useDiscover";


interface Props{
    postId: number;
    type: string | undefined;
}

const usePostDetail = ({postId , type} : Props) => {
    const apiClient = new APIClient<Discover>(`/${type}/${postId}`);
    
    return useQuery({
        queryKey: ['postDetail',type,postId],
        queryFn: () => apiClient.getPostDetail({
            params:{
                append_to_response: 'credits,videos,images,reviews,similar,recommendations',
            }
        })
    })
}

export default usePostDetail;