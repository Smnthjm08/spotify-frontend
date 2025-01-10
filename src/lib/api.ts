import API from "@/config/axios";

interface LoginResponse {
  message: string;
  status: number;
  // add other fields your API returns
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const loginRequest = async (data) => {
  const response = await API.post<LoginResponse>("/auth/login", data);
  console.log("response", response);
  return response.data;
};
