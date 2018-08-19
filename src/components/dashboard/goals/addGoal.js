import React, {Component} from "react";
import {Footer, Header, Navigation} from "../../index";
import {bindActionCreators} from "redux";
import * as userActions from "../../../actions/user";
import connect from "react-redux/es/connect/connect";

class AddGoal extends Component {

    componentWillMount() {
        if (!this.props.userReducer.isAuthorized || this.props.userReducer.profile === undefined) {
            this.props.history.push('/signin');
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.userReducer.isAuthorized || this.props.userReducer.profile === undefined) {
            this.props.history.push('/signin');
        }
    }

    render() {
        return (
            <div className="wrapper">

                <Navigation title="Add Goal"/>

                <div className="main-panel">

                    <Header title="Add Goal"/>

                    <div className="content">
                        <div className="container-fluid">

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

export default AddGoal = connect(mapStateToProps, mapDispatchToProps)(AddGoal);