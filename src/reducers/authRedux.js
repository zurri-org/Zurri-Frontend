import { authConstants } from "../constants";

const initialState = {
    user_details: [],
    auth_error: "",
    close_modal_register: false,
    close_modal_login: false
}

export function authRedux(state = initialState, action) {
    switch (action.type) {
      //register success
      case authConstants.register_user_success:
        localStorage.setItem("user", JSON.stringify(action.payload));
        return {
          ...state,
          user_details: action.payload,
          close_modal_register: false
        };
      //register fail
      case authConstants.register_user_fail:
        return {
          ...state,
          auth_error: action.payload
        };

      //login success
      case authConstants.login_user_success:
        // localStorage.setItem("user", JSON.stringify(action.payload));
        return {
          ...state,
          user_details: action.payload,
          close_modal_login: false
        }
      //login fail
      case authConstants.login_user_fail:
        return {
          ...state,
          auth_error: action.payload
        }

      //open register
      case authConstants.open_register:
        return {
          ...state,
          close_modal_register: true
        }
      //close register
      case authConstants.close_register:
        return {
          ...state,
          close_modal_register: false
        }

      //open login
      case authConstants.open_login:
        return {
          ...state,
          close_modal_login: true
        }
      //close login
      case authConstants.close_login:
        return {
          ...state,
          close_modal_login: false
        }

      default:
        return state;
    }
}