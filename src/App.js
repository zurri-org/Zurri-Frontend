import React from "react";
import AppHeader from "./components/NavBar";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import App from "./components";

const App = () => {
  return (
    <>
      <AppHeader />
    </>
  );
}

export default App;
