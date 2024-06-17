import React, {useState} from "react";
import {SlUser} from "react-icons/sl";
import Calendar from "../../components/calendar/Calendar";
import Goals from "../../components/goals/Goals";
import AddGoal from "../../components/goals/addGoal/AddGoal";
import Header from "../../components/header/Header";
import useAuth from "../../hooks/useAuth";

import './userPage.css'

export default function UserPage({ userInfo }: { userInfo: any }){
    const [shown, setShown] = useState(true);
    const [addNewGoal, setAddNewGoal] = useState(false);
    const [pointCounter, setPointCounter] = useState(userInfo.pointCounter);
    const {isAuthenticated} = useAuth();
    
    function countPoints(data: number){
        setPointCounter(data);
    }

    function showUpGoalForm(){
        setShown(!shown);
    }

    function newGoal(){
        setAddNewGoal(!addNewGoal);
    }
        
    return(
        <div>
            <Header isAuth={isAuthenticated}/>
            <div className="user">
            <section>
                <div className="user--info">
                    <div>
                        <SlUser className="user--pic"/> 
                    </div>
                    <div className="user--info--name">
                        {userInfo.name}
                    </div>
                </div>
                <div className="user--info--counter">
                    <span> {pointCounter} </span>
                </div>
            </section>
            <section>
                <Calendar/>
            </section>
            <section>
                <AddGoal shown={shown} showUpGoalForm={showUpGoalForm} userId={userInfo._id} newGoal={newGoal}/>
                <Goals addNewGoal={addNewGoal} countPoints={countPoints}/>
            </section>
        </div>
        </div>
        
    )
}