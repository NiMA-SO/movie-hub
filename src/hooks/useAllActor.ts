import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponseAllActor } from "../service/api-client";

// تعریف نوع بازیگر
export interface Actor {
  id: number;
  original_name: string;
  profile_path: string;
}

interface PostQuery {
  pageSize: number;
}

// تعریف نوع پاسخ از API که شامل لیستی از بازیگران و صفحه‌بندی است

// ایجاد APIClient برای بازیگران
const apiClient = new APIClient<Actor>("/person/popular");

const useAllActor = (query: PostQuery) => {
  return useInfiniteQuery<FetchResponseAllActor<Actor>, Error>({
    queryKey: ["actor", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAllActor({
        params: {
          page:pageParam
        },
      }),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    }
  });
};

export default useAllActor;
