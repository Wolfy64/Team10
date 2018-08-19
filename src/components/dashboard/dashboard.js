import React, {Component} from "react";
import {Footer, Header, Navigation} from "../index";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import * as userActions from "../../actions/user";
import connect from "react-redux/es/connect/connect";

class Dashboard extends Component {

    componentWillMount() {
        if (!this.props.userReducer.isAuthorized || this.props.userReducer.profile === undefined) {
            this.props.history.push('/signin');
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.userReducer.isAuthorized || nextProps.userReducer.profile === undefined) {
            nextProps.history.push('/signin');
        }
    }


    render() {
        return (
            <div className="wrapper">

                <Navigation title="Dashboard"/>

                <div className="main-panel">

                    <Header title="Dashboard"/>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/add-goal">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-primary text-center">
                                                            <i className="fas fa-plus"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Add</p>
                                                            Goal
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className="footer">
                                                <hr/>
                                                <div className="stats">
                                                    <i className="ti-reload"/> Updated now
                                                </div>
                                            </div>*/}
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/goals">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-danger text-center">
                                                            <i className="fas fa-bullseye"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>My</p>
                                                            Goals
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className="footer">
                                                <hr/>
                                                <div className="stats">
                                                    <i className="ti-reload"/> Updated now
                                                </div>
                                            </div>*/}
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/progress">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-success text-center">
                                                            <i className="fas fa-angle-double-up"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>My</p>
                                                            Progress
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*<div className="footer">*/}
                                                {/*<hr/>*/}
                                                {/*<div className="stats">*/}
                                                    {/*<i className="ti-reload"/> Updated now*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/rewards">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="fas fa-trophy"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Redeem</p>
                                                            Rewards
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className="footer">
                                                <hr/>
                                                <div className="stats">
                                                    <i className="ti-reload"/> Updated now
                                                </div>
                                            </div>*/}
                                            </div>
                                        </div>
                                    </Link>
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

const mapStateToProps = (state) => {
    return {userReducer: state.userReducer}
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);