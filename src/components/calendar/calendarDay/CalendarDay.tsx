import React from "react";
import './calendarDay.css'

interface dayType{
    day: Date;
}

const currentDay = new Date().getDate();
const currentMon = new Date().getMonth();

export default function CalendarDay(props: dayType){
    const day = props.day.getDate();
    const month = props.day.getMonth();

    return(
        <div>
            <button className={currentMon !== month ? 'day--last-month' : day == currentDay ? 'day current-day': 'day'} > {day} </button>
        </div>
    )
}