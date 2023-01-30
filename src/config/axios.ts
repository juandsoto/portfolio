import axios2 from "axios";
import { ENV } from "config";

const axios = axios2.create({
  baseURL: ENV.API_BASE_URL,
});

export default axios;
