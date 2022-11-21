import axios from "axios";
import { getToken, removeUserSession } from "../utils/Common";


const baseURL = 'https://safowater-role.herokuapp.com';
const service = axios.create({
  baseURL,
});

service.interceptors.response.use(
  (res) => res.data,
  (error)=>{
    if (error.response.status === 401) {
      removeUserSession();
      window.location.href = '/login';
    }
    return Promise.reject(error)
  }
  )

service.interceptors.request.use((config)=>{
  const token = getToken();
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

export { service };