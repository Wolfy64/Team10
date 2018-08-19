import React, {Component} from "react";
import {Footer, Header, Navigation} from "../../index";
import {bindActionCreators} from "redux";
import * as userActions from "../../../actions/user";
import connect from "react-redux/es/connect/connect";
import Milestones from "./milestones";
import {Link} from "react-router-dom";

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: 4,
            goal: 1000,
            goals: [
                {amount: 100, done: false},
                {amount: 300, done: true},
                {amount: 400, done: true, current: true},
                {amount: 100, done: undefined},
                {amount: 100, done: undefined},
            ],
            amount: 500,
            progress: 0
        };
    }

    componentDidMount() {
        this.handleProgressBar();
    }

    componentWillMount() {
        if (!this.props.userReducer.isAuthorized || this.props.userReducer.profile === undefined) {
            this.props.history.push('/signin');
        } else if (this.props.userReducer.user === undefined || this.props.userReducer.status === 'UPDATED') {
            this.props.userActions.getUser(this.props.userReducer.profile.email);
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.userReducer.isAuthorized || nextProps.userReducer.profile === undefined) {
            nextProps.history.push('/signin');
        } else if (nextProps.userReducer.user === undefined || nextProps.userReducer.status === 'UPDATED') {
            nextProps.userActions.getUser(nextProps.userReducer.profile.email);
        }
    }

    handleProgressBar() {
        const {goal, amount} = this.state;
        const progress = amount * 100 / goal;
        this.setState({progress});
    }

    render() {
        const {mainGoal, weeks, goals, amount} = this.state;
        return (
            <div className="wrapper">
                <Navigation title="Progress"/>

                <div className="main-panel">
                    <Header title="Progress"/>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* === Goals === */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-success text-center">
                                                        <i className="fas fa-check-circle"/>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>Goals Achieved</p>
                                                        2
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ===  === */}
                                {/* === Goals === */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-danger text-center">
                                                        <i className="fas fa-times-circle text-danger"/>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>Goals Missed</p>
                                                        1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ===  === */}
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Active Goal</h4>
                                            <p className="category">This is your current goal's progress.</p>
                                        </div>
                                        <div className="content">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped active"
                                                     role="progressbar"
                                                     style={{width: `${this.state.progress}%`}}>
                                                    {this.state.progress}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Milestones goals={goals} mainGoal={mainGoal} weeks={weeks} amount={amount}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {userReducer: state.userReducer};
};

const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
};

export default (Progress = connect(mapStateToProps, mapDispatchToProps)(
    Progress
));
