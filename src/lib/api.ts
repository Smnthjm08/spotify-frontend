import API from "@/config/axios";

type loginTypes = {
  email: string;
  password: string;
  userAgent?: string;
  // add other fields your API returns
};

type registerTypes = {
  userAgent?: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

//login post request
export const loginRequest = async (data: loginTypes) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

//register post request
export const registerRequest = async (data: registerTypes) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

// verify email get request
export const verifyEmailRequest = async(code: string | undefined) => {
  const response = await API.get(`/auth/verify-email/${code}`);
  return response.data;
}