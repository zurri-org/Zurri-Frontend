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

//Open modal
export const open_modal = () => {
    return {
        type: authConstants.open_forms
    }
}

//Close modal
export const close_modal = () => {
    return {
        type: authConstants.close_forms
    }
}