import React from 'react';
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { FaHome, FaWrench, FaEnvelope, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import userIcon from "./../../../../assets/user-icon.png";

const NavigationBar = () => {
    const history =  useHistory()
    const logout =()=>{
    history.replace("/login")
    history.push("/login")
    window.location.href="/login"
    localStorage.clear();
    }
    return (
        <nav className="nav1">
            <div className="navHeader">
                <img src={userIcon} alt="" />
                <span>Eve Holt</span>
            </div>
            <div className="navbar">
                <li role="presentation" >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="dashboard">
                        <FaHome /> Dashboard
                    </NavLink>
                </li>
                <li className="active">
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="product">
                        <FaWrench /> Product
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="fileManager">
                        <FaEnvelope /> File Manager
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="trafficAnalizer">
                     <FaWrench /> Traffic Analizer
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="userManager">
                        <FaRegUser /> User Manager
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="calender">
                        <FaWrench /> Calander
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="messages">
                        <FaRegUser /> Messages
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/admin/product" activeClassName="activeClicked" id="payement">
                        <FaEnvelope /> Payment
                    </NavLink>
                </li>
                <li >
                    <NavLink exact to="/login" exact={true} onClick={()=>logout()} activeClassName="activeClicked" id="logOutUser">
                        <FaSignOutAlt /> Log Out
                    </NavLink>
                </li>
            </div>
        </nav>


    )
}

export default NavigationBar;