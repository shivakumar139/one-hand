import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://onehand.onrender.com/api/v1'
});

export default axiosInstance;