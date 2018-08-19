import React, {Component} from 'react';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: 0,
            renderWeeks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        console.log(event.target.id);
        this.setState({
            [event.target.id]: event.target.value
        });
        if (event.target.id === 'weeks') this.handleRenderWeeks(event.target.value);
    }

    handleRenderWeeks(weeks) {
        let renderWeeks = [];
        for (let i = 0; i < weeks; i++) {
            renderWeeks.push(
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Week {i + 1}</label>
                            <input
                                id="weeks"
                                type="number"
                                className="form-control border-input"
                                // value={this.state.amount}
                                value={this.state.amount / weeks}
                                name="weeks"
                                min="1"
                                onChange={event => this.handleChange(event)}
                                required
                            />
                        </div>
                    </div>
                </div>
            );
        }

        this.setState({renderWeeks});
    }

    submitForm(event) {
        event.preventDefault();
        // let formData = new FormData();
        // formData.append('name', this.state.name);
        // formData.append('email', this.state.email);
        this.props.userActions.addGoal(this.props.userReducer.user, this.state);
        event.target.reset();
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

    render() {
        const options = ['Emergency', 'Travel', 'Family', 'Product'].map(opt => (
            <option>{opt}</option>
        ));
        const activeGoal = this.props.userReducer.user ? this.props.userReducer.user.goals.find(
            goal => goal.isActive
        ) : undefined;

        return (
            <div className="wrapper">
                <Navigation title="Add Goal" exclude={activeGoal === undefined ? '' : 'Add Goal'}/>
                <div className="main-panel">
                    <Header title="Add Goal"/>
                    <div className="content">
                        <div className="container-fluid">
                            <form onSubmit={this.submitForm}>
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="card">
                                            <div className="header">
                                                <h4 className="title">What are you saving for?</h4>
                                            </div>
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Title</label>
                                                            <input
                                                                type="text"
                                                                className="form-control border-input"
                                                                placeholder="enter a title for the goal"
                                                                name="title"
                                                                id="title"
                                                                onChange={event => this.handleChange(event)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Category</label>
                                                            <select
                                                                className="form-control border-input"
                                                                name="category"
                                                                id="category"
                                                            >
                                                                {options}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Amount ($)</label>
                                                            <input
                                                                id="amount"
                                                                type="number"
                                                                className="form-control border-input"
                                                                placeholder="target amount in USD"
                                                                name="amount"
                                                                ref={this.amount}
                                                                min="1"
                                                                onChange={event => this.handleChange(event)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Number of Weeks</label>
                                                            <input
                                                                id="weeks"
                                                                type="number"
                                                                className="form-control border-input"
                                                                placeholder="target # of weeks to achieve the goal"
                                                                name="weeks"
                                                                min="1"
                                                                onChange={event => this.handleChange(event)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {this.state.renderWeeks.length > 0 ? <div className="header">
                                                    <h4 className="title">What can you commit for each week?</h4><br/>
                                                </div> : ''}
                                                {this.state.renderWeeks}
                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-info btn-fill btn-wd"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                                <div className="clearfix"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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

export default (AddGoal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGoal));
