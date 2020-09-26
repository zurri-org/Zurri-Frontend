import axios from "axios";
import { apiUrl } from "../constants";

const apiInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "content-type": "application/json",
  },
});

export default {
  //auth api
  registerUser: (user_data) =>
    apiInstance({
      method: "POST",
      url: "/auth/register",
      data: user_data,
    }),
  loginUser: (user_data) =>
    apiInstance({
      method: "POST",
      url: "/auth/login",
      data: user_data,
    }),
  //hotel api
  fetchHotels: () =>
    apiInstance({
      method: "GET",
      url: "/hotels",
    }),
};
