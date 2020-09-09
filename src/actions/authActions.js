import api from "../api";
import { authConstants } from "../constants";
//Regsister User
export const register_user_request = (user_data) => {
    const data = {
        name: user_data.userName,
        email: user_data.email,
        password: user_data.password
    }
    return function(dispatch) {
        return api.registerUser(data)
            .then(response => {
                dispatch({
                    type: authConstants.register_user_success,
                    payload: response.data
                });
            }).catch(error => {
                dispatch({
                    type: authConstants.register_user_fail,
                    payload: error
                });
            });
    };
};

//Login User
export const login_user_request = (login_details) => {
    return (dispatch => {
        return api.loginUser(login_details)
            .then(response => {
                dispatch({
                    type: authConstants.login_user_success,
                    payload: response.data
                });
            }).catch(error => {
                dispatch({
                    type: authConstants.login_user_fail,
                    payload: error
                });
            });
    });
}

//Open Registration modal
export const open_registration = () => {
    return {
        type: authConstants.open_register
    }
}

//Close Registration modal
export const close_registration = () => {
    return {
        type: authConstants.close_register
    }
}

//Open login modal
export const open_login = () => {
    return {
        type: authConstants.open_login
    }
}

//Close login modal
export const close_login = () => {
    return {
        type: authConstants.close_login
    }
}