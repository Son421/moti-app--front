import React from "react";
import './header.css'
import { TiCalendar, TiHome, TiClipboard } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export default function Header(){

    return(
        <div>
            <header className="header--line">
                <nav>
                    <ul className="header--line__wrapper">
                        <li><NavLink to={'/'}><TiHome className="header--line--icon"/></NavLink></li>
                        <li><NavLink to={'/satistics'}><TiClipboard className="header--line--icon"/></NavLink></li>
                        <li><TiCalendar className="header--line--icon"/></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}