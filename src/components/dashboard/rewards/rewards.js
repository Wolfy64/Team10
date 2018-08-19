import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Footer, Header, Navigation} from '../../index';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';

class Rewards extends Component {
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
                    <Header title="Rewards"/>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* === CASH OUT === */}
                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/cash-out">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-success text-center">
                                                            <i className="fas fa-dollar-sign"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Token</p>
                                                            Cash Out
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* === END CASH OUT === */}

                                {/* === GIFT CARD === */}
                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/rewards">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-danger text-center">
                                                            <i className="fas fa-gift"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Exchange</p>
                                                            Gift Card
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* === END GIFT CARD === */}

                                {/* === GAME WAFFLE === */}
                                <div className="col-lg-4 col-sm-6">
                                    <Link to="/rewards">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-info text-center">
                                                            <i className="fas fa-gamepad"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Game</p>
                                                            Raffle
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* === END GAME WAFFLE === */}
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

export default (Rewards = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rewards));
