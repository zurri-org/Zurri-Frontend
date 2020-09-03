import { authConstants } from "../constants";

const initialState = {
    user_details: [],
    auth_rror: ""
}

export function authRedux(state = initialState, action) {
    switch (action.type) {
      case authConstants.register_user:
        console.log("reducer", action.payload);
        return {
          ...state,
          user_details: action.payload
        };
      case authConstants.register_user_success:
        return {
          ...state,
        };
      case authConstants.register_user_fail:
        return {
          ...state,
        };

      default:
        return state;
    }
}