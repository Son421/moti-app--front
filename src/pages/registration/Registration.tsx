import React from "react";
import UserForm from "../../components/userForm/UserForm";
import constants from "../../components/constants";
import './registration.css';

export default function Registration(){
    const url = constants.url

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
        <div className="registration">
            Welcome to Mopi, please sign up.
            <UserForm formStyle={'sign-up'} url={url} sendForm={sendForm}/>
        </div>

    )
}