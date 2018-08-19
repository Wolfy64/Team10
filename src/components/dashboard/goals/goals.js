import React, {Component} from 'react';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';
import Goal from './goal';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: [
                {
                    id: 1,
                    name: 'Guatemala',
                    category: 'Travel',
                    achieved: true,
                    isActive: false
                },
                {
                    id: 2,
                    name: 'Buy a present to my wife',
                    category: 'Family',
                    achieved: true,
                    isActive: false
                },
                {
                    id: 3,
                    name: '	Buy a new phone',
                    category: 'Product',
                    achieved: false,
                    isActive: true
                },
                {
                    id: 4,
                    name: 'Saving',
                    category: 'Emergency',
                    achieved: false,
                    isActive: false
                }
            ]
        };
    }

    componentDidMount() {
        this.handleGoalList();
    }

    componentWillMount() {
        if (
            !this.props.userReducer.isAuthorized ||
            this.props.userReducer.profile === undefined
        ) {
            this.props.history.push('/signin');
        }
    }

    componentWillUpdate(nextProps) {
        if (
            !nextProps.userReducer.isAuthorized ||
            this.props.userReducer.profile === undefined
        ) {
            this.props.history.push('/signin');
        }
    }

    handleGoalList() {
        return this.state.goals.map(goal => (
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
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th className="goals-text-center">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>{this.handleGoalList()}</tbody>
                                        </table>
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

const mapStateToProps = state => {
    return {userReducer: state.userReducer};
};

const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
};

export default (Goals = connect(
    mapStateToProps,
    mapDispatchToProps
)(Goals));
