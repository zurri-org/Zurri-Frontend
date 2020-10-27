import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Jumbotron, Container } from "react-bootstrap";
import { history } from "../store";
import AppHeader from "./static/NavBar";
import Footer from "./static/Footer";
import Notification from "./static/Notification";
const HomePage = lazy(() => import("./views/homepage"));
const AllHotels = lazy(() => import("./views/allhotels"));
const Hotel = lazy(() => import("./views/hotel"));
const Facilities = lazy(() => import("./views/facilities"));
const Aboutpage = lazy(() => import("./views/aboutpage"));
const ContactUs = lazy(() => import("./views/contactus"));
const Rooms = lazy(() => import("./views/rooms&rates"));
const Flights = lazy(() => import ("./views/flight"));
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

class MainApp extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <div className="main-container">
          <Notification
            notifyType={this.props.notifier.type}
            notifySms={this.props.notifier.sms}
          />
          <Suspense
            fallback={
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
                <Route exact path="/" component={HomePage} />
                <Route exact path="/allHotels" component={AllHotels} />
                <Route exact path="/hotel" component={Hotel} />
                <Route exact path="/facilities" component={Facilities} />
                <Route exact path="/Rooms&Rates" component={Rooms} />
                <Route exact path="/flights" component={Flights} />
                <Route exact path="/contactUs" component={ContactUs} />
                <Route exact path="/aboutpage" component={Aboutpage} />
                {/* <Route exact path="*" component={NotFound} /> */}
              </Router>
            </Switch>
          </Suspense>
        </div>
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
