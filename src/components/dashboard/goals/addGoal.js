import React, {Component} from "react";
import {Footer, Header, Navigation} from "../../index";
import {bindActionCreators} from "redux";
import * as userActions from "../../../actions/user";
import connect from "react-redux/es/connect/connect";
import styled from "styled-components";

const Form = styled.form`
  width: 90vw;
`;

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {goal: null};
        this.selectGoal = this.selectGoal.bind(this);
    }

    componentWillMount() {
        if (
            !this.props.userReducer.isAuthorized ||
            this.props.userReducer.profile === undefined
        ) {
            this.props.history.push("/signin");
        }
    }

    componentWillUpdate(nextProps) {
        if (
            !nextProps.userReducer.isAuthorized ||
            this.props.userReducer.profile === undefined
        ) {
            this.props.history.push("/signin");
        }
    }

    selectGoal = e => {
        e.preventDefault();
        const {goal, amount, weeks} = e.target;
        // console.log(e.target.goal.value);
        const {name} = e.target;
        console.log(name);
        this.setState({[name]: name.value});
    };

    render() {
        const {goal} = this.state;
        const options = ["travel", "family", "product", "emergency"];
        return (
            <div className="wrapper">
                <Navigation title="Add Goal"/>

                <div className="main-panel">
                    <Header title="Add Goal"/>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="card">
                                {/*<div className="content">*/}
                                    {!goal ? (
                                        <Form onSubmit={this.selectGoal}>
                                            <h2 className="text-center">What Are You Saving For?</h2>
                                            <div className="row text-center">
                                                <select
                                                    name="goal"
                                                    className="custom-select form-group"
                                                >
                                                    <option selected>What are you saving for?</option>
                                                    {options.map((el, i) => (
                                                        <option key={i}>{el}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Amount</label>
                                                        <input
                                                            type="text"
                                                            className="form-control border-input"
                                                            placeholder="Home Address"
                                                            value="Melbourne, Australia"
                                                            oldautocomplete="remove"
                                                            autocomplete="off"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn btn-success">
                                                    Next
                                                </button>
                                            </div>
                                        </Form>
                                    ) : (
                                        <div>foo</div>
                                    )}
                                {/*</div>*/}
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

export default (AddGoal = connect(mapStateToProps, mapDispatchToProps)(
    AddGoal
));
