import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Dashboard, ErrorPage, ARTemplate, SignIn} from "../components";

class ApplicationRoute extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/artemplate" component={ARTemplate}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Router>
        );
    }
}

export default ApplicationRoute;
