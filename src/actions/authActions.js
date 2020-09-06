import { authConstants, apiUrl } from "../constants";
import axios from "axios";

//Regsister User
export const register_user_request = (user_data) => {
    const data = {
        name: user_data.userName,
        email: user_data.email,
        password: user_data.password
    }
    return function(dispatch) {
        return axios.post(`${apiUrl}/auth/register`, data)
            // .then(response => response.json)
            .then(response => {
                dispatch({
                    type: authConstants.register_user,
                    payload: response.data
                });
            });
    };
};

//Register Success
export const register_user_success = (user) => {
    return {
        type: authConstants.register_user_success,
        payload: user
    }
}

//Register Failure
export const register_user_fail = () => {
    return {
        type: authConstants.register_user_fail
    }
}