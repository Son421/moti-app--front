import React, {useState, useEffect} from "react";
import { AiOutlineClear } from "react-icons/ai";
import HistoryItem from "../../components/historyItem/HistoryItem";
import './history.css'

export default function History(){
    const [goalHistoryArr, setgoalHistoryArr] = useState<any[]>([]); //

    useEffect(() =>{
        const historyItem = localStorage.getItem('goalsHistory');
            if(typeof historyItem === "string"){
                const goalHistory = goalHistoryArr.concat(JSON.parse(historyItem));
                setgoalHistoryArr(goalHistory);
            }
    }, []);

    useEffect(() =>{
        localStorage.setItem('goalsHistory', JSON.stringify(goalHistoryArr));
    }, [goalHistoryArr]);

    function cleanHistory(){
        setgoalHistoryArr([]);

    }

    function removeComletedGoal(id: number){
        const newHisrory = goalHistoryArr.filter( item => item.id !== id); // 
        setgoalHistoryArr(newHisrory);
    }

    return(
        <div className="history--list">
            <div className="history--list_wrapper">
                <span>History</span>
                <button onClick={cleanHistory} className={`history--list_button `}> <AiOutlineClear/> </button>
            </div>
            <section>
                {goalHistoryArr.map((elem) =>(
                    <div>
                        <HistoryItem completedGoal={elem} removeComletedGoal={removeComletedGoal}/>
                    </div>
                ))}
            </section>
        </div>
    )
}