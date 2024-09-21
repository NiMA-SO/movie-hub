import { useQuery } from "@tanstack/react-query";
import Discover from "../components/Discover";
import APIClient from "../service/api-client";


interface Props{
    postId: number;
    type: string
}

const usePostDetail = ({postId , type} : Props) => {
    const apiClient = new APIClient<Discover>(`/${type}/${postId}`);
    console.log(postId)
    return useQuery({
        queryKey: ['postDetail',type,postId],
        queryFn: apiClient.getPostDetail
    })
}

export default usePostDetail;