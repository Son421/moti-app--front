import React from "react";
import UserForm from "../../components/userForm/UserForm";
import './login.css'

export default function Login(){

// if(already registeted --> button homepage){}

    return(
        <div className="sign-in">
            Welcome to Mopi, please sign in.
            <UserForm formStyle={'sign-in'}/>
        </div>
    )
}