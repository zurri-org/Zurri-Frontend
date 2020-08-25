import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store";
import AppHeader from "./NavBar";
const HomePage = lazy(() => import("./views/homepage"));
const Facilities = lazy(() => import("./views/facilities"));

class MainApp extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <Suspense fallback={
                    <div>Loading...</div> 
                }>
                    <Switch>
                        <Router history={history}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/facilities" component={Facilities} />
                        </Router>
                    </Switch>
                </Suspense>
            </>
        )
    }
}
export default MainApp;