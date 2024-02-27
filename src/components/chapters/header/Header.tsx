import React from "react";
import './header.css'
import { TiCalendar, TiHome, TiClipboard } from "react-icons/ti";

export default function Header(){

    return(
        <div>
            <header className="header--line">
                <nav>
                    <ul className="header--line__wrapper">
                        <li><TiHome className="header--line--icon"/></li>
                        <li><TiClipboard className="header--line--icon"/></li>
                        <li><TiCalendar className="header--line--icon"/></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}