import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface Changes {
  id: number;
  adult: boolean;
}

const useUpdate = (type : string) => {
  const apiClient = new APIClient<Changes>(`/${type}/changes`);
  return useQuery({
      queryKey: ["changes",type],
      queryFn: apiClient.getChanges,
    });
};

export default useUpdate;
