import React, { Component } from 'react';

import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';


import 'react-perfect-scrollbar/dist/css/styles.css';

import  AdminSignIn from "./Admin.components/manager.SignIn.components"
import  AdminDashboard from "./Admin.components/manager.dashboard.components"
import  AdminRoles from "./Admin.components/manager.roles.components"
import  AdminUni from "./Admin.components/manager.uni.components"
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";
import  IUAC from "./components/IUAC";

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (

      
     
        <Router>
          <Switch>

            <Route path="/iuac" component={IUAC}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/admin/login" exact component={AdminSignIn} />
            <Route path="/admin/dashboard" exact component={AdminDashboard} />

          

            <Route path="/admin/roles" exact component={AdminRoles} />
            <Route path="/admin/uni" exact component={AdminUni} />

            <Route path="/" component={HomePage}/>
          </Switch>

        </Router>
      


      

      

      

      
     


    );
  }
}
