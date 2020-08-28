import axios from "axios";

const config = {
  timeout: 3000,
  baseURL: "http://localhost:3001",
};

const api = axios.create(config);

export default api;
