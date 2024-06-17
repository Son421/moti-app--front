import React from "react";
import Header from "../../components/header/Header";
import useAuth from "../../hooks/useAuth";
import './guestPage.css'

export default function GuestPage(){
    const {isAuthenticated} = useAuth();
        
    return(
        <div>
            <Header isAuth={isAuthenticated}/>
            <div className="guest-page">
                <p>Welcome to Mopi, the app for recording your goals. Sign up, or log in if you already have an account.</p>
             </div>
        </div>
        
    )
}