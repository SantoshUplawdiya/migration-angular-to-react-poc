import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComponent from "./app/auth/login/LoginComponent";
//import AddUser from './components/adduser.component';

function App() {
  return (
      <div className="App">
        <LoginComponent/>
      </div>
  );
}

export default App;
