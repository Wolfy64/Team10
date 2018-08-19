import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as userActions from "../../actions/user";
import connect from "react-redux/es/connect/connect";

class Header extends Component {
    constructor(props) {
        super(props);

    }

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
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"/>
                            <span className="icon-bar bar2"/>
                            <span className="icon-bar bar3"/>
                        </button>
                        <p className="navbar-brand">{this.props.title}</p>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {/*<li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="ti-bell"/>
                                            <p className="notification">5</p>
                                            <p>Notifications</p>
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Notification 1</a></li>
                                            <li><a href="#">Notification 2</a></li>
                                            <li><a href="#">Notification 3</a></li>
                                            <li><a href="#">Notification 4</a></li>
                                            <li><a href="#">Another notification</a></li>
                                        </ul>
                                    </li>*/}
                            <li>
                                <a>
                                <span className="text-vertical-align-center">
                                    <div className="avatar">
                                        <img
                                            src={this.props.userReducer.profile ? this.props.userReducer.profile.imageURL : ''}
                                            alt='profile'
                                            className="img-circle img-no-padding img-responsive" width={25}
                                            height={25}/>
                                    </div>
                                    <p style={{color: 'black'}}>&nbsp;&nbsp;{this.props.userReducer.profile ? this.props.userReducer.profile.fullName : ''}</p>
                                </span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
};

const mapStateToProps = (state) => {
    return {userReducer: state.userReducer}
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default Header = connect(mapStateToProps, mapDispatchToProps)(Header);
