
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

    googleSignIn = () => {
        console.log("this is:", this)
        var base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(base_provider).then(function(result){
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result)
            console.log("Success: Google Account Linked")
        }).catch(function(err){
            console.log(err)
            console.log("Failed to link Google Account")
        })
    }

    render() {
        return (
            <>
                <div className="content">
                    <Button onClick={this.googleSignIn}>Google Sign In</Button>
                </div>
            </>
        );
    }
}

export default Login;

