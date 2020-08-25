
import React,{Component} from 'react';
import Footer from './components/footerComponent/footer'
class App extends Component{
  render(){
    return(
      <div className="App">
        <Footer/>

      </div>
    )
  }

import React from "react";
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
