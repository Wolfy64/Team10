import React, { Component } from 'react';
import { Footer, Header, Navigation } from '../../index';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/user';
import connect from 'react-redux/es/connect/connect';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: 4,
      goal: 1000,
      amount: 500,
      progress: 0
    };
  }

  componentDidMount() {
    this.handleProgressBar();
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

  handleProgressBar() {
    const { goal, amount } = this.state;
    const progress = (amount * 100) / goal;
    this.setState({ progress });
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation title="Progress" />

        <div className="main-panel">
          <Header title="Progress" />

          <div className="content">
            <div className="container-fluid">
              <h1>Progress</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${this.state.progress}%` }}
                />
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

export default (Progress = connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress));
