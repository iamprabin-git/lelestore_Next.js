import axios from 'axios';
// import config from '@/config';

async function login({email, password}){
    // return await axios.post(`${config.apiurl}/api/auth/login`, {email, password,});
}

export async function registerUser(data) {
  // Simulate a real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User registered:", data);
      resolve({ data: "User created" });
    }, 1000);
  });
}

export { login };