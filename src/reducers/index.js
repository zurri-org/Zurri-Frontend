import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authRedux } from "./authRedux";


export default history => combineReducers({
    router: connectRouter(history),
    Auth : authRedux,
    //Other reducers,
});