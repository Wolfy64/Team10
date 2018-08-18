import React from "react";

const Header = (props) => {
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
                    <p className="navbar-brand">{props.title}</p>
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
                                        <img src={props.userImage}
                                             alt={props.userName ? `${props.userName.split(' ')[0][0]}${props.userName.split(' ')[1][0]}` : 'profile'}
                                             className="img-circle img-no-padding img-responsive" width={25}
                                             height={25}/>
                                    </div>
                                    <p style={{color: 'black'}}>&nbsp;&nbsp;{props.userName}</p>
                                </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};
export default Header;
