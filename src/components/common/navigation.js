import React from "react";
import {Link} from "react-router-dom";
import logo from "../../img/logo.png";

const Navigation = (props) => {
    return (
        <div className="sidebar" data-background-color="white" data-active-color="danger">

            {
                /*
                Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
                Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
                */
            }

            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link to="/" className="simple-text">
                        {/*Flourish Savings*/}
                        <img src={logo} alt="Flourish Savings" id="logo" style={{width: '50%'}}/>
                    </Link>
                </div>

                <ul className="nav">
                    <li className={props.title === 'Dashboard' ? 'active' : ''}>
                        <Link to="/">
                            <div className={props.title === 'Dashboard' ? 'text-primary' : ''}>
                                <i className="ti-panel"/>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className={props.title === 'Add Goal' ? 'active' : ''}>
                        <Link to="/add-goal">
                            <div className={props.title === 'Add Goal' ? 'text-info' : ''}>
                                <i className="fas fa-plus"/>
                                <p>Add Goal</p>
                            </div>
                        </Link>
                    </li>
                    <li className={props.title === 'Goals' ? 'active' : ''}>
                        <Link to="/goals">
                            <div className={props.title === 'Goals' ? 'text-danger' : ''}>
                                <i className="fas fa-bullseye"/>
                                <p>Goals</p>
                            </div>
                        </Link>
                    </li>
                    <li className={props.title === 'Progress' ? 'active' : ''}>
                        <Link to="/progress">
                            <div className={props.title === 'Progress' ? 'text-success' : ''}>
                                <i className="fas fa-angle-double-up"/>
                                <p>Progress</p>
                            </div>
                        </Link>
                    </li>
                    <li className={props.title === 'Rewards' ? 'active' : ''}>
                        <Link to="/rewards">
                            <div className={props.title === 'Rewards' ? 'text-warning' : ''}>
                                <i className="fas fa-trophy"/>
                                <p>Rewards</p>
                            </div>
                        </Link>
                    </li>
                    <li className={props.title === 'Save' ? 'active' : ''}>
                        <Link to="/save">
                            <div className={props.title === 'Save' ? 'text-pink' : ''}>
                                <i className="fas fa-piggy-bank"/>
                                <p>Save</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navigation;
