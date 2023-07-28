import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorerapi-0153.onrender.com",
});
