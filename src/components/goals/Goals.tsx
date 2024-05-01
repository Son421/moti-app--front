import React, {useState, useEffect} from "react";
import Goal from "./goal/Goal";

export default function Goals(){
    const [goalsArr, setGoalArr] = useState([{
        description: 'I should clean toilet sdfsd fdsf ds sfdsf ds  fdsf vsddv sdf vsddddddddddddddsv svsd',
        points: 10,
        mulct: 0,
        deadline: '-',
        repeatable: true,
        executionDate: 0,
        id: 1
    },
    {
        description: 'I should ',
        points: 10,
        mulct: 0,
        deadline: '-',
        repeatable: false,
        executionDate: 0,
        id: 2
    }]);

    const [completedGoals, setCompetedGoals] = useState<any[]>([]);

    useEffect(() => {
        const goalItem = localStorage.getItem('goalsHistory');
        if(goalItem){
            const goalHistory = completedGoals.concat(JSON.parse(goalItem));
            setCompetedGoals(goalHistory);
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('goalsHistory', JSON.stringify(completedGoals));
    }, [completedGoals]);

    function deleteGoal(id: number){
        const newArr = goalsArr.filter(item => item.id !== id);
        setGoalArr(newArr);
    }

    function completeGoal(id: number){
        const item = goalsArr.find(elem => elem.id == id);
        if(item){
            item.executionDate = Date.now();
            const completedGoalsArr = completedGoals.concat(item);
            setCompetedGoals(completedGoalsArr);
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