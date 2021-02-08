
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
import firebase from 'firebase';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
            name: "",
            photo: ""
        }
    }

    googleSignOut = () => {
        firebase.auth().signOut().then(function() {
            //sign-out successful.
        }).catch(function(error) {
            //An error happened.
        });
        this.setState({
            isLogIn: false
        })
    }

    googleSignIn = () => {
        console.log("this is:", this)
        var base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(base_provider).then(function(result){
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result)
            console.log("Success: Google Account Linked")
            console.log(user.displayName + '\n' + user.email)
            this.setState = {
                isLogIn: true,
                name:user.displayName,
                photo:user.photoURL
            }
            console.log(user.photoURL)
        }).catch(function(err){
            console.log(err)
            console.log("Failed to link Google Account")
            console.log("No user is signed in")
        })
    }

     componentDidMount = () => {
         let text;
          firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                 console.log("User is signed in!")
              } else {
                  console.log("No user is signed in!")
              }
          });
      }

    render(text) {
        return (
            <div className="content">
                <Button onClick={this.googleSignIn}>Google Sign In</Button>
                <Button onClick={this.googleSignOut}>Google Sign Out</Button>
            </div>
            
        );
    }
}

export default Login;

