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

type resetPasswordTypes = {
  password: string;
  verificationCode: string;
};

//login POST request
export const loginRequest = async (data: loginTypes) => {
  const response = await API.post("/auth/login", data);

  console.log(response, "response");
  return response.data;
};

// logout GET request
export const logoutRequest = async () => {
  const response = await API.get("/auth/logout");
  return response.data;
};

//register POST request
export const registerRequest = async (data: registerTypes) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

// verify email GET request
export const verifyEmailRequest = async (code: string | undefined) => {
  const response = await API.get(`/auth/verify-email/${code}`);
  return response.data;
};

// forgot password POST request
export const sendPasswordResetEmailRequest = async (email: string) => {
  const response = await API.post("/auth/forgot-password", { email });
  return response.data;
};

// reset password POST request
export const resetPasswordRequest = async (data: resetPasswordTypes) => {
  const response = await API.post("/auth/reset-password", data);
  return response.data;
};

// GET user
export const getUserRequest = async () => {
  const response = await API.get("/user");
  return response.data;
};

// GET sessions
export const getSessionsRequest = async () => {
  const response = await API.get("/sessions");
  return response.data;
};

// DELETE session
export const deleteSessionRequest = async (sessionID: string) => {
  const response = await API.delete(`/sessions/${sessionID}`);
  return response.data;
};
