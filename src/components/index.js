import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Jumbotron, Container } from "react-bootstrap";
import { history } from "../store";
import AppHeader from "./static/NavBar";
import Footer from "./static/Footer";
import Notification from "./static/Notification";
const LandingPage = lazy(() => import("./views/landingPage"));
const HomePage = lazy(() => import("./views/homepage"));
const Facilities = lazy(() => import("./views/facilities"));
const Aboutpage = lazy(() => import("./views/aboutpage"));
const ContactUs = lazy(() => import("./views/contactus"));
const Rooms = lazy(() => import("./views/rooms&rates"));
// const NotFound = lazy(() => import("./views/notFound"));

//for skipping authentication for development uncomment the line below.
// const Skip = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("user")) &&
      (JSON.parse(localStorage.getItem("user")).data.token ? true : false) ? (
        //for development, if you want to skip Authentication please uncomment the line below and comment the one up.
        // (Skip)?(
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
// defining public route
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("user")) &&
      (JSON.parse(localStorage.getItem("user")).data.token ? true : false) ? (
        <Redirect to="/home" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class MainApp extends Component {

  render() {
    console.log(this.props.notifier);
    return (
      <>
        <AppHeader />
        <Notification
          notifyType={this.props.notifier.type}
          notifySms={this.props.notifier.sms}
        />
        <Suspense
          fallback = {
            <Jumbotron fluid className="top-section mb-4 mr-auto ml-auto">
              <Container>
                <h1>Loading......</h1>
                <p>Please wait</p>
              </Container>
            </Jumbotron>
          }
        >
          <Switch>
            <Router history={history}>
              <PublicRoute exact path="/" component={LandingPage} />
              <PrivateRoute exact path="/home" component={HomePage} />
              <PrivateRoute exact path="/facilities" component={Facilities} />
              <PrivateRoute exact path="/Rooms&Rates" component={Rooms} />
              <PrivateRoute exact path="/contactUs" component={ContactUs} />
              <Route exact path="/aboutpage" component={Aboutpage} />
              {/* <Route exact path="*" component={NotFound} /> */}
            </Router>
          </Switch>
        </Suspense>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  const { notifier } = Auth;
  return { notifier };
};
export default connect(mapStateToProps, {})(MainApp);
