import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface Changes {
  id: number;
  adult: boolean;
}

const useUpdate = () => {
  const apiClient = new APIClient<Changes>("/tv/changes");
  return useQuery({
      queryKey: ["tv changes"],
      queryFn: apiClient.getChanges,
    });
};

export default useUpdate;
