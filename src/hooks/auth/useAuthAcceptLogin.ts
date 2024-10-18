import { useMutation } from "@tanstack/react-query";
import APIClient from "../../service/api-client";

const useAuthAcceptLogin = () => {
  const apiClient = new APIClient("/authentication/token/validate_with_login");

  return useMutation({
    mutationKey: ["acceptLogin"],
    mutationFn: ({
      username,
      password,
      token,
    }: {
      username: string | undefined;
      password: string | undefined;
      token: string | undefined;
    }) => {
      return apiClient.postAcceptLogin({
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        data: {
          username,
          password,
          request_token: token,
        },
      });
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
export default useAuthAcceptLogin;
