import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './AdminDashboard.css';
import NavigationBar from '../navigation-bar/NavigationBar';
import GetMapLocation from '../googlemap/googlemapapi';
import {ThreeDots} from 'react-loader-spinner';

// Lazy Loading
const ProductComponent= lazy(()=> import ('../product/ProductComponent'));
const SingleProductView= lazy(()=> import ('../single-product-view/SingleProductView'));


export default class AdminDashboard extends Component {
    componentDidMount(){
        // checking availability of token from local storage
        // if token is not present it redirects to login page
        if(!localStorage.getItem('token')){
        this.props.history.push('/login')
        }
    }
    render() {
        return (
            <Router>
                <section className="dashboard-section">
                    <nav className="col-md-3 col-sm-3">
                        <NavigationBar />
                    </nav>
                    <aside id="sidebar" className="col-md-9 col-sm-9">
                        <Suspense fallback = {<ThreeDots color="#00BFFF" height={80} width={80} />} >
                            <Switch>
                                <Route exact path="/admin/product" component={ProductComponent} />
                                <Route exact path="/admin/product-detail/:id" component= {SingleProductView}/> 
                                <Route exact path="/admin/map/:id" component={GetMapLocation}/>
                            </Switch>
                        </Suspense>
                    </aside>
                </section> 
            </Router>
        )
         
    }
}
 