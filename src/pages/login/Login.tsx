import React, {useState} from "react";
import UserForm from "../../components/userForm/UserForm";
import constants from "../../components/constants";
import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login(){
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    async function sendForm(formInfo: any) {
        try {
            const response = await fetch(`${constants.url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInfo),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Network response error');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); 
            setSuccess(true); 
            navigate(`/user/${data.user._id}`); 
            window.location.reload();
        } catch (error: any) {
            setError(error.message);
        }
    }

    return(
        <div className="sign-in">
            <span>Welcome to Mopi, please sign in.</span>
            {error && <p className="error-message">{error}</p>}
            {success ? (
                <div>
                    <p className="success-message">Login successful!</p>
                </div>
            ) : (
                <UserForm formStyle={'sign-in'} sendForm={sendForm}/>
            )}
        </div>
    )
}

