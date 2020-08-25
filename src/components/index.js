import React, { Component, Suspense, lazy, withRouter } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store";
const HomePage = withRouter(lazy(() => import("./views/homepage")));

class App extends Component {
    render() {
        return(
            <Suspense fallback={
                <div>Loading....</div>
            }>
                <Switch>
                    <Router history={history} >
                        <Route exact path="/" component={HomePage} />
                    </Router>
                </Switch>
            </Suspense>
        )
    }
}