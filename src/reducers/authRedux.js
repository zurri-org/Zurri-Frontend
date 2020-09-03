import { authConstants } from "../constants";

const initialState = {
    User: [],
    Loading: false,
    authError: ""
}

export function authRedux(state = initialState, action) {
    switch (action.type) {
        case authConstants.register_user:
            
            return {
                ...state,
                Loading: true
            };
    
        default:
            return state;
    }
}