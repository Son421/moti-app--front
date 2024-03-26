import React from "react";
import { TiTick } from "react-icons/ti";
import './goal.css'

interface goalType{
    goal: {
        description: string;
        points: number;
    }
}

export default function Goal(props: goalType){

    return(
        <div className="goal">
            <span className="goal--description">{props.goal.description}</span> 
            <div><button className="goal--tick"> <TiTick/>  </button> </div>      
        </div>
    )
}