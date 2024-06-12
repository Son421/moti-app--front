import React from "react";
import UserForm from "../../components/userForm/UserForm";
import constants from "../../components/constants";
import './login.css'

export default function Login(){
    const url = ''

    function sendForm(formInfo: any){
        fetch(constants.url ,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({formInfo}),
        })
        .then(res => {
            if (!res.ok) {
              throw new Error('Network response error');
            }
            return res.json();
          })
        .catch(error =>{
            console.error('Error:', error);
        })
    }

    // if(already registeted --> button homepage){}
    return(
        <div className="sign-in">
            Welcome to Mopi, please sign in.
            <UserForm formStyle={'sign-in'} url={url} sendForm={sendForm}/>
        </div>
    )
}