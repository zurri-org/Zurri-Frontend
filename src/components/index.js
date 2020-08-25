import React, { Component, Suspense, lazy, withRouter } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store";
import AppHeader from "./NavBar";
const HomePage = withRouter(lazy(() => import("./views/homepage")));
const Facilities = withRouter(lazy(() => import("./views/facilities")));

class MainApp extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <Suspense fallback={
                    <div>Loading....</div>
                }>
                    <Switch>
                        <Router history={history} >
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