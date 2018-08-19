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
                            <i className="ti-panel"/>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className={props.title === 'Add Goal' ? 'active' : ''}>
                        <Link to="/add-goal">
                            <i className="fas fa-plus"/>
                            <p>Add Goal</p>
                        </Link>
                    </li>
                    <li className={props.title === 'Goals' ? 'active' : ''}>
                        <Link to="/goals">
                            <i className="fas fa-bullseye"/>
                            <p>Goals</p>
                        </Link>
                    </li>
                    <li className={props.title === 'Progress' ? 'active' : ''}>
                        <Link to="/progress">
                            <i className="fas fa-angle-double-up"/>
                            <p>Progress</p>
                        </Link>
                    </li>
                    <li className={props.title === 'Rewards' ? 'active' : ''}>
                        <Link to="/rewards">
                            <i className="fas fa-trophy"/>
                            <p>Rewards</p>
                        </Link>
                    </li>
                    <li className={props.title === 'Save' ? 'active' : ''}>
                        <Link to="/save">
                            <i className="fas fa-piggy-bank"/>
                            <p>Save</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navigation;
