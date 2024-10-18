import { useMutation } from "@tanstack/react-query";
import APIClient from "../../service/api-client";

const useAuthSession = () => {
    const apiClient = new APIClient("/authentication/session/new");
  
    return useMutation({
      mutationKey: ["createSession"],
      mutationFn: (request_token: string | undefined) => {
        return apiClient.getAuthSession({
          headers: { "Content-Type": "application/json" },
          data: { request_token }, // استفاده از توکن تایید شده
        });
      },
      onSuccess: (data) => {
        console.log("Session created successfully:", data);
        // session_id را ذخیره کنید
      },
      onError: (error) => {
        console.error("Failed to create session:", error);
      },
    });
  };

export default useAuthSession;