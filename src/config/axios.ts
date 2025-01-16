import axios from "axios";
import queryClient from "./query-client";
import { navigate } from "@/lib/navigation";

const options = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const TokenRefreshClient = axios.create(options);

TokenRefreshClient.interceptors.response.use((response) => response?.data);

const API = axios.create(options);

API.interceptors.response.use(
  // Only focus on the data we get
  (response) => response?.data,
  // Error response settings
  async (error) => {
    const { config, response } = error;
    const { status, data } = response;
    console.log(response, "response");

    // Try to refresh the token behind the scenes
    if (status === 401 && data.errorCode === "InvalidAccessToken") {
      try {
        await TokenRefreshClient.get("/auth/refresh");
        // Retry the original request with the new token
        return TokenRefreshClient(config);
      } catch (error) {
        // Clear the query client and navigate to login page
        queryClient.clear();
        navigate("/login", {
          state: {
            redirectUrl: window.location.pathname,
          },
        });
      }
    }

    return Promise.reject({ status, ...data });
  }
);

export default API;
