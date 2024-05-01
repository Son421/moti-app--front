import React from "react";
import { TiTick, TiArrowSync, TiTrash } from "react-icons/ti";
import './goal.css'
import { useAppDispatch } from "../../../hooks/hooks";
import { pointIncrease } from "../../../features/userInfoSlice";

interface goalType{
    goal: {
        description: string;
        points: number;
        mulct: number;
        deadline: string;
        repeatable: boolean;
        executionDate: number;
        id: number;
    }
    deleteGoal(id: number): void
    completeGoal(id: number): void
}

export default function Goal(props: goalType){
    const dispatch = useAppDispatch();

    function addPoints(){
        dispatch(pointIncrease(props.goal.points));

        props.completeGoal(props.goal.id);

        if(!props.goal.repeatable){
            props.deleteGoal(props.goal.id);
        }
    }

    function remove(){
        props.deleteGoal(props.goal.id);
    }
    
    return(
        <div className="goal">
            <button className="goal--delete" onClick={remove}> <TiTrash/> </button>
            <span className="goal--description">{props.goal.description}</span> 
            <div className="goal--points"> {props.goal.points}</div>
            <button className="goal_button" onClick={addPoints}>  <TiTick className="goal_button--tick"/>  </button>
            <div className={props.goal.repeatable ? "goal--reteate": "goal--reteate goal--hidden"}> <TiArrowSync/> </div>
        </div>
    )
}