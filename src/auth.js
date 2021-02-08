import React, { useEffect, useState } from "react";
import app from "./index.js";
import firebase from "./index.js";


class Auth extends Componenet {
    render() {
       
        return (
            <div className="Auth">
                <AdminNavbar/>
            </div>
        );
    }
}

export default Auth;
