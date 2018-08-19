import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Dashboard, ErrorPage, SignIn, AddGoal, Goals, Rewards, Progress} from "../components";

class ApplicationRoute extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/add-goal" component={AddGoal}/>
                    <Route exact path="/goals" component={Goals}/>
                    <Route exact path="/rewards" component={Rewards}/>
                    <Route exact path="/progress" component={Progress}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Router>
        );
    }
}

export default ApplicationRoute;
