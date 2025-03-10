import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase fnctions
  // baseURL: "http://127.0.0.1:5001/fir-fa5db/us-central1/api",

  //deployed version of firebase function
  baseURL: "https://api-aua6ethneq-uc.a.run.app/",

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-rof6.onrender.com/",
});

export {axiosInstance}