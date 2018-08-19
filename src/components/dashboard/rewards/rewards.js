import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header, Navigation } from '../../index';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';

class Rewards extends Component {
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

  render() {
    return (
      <div className="wrapper">
        <Navigation title="Rewards" />

        <div className="main-panel">
          <Header title="Rewards" />

          <div className="content">
            <div className="container-fluid">
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    {/* === CASH OUT === */}
                    <div className="col-lg-4 col-sm-6">
                      <Link to="/goals">
                        <div className="card">
                          <div className="content">
                            <div className="row">
                              <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                  <i className="fas fa-dollar-sign" />
                                </div>
                              </div>
                              <div className="col-xs-7">
                                <div className="numbers">
                                  <p>Do you want</p>
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
                      <Link to="/goals">
                        <div className="card">
                          <div className="content">
                            <div className="row">
                              <div className="col-xs-5">
                                <div className="icon-big icon-danger text-center">
                                  <i className="fas fa-gift" />
                                </div>
                              </div>
                              <div className="col-xs-7">
                                <div className="numbers">
                                  <p>Do you want</p>
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
                      <Link to="/goals">
                        <div className="card">
                          <div className="content">
                            <div className="row">
                              <div className="col-xs-5">
                                <div className="icon-big icon-warning text-center">
                                  <i className="fas fa-gamepad" />
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
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userReducer: state.userReducer };
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