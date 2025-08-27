import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(err);
  }
);

export default api;
