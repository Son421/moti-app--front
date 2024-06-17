import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import './header.css'
import { TiHome, TiInputChecked} from "react-icons/ti";
import { IoExit, IoLogIn } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header(props: {isAuth: any} ){
    const { logout, userInfo} = useAuth();

    return(
        <div>
            <header className="header--line">
                <nav>
                {props.isAuth ? 
                    <ul className="header--line__wrapper">
                        <li><NavLink to={`/user/${userInfo._id}`}><TiHome className="header--line--icon"/></NavLink></li>
                        <li><NavLink to={`/history/${userInfo._id}`}><TiInputChecked className="header--line--icon"/></NavLink></li>
                        <li><NavLink to={'/login'}><IoExit onClick={logout} className="header--line--icon"/></NavLink></li>
                    </ul> :
                    <ul className="header--line__wrapper">
                         <li><NavLink to={'/login'}><IoLogIn className="header--line--icon"/></NavLink></li>
                         <li><NavLink to={'/register'}><MdEditSquare className="header--line--icon"/></NavLink></li>
                    </ul>
                }
                </nav>
            </header>
        </div>
    )
}