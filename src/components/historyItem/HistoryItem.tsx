import React from "react";
import {TiTrash} from "react-icons/ti";
import './historyItem.css'

interface goal{
    description: string;
    points: number;
    mulct: number;
    deadline: string;
    repeatable: boolean;
    executionDate: number;
    _id: string;
}

export default function HistoryItem(props: {completedGoal: goal, removeComletedGoal(id: string): void}){ 
    const exDate = new Date(props.completedGoal.executionDate); 

    function remove(){
        props.removeComletedGoal(props.completedGoal._id);
    }

    return(
        <div>
            <section className="history-item">      
                <span className="history-item--description">{props.completedGoal.description}</span> 
                <div className="history-item--points"> +{props.completedGoal.points}</div>
                <button className="history-item--delete" onClick={remove}> <TiTrash/> </button>
            </section>
            <section className="history-item--time">
                <section>
                    Comleted:
                    <div>
                        {exDate.getDate()}.{exDate.getMonth() + 1 > 9? exDate.getMonth() + 1: '0' + (exDate.getMonth() + 1)}.{exDate.getFullYear()}
                    </div>
                    <div>
                        {exDate.getHours()}:{exDate.getMinutes() > 9? exDate.getMinutes(): '0' + exDate.getMinutes()}
                    </div>
                </section>
                <section>
                    Deadline: 
                    <div>{props.completedGoal.deadline}</div>
                </section>
            </section>
        </div>
    )
}