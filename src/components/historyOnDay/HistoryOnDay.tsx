import React, {useState, useEffect} from "react";
import HistoryItem from "../historyItem/HistoryItem";
import './historyOnDay.css'

export default function HistoryOnDay(props: {dateHistory : Date}){
    const [completedOnDate, setCompletedOnDate ] = useState<any[]>([]);
    const date = props.dateHistory;

    useEffect(() =>{
        const completedElem = localStorage.getItem('goalsHistory');
        if(completedElem){
            let wrapper : any[] = [];
            let newArr : any[] = [];
            const sortedArr = wrapper.concat(JSON.parse(completedElem));
            sortedArr.forEach(elem => {
                const completedDate = new Date(elem.executionDate);
                if(date.getDate() === completedDate.getDate() && date.getMonth() === completedDate.getMonth() && date.getFullYear() === completedDate.getFullYear()){
                    newArr.push(elem);
                }
            });
            setCompletedOnDate(newArr);
        }
    }, []);

    function removeOne(){

    }

    if(completedOnDate.length === 0){  
        return(
            <div className="history-on-day">
                <div> No completed goals on <span>{date.getDate()}.{date.getMonth() + 1 > 9? date.getMonth() + 1: '0' + (date.getMonth() + 1)}.{date.getFullYear()}</span> </div>
            </div>
        )
    }else{
        return(
            <div className="history-on-day">
                <div> {completedOnDate.map((completedElement) =>(
                    <div> <HistoryItem completedGoal={completedElement} removeComletedGoal={removeOne}/> </div>
                ))} </div>
            </div>
        )
    }
}