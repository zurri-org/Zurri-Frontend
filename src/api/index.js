import axios from "axios";
import { apiUrl } from "../constants";

const authInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "content-type": "application/json"
    },
});

export default {
    //auth api
    registerUser: (user_data) => authInstance({
        "method": "POST",
        "url": "/auth/register",
        "data": user_data
    }),
    loginUser: (user_data) => authInstance({
        "method": "POST",
        "url": "/auth/login",
        "data": user_data
    }),
    //hotel api
    // fetchHotels: () => hotel

};