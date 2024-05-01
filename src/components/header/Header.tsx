import React from "react";
import './header.css'
import { TiHome, TiInputChecked} from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header(){

    return(
        <div>
            <header className="header--line">
                <nav>
                    <ul className="header--line__wrapper">
                        <li><NavLink to={'/user/'}><TiHome className="header--line--icon"/></NavLink></li>
                        <li><NavLink to={'/history'}><TiInputChecked className="header--line--icon"/></NavLink></li>
                        <li><FaUserFriends className="header--line--icon"/></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}