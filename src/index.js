/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from 'axios';

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
// import Navigation from 'components/Navigation/navigation.js';
import LandingPage from 'components/Landing/landing.js';
import SignUpPage from 'components/SignUp/signup.js';
import SignInPage from 'components/SignIn/signin.js';
import PasswordForgetPage from 'components/PasswordForget/passwordforget.js';
import HomePage from 'components/Home/home.js';
import AccountPage from 'components/Account/account.js';
import AdminPage from 'components/Admin/admin.js';

import Firebase, { FirebaseContext } from './components/Firebase';



import "assets/scss/black-dashboard-react.scss";
//import "assets/demo/demo.css";
//import "assets/scss/black-dashboard-react.css";
import "assets/css/nucleo-icons.css";

const LANDING = '/';
const SIGN_UP = '/signup';
const SIGN_IN = '/signin';
const HOME = '/home';
const ACCOUNT = '/account';
const ADMIN = '/admin';
const PASSWORD_FORGET = '/pw-forget';



const hist = createBrowserHistory();

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>  
    <Router history={hist}>

      <Switch>
        <Route exact path="/landing" render={props => <LandingPage {...props} />} />
        <Route path="/signup" render={props => <SignUpPage {...props} />} />
        <Route path="/signin" render={props => <SignInPage {...props} />} />
        <Route path='/pw-forget' render={props => <PasswordForgetPage {...props} />} />
        <Route path="/home" render={props => <HomePage {...props} />} />
        <Route path="/account" render={props => <AccountPage {...props} />}/>
        {/* <Route path={ADMIN} component={AdminPage} /> */}


        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/makeorder" />

      </Switch>
    </Router>
  </FirebaseContext.Provider>

  ,
  document.getElementById("root")
);
