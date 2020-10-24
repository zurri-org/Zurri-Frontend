import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authRedux } from "./authRedux";
import { hotelRedux } from "./hotelRedux";


export default history => combineReducers({
    router: connectRouter(history),
    Auth : authRedux,
    Hotel: hotelRedux
    //Other reducers,
});