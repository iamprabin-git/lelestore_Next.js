// utils/api.js
import config from "@/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.apiUrl,
});

if (typeof window !== "undefined") {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export default api;
