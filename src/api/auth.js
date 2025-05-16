import axios from 'axios';
import config from '@/config';

export async function login({ email, password }) {
  return await axios.post(`${config.apiUrl}/api/auth/login`, { email, password });
}

export async function registerUser(data) {
  return await axios.post(`${config.apiUrl}/api/auth/register`, data);
}
