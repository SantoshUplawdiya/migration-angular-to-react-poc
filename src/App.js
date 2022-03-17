import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider }  from 'mobx-react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./app/auth/login/LoginComponent";
import admin from "./app/admin/component/admin-dashboard/AdminDashboard";
import productStore from "./stores/Product";

const stores = {productStore}
function App() {
  return (
    <Provider {...stores}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin/product" component={admin} />
            {/* <Route component={() => (<div>404 Not found </div>)} /> */}
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;

