import React, {useState, useEffect} from "react";
import Goal from "./goal/Goal";
import constants from "../constants";

export default function Goals(){
    const [goalsArr, setGoalArr] = useState<any[]>([]);

    const [completedGoals, setCompetedGoals] = useState<any>();

    useEffect(() =>{
        fetch(constants.url)
            .then(res => res.json())
            .then(data => {
            setGoalArr(data);
            })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    useEffect(() =>{
        fetch(constants.url ,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({completedGoals}),
        })
        .then(res => {
            if (!res.ok) {
              throw new Error('Network response error');
            }
            return res.json();
          })
        .catch(error =>{
            console.error('Error:', error);
        })
    }, [completedGoals]);

    function deleteGoal(_id: string){
        fetch(constants.url)
        .then(res => res.json())
        .then(data => {
            setCompetedGoals(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });   
    }

    function completeGoal(_id: string){
        const item = goalsArr.find(elem => elem._id == _id);
        if(item){
            item.executionDate = Date.now();
            setCompetedGoals(item);
        }
    }

    return(
        <div>
            {goalsArr.map((goal) =>(
                <div>
                    <Goal goal={goal} completeGoal={completeGoal}  deleteGoal={deleteGoal}/>
                </div>
            ))}
        </div>
    )
}