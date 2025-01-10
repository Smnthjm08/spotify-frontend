import axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const API = axios.create(options);

// API.interceptors.response.use(
//   //only focused on the data we get
//   (response) => response?.data,
//   //error response settings
//   (error) => {
//     const { status, data } = error.response;
//     return Promise.reject({ status, ...data });
//   }
// );

export default API;
