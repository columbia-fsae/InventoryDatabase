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
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import HomeView from "views/HomeView.js";
import MakeOrder from "./views/MakeOrder.js";
import LoanProfile from "./views/LoanProfile";
import EmptyView from "./views/EmptyView";

export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LANDING = '/';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';


var routes = [
  {
    path: "/makeorder",
    name: "Make An Order",
    icon: "tim-icons icon-pencil",
    component: MakeOrder,
    layout: "/admin"
  },
  {
    path: "/myorders",
    name: "My Order History",
    icon: "tim-icons icon-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/cluborders",
    name: "Recent Club Orders",
    icon: "tim-icons icon-bullet-list-67",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-settings-gear-63",
    component: EmptyView,
    layout: "/admin"
  },
];
export default routes;
