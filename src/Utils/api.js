import axios from "axios";

const instance = axios.create({
    baseURL: 'https://115e-103-9-14-187.in.ngrok.io/api/auth',
    headers: {"Content-Type": "application/json"}
  });
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `${token}` : '';
    return config;
  });
  export default instance;