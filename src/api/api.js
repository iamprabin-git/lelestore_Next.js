import axios from "axios";
import config from "@/config";
import { getAuthToken } from "@/helpers/auth";

const api = axios.create({
  baseURL: config.apiUrl,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
