import React, {useState, useEffect} from "react";
import { AiOutlineClear } from "react-icons/ai";
import HistoryItem from "../../components/historyItem/HistoryItem";
import constants from "../../components/constants";
import './history.css'

export default function History(){
    const [completedGoal, setCompletedGoal] = useState<any[]>([]);

    useEffect(() =>{
        fetch(constants.url)
        .then(res => res.json())
        .then(data => {
            setCompletedGoal(data);
        })
    .catch(error => {
        console.error('Error:', error);
    });
    }, []);

    function cleanHistory(){
        fetch(constants.url)
        .then(res => res.json())
        .then(data => {
            setCompletedGoal(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    function removeComletedGoal(_id: string){
        fetch(constants.url)
        .then(res => res.json())
        .then(data => {
            setCompletedGoal(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });   
    }

    return(
        <div className="history--list">
            <div className="history--list_wrapper">
                <span>History</span>
                <button onClick={cleanHistory} className={`history--list_button `}> <AiOutlineClear/> </button>
            </div>
            <section>
                {completedGoal.map((elem) =>(
                    <div>
                        <HistoryItem completedGoal={elem} removeComletedGoal={removeComletedGoal}/>
                    </div>
                ))}
            </section>
        </div>
    )
}