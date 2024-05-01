import React, {useState} from "react";
import HistoryOnDay from "../../historyOnDay/HistoryOnDay";
import './calendarDay.css'

const currentDay = new Date().getDate();
const currentMon = new Date().getMonth();

export default function CalendarDay(props: { day: Date}){
    const [dayHistoryOpen, setdayHistoryOpen] = useState(false);
    const day = props.day.getDate();
    const month = props.day.getMonth();

    function showHistory(){
        setdayHistoryOpen(true);
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as Node;
        const popup = document.getElementById('popup');

        if (popup && !popup.contains(target)) {
            setdayHistoryOpen(false);
        }
    } ///// 

    if(dayHistoryOpen){
        return(
            <div onClick={handleClick}>
                <button className={currentMon !== month ? 'day--last-month' : day == currentDay ? 'day current-day': 'day'} > {day} </button>
                <div id="popup">
                    <HistoryOnDay dateHistory={props.day}/> 
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <button onClick={showHistory} className={currentMon !== month ? 'day--last-month' : day == currentDay ? 'day current-day': 'day'} > {day} </button>
            </div>
        )
    }
}