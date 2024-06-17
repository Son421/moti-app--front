import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserPage from "../pages/userPage/UserPage";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import History from "../pages/history/History";
import GuestPage from "../pages/guestPage/GuestPage";
import useAuth from "../hooks/useAuth";

export default function() {
    const { userInfo, isAuthenticated} = useAuth();
  
    return(
        <Routes>
            <Route path="/user/:_id" element={isAuthenticated ? <UserPage userInfo={userInfo}/> : <Navigate to="/" />}/>
            <Route path="/history/:_id" element={isAuthenticated ? <History/> : <Navigate to="/" />}/>
            <Route path="/register" element={<Registration/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<GuestPage/>}/>
        </Routes>
    );
}