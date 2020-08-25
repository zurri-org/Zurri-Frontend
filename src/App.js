import React from "react";
import AppHeader from "./components/NavBar";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import MainApp from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainApp/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
