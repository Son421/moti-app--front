import React, {useState} from "react";
import {TiTick} from "react-icons/ti";
import constants from "../constants";
import './userForm.css';

export default function UserForm(props: {formStyle: string, url: string, sendForm(formInfo: any): void}){
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [e.target.name]: value
        });
    }

    function sendForm(){
      props.sendForm(userInfo);
    }
    
    return(
        <div>
            <form className={`user-form__form ${props.formStyle}`}  onSubmit={(e) => e.preventDefault()}>
                <ul>
                    <li><input onChange={handleChange} type="text" className={`user-form__form_input ${props.formStyle}`} name="name" placeholder="Your name"></input></li>
                    <li><input onChange={handleChange} type="email" className={`user-form__form_input`} name="userMail" placeholder="email"></input></li>
                    <li><input onChange={handleChange} type="password" className={`user-form__form_input`} name="password" placeholder="Your password"></input></li>
                </ul>
                <button onClick={sendForm} className={`user-form__form_button`}> <TiTick className={`user-form__form_button--tick `}/> </button>
            </form>
        </div>
    )
}