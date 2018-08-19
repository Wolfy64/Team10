import React, {Component} from 'react';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';
import Goal from './goal';

class Goals extends Component {
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

    handleGoalList() {
        return this.props.userReducer.user.goals.map(goal => (
            <Goal
                key={goal.id}
                id={goal.id}
                isActive={goal.isActive}
                name={goal.name}
                category={goal.category}
                achieved={goal.achieved}
            />
        ));
    }

    render() {
        return (
            <div className="wrapper">
                <Navigation title="Goals"/>

                <div className="main-panel">
                    <Header title="Goals"/>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="card">
                                    {/*<div className="header">
                                        <h4 className="title">My Goals</h4>
                                        <p className="category">Here is a subtitle on my goals</p>
                                    </div>*/}
                                    <div className="content table-responsive table-full-width">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th className="goals-text-center">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.userReducer.user
                                                ? this.handleGoalList()
                                                : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {console.log(this.props.userReducer.users)} */}

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
        userActions: bindActionCreators(userActions, dispatch),
    };
};

export default (Goals = connect(
    mapStateToProps,
    mapDispatchToProps
)(Goals));
