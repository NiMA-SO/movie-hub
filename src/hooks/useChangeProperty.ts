import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface Props {
  id: number;
  type: string
}
interface TVShow {
    id: number;
    name: string;
    title: string;
    backdrop_path: string | null; // مسیر تصویر پس‌زمینه، ممکن است null باشد
    poster_path: string | null; // مسیر تصویر پوستر، ممکن است null باشد
    profile_path: string | null;
    overview: string; // توضیحات سریال
    first_air_date: string; // تاریخ اولین پخش
    vote_average: number;
    vote_count: number;
}


const useChangeProperty = ({ id,type }: Props) => {
    const apiClient = new APIClient<TVShow>(`/${type}/${id}`)
    return useQuery({
        queryKey: ['change property', id],
        queryFn: apiClient.getChangeProperty
    })
};

export default useChangeProperty;
