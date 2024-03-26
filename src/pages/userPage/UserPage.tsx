import React, {useState} from "react";
import { useAppSelector } from "../../hooks/hooks";
import { GiSalamander } from "react-icons/gi";
import {SlUser, SlUserFemale} from "react-icons/sl";
import Calendar from "../../components/calendar/Calendar";
import Goals from "../../components/goals/Goals";
import './userPage.css'

export default function UserPage(){
    const user = useAppSelector(state => state.userInfo.value);
        
    return(
        <div className="user">
            <section >
                <div className="user--info">
                    <div>
                        {(user.pic == 's') ? <GiSalamander className="user--pic"/> : (user.pic == 'm')? <SlUser className="user--pic"/> : <SlUserFemale className="user--pic"/>}
                    </div>
                    <div className="user--info--name">
                        {user.name}
                    </div>
                </div>
                <div className="user--info--counter">
                    <span> {user.pointCounter} </span>
                </div>
            </section>
            <section>
                <Calendar/>
            </section>
            <section>
                <Goals/>
            </section>
        </div>
    )
}