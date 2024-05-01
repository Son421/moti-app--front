import React from "react";
import UserForm from "../../components/userForm/UserForm";
import './registration.css';

export default function Registration(){

// if(already registeted --> button homepage){}

    return(
        <div className="registration">
            Welcome to Mopi, please sign up.
            <UserForm formStyle={'sign-up'}/>
        </div>

    )
}