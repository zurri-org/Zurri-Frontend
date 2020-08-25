import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "../reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";

export const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), logger];

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const initialState = {};
const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;