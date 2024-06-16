import React from "react";
import UserForm from "../../components/userForm/UserForm";
import constants from "../../components/constants";
import './registration.css';

export default function Registration(){

    function sendForm(formInfo: any){
        fetch(`${constants.url}/register` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInfo),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response error');
            }
            return res.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error =>{
            console.error('Error:', error);
            alert('An error occurred while registering. Please try again later.');
        });
    }
    
    return(
        <div className="registration">
            <span>Welcome to Mopi, please sign up.</span>
            <UserForm formStyle={'sign-up'} sendForm={sendForm}/>
        </div>

    )
}