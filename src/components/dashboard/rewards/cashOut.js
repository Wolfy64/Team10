import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';

class CashOut extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitForm(event) {
        event.preventDefault();
        // let formData = new FormData();
        // formData.append('name', this.state.name);
        // formData.append('email', this.state.email);
        // this.props.userActions.cashOut(this.props.userReducer.user, this.state);
        event.target.reset();
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

    render() {
        const activeGoal = this.props.userReducer.user ? this.props.userReducer.user.goals.find(
            goal => goal.isActive
        ) : undefined;
        return (
            <div className="wrapper">
                <Navigation title="Rewards" exclude={activeGoal === undefined ? '' : 'Add Goal'}/>

                <div className="main-panel">
                    <Header title="Cash Out"/>

                    <div className="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-8 col-md-7">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Cash out Flourish Tokens</h4>
                                        </div>
                                        <div className="content">
                                            <form onSubmit={this.submitForm}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Receiver's Address</label>
                                                            <input type="text"
                                                                   className="form-control border-input"
                                                                   placeholder="wallet address"
                                                                   name="address"
                                                                   onChange={(event) => this.handleChange(event)}
                                                                   required/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Amount (FT)</label>
                                                            <input type="number"
                                                                   className="form-control border-input"
                                                                   placeholder="number of Flourish Tokens"
                                                                   name="amount"
                                                                   min="1"
                                                                   onChange={(event) => this.handleChange(event)}
                                                                   required/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit"
                                                            className="btn btn-info btn-fill btn-wd">Cash Out
                                                    </button>
                                                </div>
                                                <div className="clearfix"/>
                                            </form>
                                        </div>
                                    </div>
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

const
    mapStateToProps = state => {
        return {userReducer: state.userReducer};
    };

const
    mapDispatchToProps = dispatch => {
        return {
            userActions: bindActionCreators(userActions, dispatch)
        };
    };

export default (CashOut = connect(
    mapStateToProps,
    mapDispatchToProps
)(CashOut));
