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

import * as firebase from 'firebase';

import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";
// import HomeLayout from "layouts/Home/Home.js";
// import CreateLoan from "views/CreateLoan.js";


import "assets/scss/black-dashboard-react.scss";
//import "assets/demo/demo.css";
//import "assets/scss/black-dashboard-react.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

const config = {
  apiKey: "AIzaSyCy7xlvPz6V7NsbiS3shtfdjmK4gg28RRA",
  authDomain: "formula-sae.firebaseapp.com",
  databaseURL: "https://formula-sae.firebaseio.com",
  projectId: "formula-sae",
  storageBucket: "formula-sae.appspot.com",
  messagingSenderId: "991999686087",
};

firebase.initializeApp(config);

var db = firebase.firestore()

export default db

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/makeorder" />

    </Switch>
  </Router>,
  document.getElementById("root")
);
