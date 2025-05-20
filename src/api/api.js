"use client";
import config from "@/config";
import axios from "axios";
import localStorage from "redux-persist/es/storage";

const authToken = localStorage.getItem("token");
const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});



export default api;
