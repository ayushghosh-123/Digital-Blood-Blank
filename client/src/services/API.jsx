import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL || 8080, // Default fallback
});

API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default API;

