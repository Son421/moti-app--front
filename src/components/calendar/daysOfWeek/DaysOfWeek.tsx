import React from "react";
import CalendarDay from "../calendarDay/CalendarDay";

interface dayOfWeekType{
    currentYear: number;
    currentMonth: number;
    dayOfWeek: number;
}

export default function DayOfWeek(props: dayOfWeekType){
    const firstDay = new Date(props.currentYear, props.currentMonth, 1);

    function getDaysOfWeek(year : number, month : number, day : number) {
        let date = new Date(year, month, 1); 
        let daysOfWeek = [];

        if(props.dayOfWeek == 0){
        }else if(props.dayOfWeek < firstDay.getDay()){
            let lastDayOfPreviousMonth = new Date(firstDay);     

            lastDayOfPreviousMonth.setDate(0);
          
            while (lastDayOfPreviousMonth.getDay() != props.dayOfWeek) {  
              lastDayOfPreviousMonth.setDate(lastDayOfPreviousMonth.getDate() - 1);
            }
          
            daysOfWeek.push(lastDayOfPreviousMonth);
        }
    
        while (date.getMonth() === month) {
            if (date.getDay() === day) {
                daysOfWeek.push(new Date(date));
            }
            date.setDate(date.getDate() + 1);
        }
        return daysOfWeek;
    }
    
    return(
        <div>
            {getDaysOfWeek(props.currentYear, props.currentMonth, props.dayOfWeek).map((day) =>(
                <div>
                    <CalendarDay day={day}/>
                </div>
            ))}
        </div>
    )
}