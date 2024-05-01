import React, {useState} from "react";
import {TiTick} from "react-icons/ti";
import './userForm.css';

export default function UserForm(props: {formStyle: string}){
    
    return(
        <div>
            <form className={`user-form__form ${props.formStyle}`}>
                <ul>
                    <li><input type="text" className={`user-form__form_input ${props.formStyle}`} name="userName" placeholder="Your name"></input></li>
                    <li><input type="mail" className={`user-form__form_input`} name="userMail" placeholder="Your mail"></input></li>
                    <li><input type="password" className={`user-form__form_input`} name="userPassworld" placeholder="Your password"></input></li>
                    <li> <label  className={`user-form__form_input_label ${props.formStyle}`}>Choose a profile picture:
                            <input type="file" id="avatar" className={`user-form__form_input_file ${props.formStyle}`} name="avatar" accept=".png, .jpeg, .jpg" /> 
                        </label>
                    </li>
                </ul>
                <button className={`user-form__form_button`}> <TiTick className={`user-form__form_button--tick `}/> </button>
            </form>
        </div>
    )
}