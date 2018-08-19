import React, {Component} from 'react';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';
import Milestones from './milestones';
import {Link} from 'react-router-dom';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: 0,
            weeks: 4,
            goal: 1000,
            goals: [
                {amount: 100, done: false},
                {amount: 300, done: true},
                {amount: 400, done: true, current: true},
                {amount: 100, done: undefined},
                {amount: 100, done: undefined}
            ],
            amount: 500,
            progress: 0
        };
    }

    componentDidMount() {
        this.handleProgressBar();
        console.log(this.props.userReducer.user);
    }

    componentWillMount() {
        if (
            !this.props.userReducer.isAuthorized ||
            this.props.userReducer.profile === undefined
        ) {
            this.props.history.push('/signin');
        } else if (
            this.props.userReducer.user === undefined ||
            this.props.userReducer.status === 'UPDATED'
        ) {
            this.props.userActions.getUser(this.props.userReducer.profile.email);
        }
    }

    componentWillUpdate(nextProps) {
        if (
            !nextProps.userReducer.isAuthorized ||
            nextProps.userReducer.profile === undefined
        ) {
            nextProps.history.push('/signin');
        } else if (
            nextProps.userReducer.user === undefined ||
            nextProps.userReducer.status === 'UPDATED'
        ) {
            nextProps.userActions.getUser(nextProps.userReducer.profile.email);
        }
    }

    handleProgressBar() {
        const activeGoal = this.props.userReducer.user ? this.props.userReducer.user.goals.find(
            goal => goal.isActive
        ) : undefined;
        if (activeGoal !== undefined) {
            const progress = (activeGoal.currentAmount * 100) / activeGoal.objective;
            this.setState({progress});
        }
    }

    handleGoalAchieved() {
        return this.props.userReducer.user.goals.filter(goal => goal.achieved)
            .length;
    }

    handleGoalMissed() {
        return this.props.userReducer.user.goals.filter(goal => (!goal.achieved && !goal.isActive))
            .length;
    }

    render() {
        const {mainGoal, weeks, goals, amount} = this.state;
        const activeGoal = this.props.userReducer.user ? this.props.userReducer.user.goals.find(
            goal => goal.isActive
        ) : undefined;
        return (
            <div className="wrapper">
                <Navigation title="Progress" exclude={activeGoal === undefined ? '' : 'Add Goal'}/>

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
                                                        {this.handleGoalAchieved()}
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
                                                        {this.handleGoalMissed()}
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
                                            <p className="category">
                                                {
                                                    activeGoal === undefined ? "You don't have an active goal" : "This is your current goal's progress."
                                                }
                                            </p>
                                            <br/>
                                        </div>
                                        {activeGoal === undefined ? '' :
                                            <div className="content">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar progress-bar-striped active"
                                                        role="progressbar"
                                                        style={{width: `${this.state.progress}%`}}
                                                    >
                                                        {this.state.progress}%
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {activeGoal === undefined ? '' :
                                        <Milestones
                                            goals={goals}
                                            mainGoal={mainGoal}
                                            weeks={weeks}
                                            amount={amount}
                                        />
                                    }
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

export default (Progress = connect(
    mapStateToProps,
    mapDispatchToProps
)(Progress));
