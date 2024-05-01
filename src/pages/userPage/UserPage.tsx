import React, {useState} from "react";
import { useAppSelector } from "../../hooks/hooks";
import {SlUser} from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import Calendar from "../../components/calendar/Calendar";
import Goals from "../../components/goals/Goals";
import AddGoal from "../../components/goals/addGoal/AddGoal";
import { NavLink } from "react-router-dom";
import './userPage.css'

export default function UserPage(){
    const user = useAppSelector(state => state.userInfo.value);
    const [shown, setShown] = useState(true);

    function showUpGoalForm(){
        setShown(!shown);
    }
        
    return(
        <div className="user">
            <div>
                <NavLink to={'/edit'}><button className="user_button--edit"> <LuPencilLine/> </button></NavLink>
            </div>
            <section>
                <div className="user--info">
                    <div>
                        <SlUser className="user--pic"/>  {/* ///  */}
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
                <AddGoal shown={shown} showUpGoalForm={showUpGoalForm}/>
                <Goals/>
            </section>
        </div>
    )
}