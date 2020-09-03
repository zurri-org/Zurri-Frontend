import { authConstants } from "../constants"

//Regsister User
export const registerUserRequest = (userData) => {
    return {
        type: authConstants.register_user,
        payload: userData
    }
}

//Register Success
export const registerUserSuccess = (user) => {
    return {
        type: authConstants.register_user_success,
        payload: user
    }
}

//Register Failure
export const registerUserFail = () => {
    return {
        type: authConstants.register_user_fail
    }
}