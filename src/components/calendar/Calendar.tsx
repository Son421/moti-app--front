import React from "react";
import DayOfWeek from "./daysOfWeek/DaysOfWeek";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import './calendar.css'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

export default function Calendar(){
    let currentMonthString : string;

    switch(currentMonth){
        case 0:
            currentMonthString = 'January';
        break;
        case 1:
            currentMonthString = 'February';
        break;
        case 2:
            currentMonthString = 'March';
        break;
        case 3:
            currentMonthString = 'April';
        break;
        case 4:
            currentMonthString = 'May';
        break;
        case 5:
            currentMonthString = 'June';
        break;
        case 6:
            currentMonthString = 'July';
        break;
        case 7:
            currentMonthString = 'August';
        break;
        case 8:
            currentMonthString = 'September';
        break;
        case 9:
            currentMonthString = 'October';
        break;
        case 10:
            currentMonthString = 'November';
        break;
        default:
            currentMonthString = 'December';
    }

    return(
        <div className="calendar">
            <span className="calendar--year">
                {currentMonthString} {currentYear}
            </span>
            <section>
                {/* <div> <TiChevronLeft/> </div> */}
                <section>
                    <div className="calendar--days-of-week">    
                        <div>
                            Mon
                        </div>
                        <div>
                            Tue
                        </div>
                        <div>
                            Wed
                        </div>
                        <div>
                            Thu
                        </div>
                        <div>
                            Fri
                        </div>
                        <div>
                            Sat
                        </div>
                        <div>
                            Sun
                        </div>
                    </div>
                    <div className="calendar--days-of-week">
                        {[1,2,3,4,5,6,0].map((day) =>
                            <div className="calendar--day">
                                <DayOfWeek currentYear={currentYear} currentMonth={currentMonth} dayOfWeek={day}/>
                            </div>
                        )}
                    </div>
                </section>
                    {/* <div> <TiChevronRight/> </div> */}
            </section>
        </div>
    )
}