import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface Props {
  seriesId: number;
}
interface TVShow {
    id: number;
    name: string;
    backdrop_path: string | null; // مسیر تصویر پس‌زمینه، ممکن است null باشد
    poster_path: string | null; // مسیر تصویر پوستر، ممکن است null باشد
    overview: string; // توضیحات سریال
    first_air_date: string; // تاریخ اولین پخش
    vote_average: number;
    vote_count: number;
}


const useChangeProperty = ({ seriesId }: Props) => {
    const apiClient = new APIClient<TVShow>(`/tv/${seriesId}`)
    return useQuery({
        queryKey: ['change property', seriesId],
        queryFn: apiClient.getChangeProperty
    })
};

export default useChangeProperty;
