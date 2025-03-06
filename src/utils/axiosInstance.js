import axios from "axios";
import appConfig from "../config/app-config";

export default axios.create({
  baseURL: appConfig["BASE_URL"],
});
