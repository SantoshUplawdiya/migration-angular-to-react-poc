import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider }  from 'mobx-react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComponent from "./app/auth/login/LoginComponent";
//import AddUser from './components/adduser.component';
import productStore from "./stores/Product";

const stores = {productStore}
function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <LoginComponent/>
      </div>
    </Provider>
      
  );
}

export default App;
