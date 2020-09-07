import { authConstants } from "../constants";

const initialState = {
    user_details: [],
    auth_error: "",
    close_modal: false
}

export function authRedux(state = initialState, action) {
    switch (action.type) {
      case authConstants.open_forms:
        return {
          ...state,
          close_modal: true
        }

      case authConstants.close_forms:
        return {
          ...state,
          close_modal: false
        }

      case authConstants.register_user_success:
        localStorage.setItem("user", JSON.stringify(action.payload));
        return {
          ...state,
          user_details: action.payload,
          close_modal: false
        };

      case authConstants.register_user_fail:
        return {
          ...state,
          auth_error: action.payload
        };

      default:
        return state;
    }
}