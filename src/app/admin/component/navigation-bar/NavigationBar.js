import React from 'react';
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <nav className="nav1">
        <div className="navHeader">
            <img src="../../../../assets/NoPath - Copy (76).png" alt="" />
            <span>Eve Holt</span>
        </div>
        <div className="navbar">
            <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <a id="dashboard" routerLink="#"><i className="fa fa-fw fa-home"></i> Dashboard</a>
            </li>
            <li routerLinkActive="active">
            <a id="product" routerLink="/admin/product"><i className="fa fa-fw fa-wrench"></i> Product</a>
            </li>
            <li routerLinkActive="active">
            <a id="fileManager" routerLink="#">
                <i className="fa fa-fw fa-envelope"></i> File Manager</a>
            </li>
            <li routerLinkActive="active">
            <a id="trafficAnalizer" routerLink="#"><i className="fa fa-fw fa-wrench"></i> Traffic Analizer</a>
            </li>
            <li routerLinkActive="active">
            <a id="userManager" routerLink="#"><i className="fa fa-fw fa-user"></i> User Manager</a>
            </li>
            <li routerLinkActive="active">
            <a id="addUser" routerLink="#" style="margin-left: 40px">Add User</a>
            </li>
            <li routerLinkActive="active">
            <a id="calender" routerLink="#"><i className="fa fa-fw fa-wrench"></i> Calander</a>
            </li>
            <li routerLinkActive="active">
            <a id="messages" routerLink="#"><i className="fa fa-fw fa-user"></i> Messages</a>
            </li>
            <li routerLinkActive="active">
            <a id="payement" routerLink="#"><i className="fa fa-fw fa-envelope"></i> Payment</a>
            </li>
            <li routerLinkActive="active">
            <a id="logOutUser" onClick="logoutUser()">
                <i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</a>
            </li>
        </div>
        </nav>

        // ============== //

        <nav className="navbar navbar-expand-lg navbar-light bg-light nav2">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <div className="navbar">
                    <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                    <a routerLink="#"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                    </li>
                    <li>
                    <a routerLink="/admin/product" routerLinkActive="active"><i className="fa fa-fw fa-wrench"></i> Product</a>
                    </li>
                    <li>
                    <a routerLink="#" routerLinkActive="active"><i className="fa fa-fw fa-user"></i> User
                        Manager</a>
                    </li>
                    <li>
                    <a routerLink="#" routerLinkActive="active" style="margin-left: 40px">Add User</a>
                    </li>
                    <li>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    <a href="#" onClick="logoutUser()">Log Out</a>
                    </li>
                </div>
                </ul>
            </div>
        </nav>

    )
}

export default NavigationBar;