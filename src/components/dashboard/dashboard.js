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

                    <Header title="Dashboard"
                            userName={this.props.userReducer.profile ? this.props.userReducer.profile.fullName : ''}
                            userImage={this.props.userReducer.profile ? this.props.userReducer.profile.imageURL : ''}
                            userActions={this.props.userActions}
                    />

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <Link to="/artemplate">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-camera"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>ARTemplate</p>
                                                            AR
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