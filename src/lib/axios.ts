import axios from "axios";

// Create an instance of axios with a base URL
export const Axios = axios.create({
  baseURL: "https://localhost:7167/api/", // Replace this with your base URL
});
