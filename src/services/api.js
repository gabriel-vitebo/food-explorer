import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorerapi-6dz6.onrender.com",
});
