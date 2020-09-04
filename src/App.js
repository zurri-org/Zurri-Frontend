import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import MainApp from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="main-app">
          <MainApp />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
