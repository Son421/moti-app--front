import React, {useState, useEffect} from "react";
import HistoryItem from "../historyItem/HistoryItem";
import { TiTimes } from "react-icons/ti";
import constants from "../constants";
import './historyOnDay.css'

export default function HistoryOnDay(props: {dateHistory : Date; closePopup: () => void}){
    const [completedOnDate, setCompletedOnDate ] = useState<any[]>([]);
    const date = props.dateHistory;
    
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await fetch(`${constants.url}/completedGoals`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const completedElem = await response.json();
            if(completedElem){
                let wrapper : any[] = [];
                let newArr : any[] = [];
                const sortedArr = wrapper.concat(completedElem);
                sortedArr.forEach(elem => {
                    const completedDate = new Date(elem.executionDate);
                    if(date.getDate() === completedDate.getDate() && date.getMonth() === completedDate.getMonth() && date.getFullYear() === completedDate.getFullYear()){
                        newArr.push(elem);
                    }
                });
                setCompletedOnDate(newArr);
            }
        } catch (error) {
            console.error('Error fetching goals:', error);
        }
    };

    useEffect(() =>{
        fetchData();
    }, []);

    async function deleteElem(_id: string){
        try {
            const response = await fetch(`${constants.url}/completedGoals/${_id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete completed goal');
            }
            setCompletedOnDate(prevGoals => prevGoals.filter(goal => goal._id !== _id));
        } catch (error) {
            console.error('Error deleting completed goal:', error);
        }
    }

    if(completedOnDate.length === 0){  
        return(
            <div className="history-on-day">
                <div className="history-on-day_close_button"> <TiTimes onClick={props.closePopup}/> </div>
                <div> No completed goals on <span>{date.getDate()}.{date.getMonth() + 1 > 9? date.getMonth() + 1: '0' + (date.getMonth() + 1)}.{date.getFullYear()}</span> </div>
            </div>
        )
    }else{
        return(
            <div className="history-on-day">
                <div className="history-on-day_close_button"> <TiTimes onClick={props.closePopup}/> </div>
                <div> {completedOnDate.map((completedElement) =>(
                    <div> <HistoryItem completedGoal={completedElement} removeComletedGoal={deleteElem}/> </div>
                ))} </div>
            </div>
        )
    }
}