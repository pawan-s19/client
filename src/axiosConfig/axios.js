import axios from "axios";

const instance = axios.create({
  baseURL: "https://softnerveserver.onrender.com",
  withCredentials: true,
});

export default instance;
