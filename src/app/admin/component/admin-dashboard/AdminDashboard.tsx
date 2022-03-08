import React from 'react';
import "./admin-dashboard.css";

const AdminDashboard = () => {
    return (
        <section>
        <nav className="col-md-3 col-sm-3">
            <app-navigation-bar></app-navigation-bar>
        </nav>
        <aside id="sidebar" className="col-md-9 col-sm-9">
            <router-outlet></router-outlet>
        </aside>
        </section> 
    )
}

export default AdminDashboard;