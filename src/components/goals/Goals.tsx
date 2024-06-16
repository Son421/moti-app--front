import React, {useState, useEffect} from "react";
import Goal from "./goal/Goal";
import constants from "../constants";

export default function Goals(props: {addNewGoal: any;  countPoints: (data: number) => void}){
    const [goalsArr, setGoalArr] = useState<any[]>([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const token = localStorage.getItem('token'); 
              const response = await fetch(`${constants.url}/goals`, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
  
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
  
              const data = await response.json();
              setGoalArr(data);
          } catch (error) {
              console.error('Error fetching goals:', error);
          }
      };
  
      fetchData();
  }, [props.addNewGoal]);

  async function deleteGoal(_id: string) {
    try {
      const response = await fetch(`${constants.url}/goals/${_id}`, {
          method: 'DELETE'
      });

      if (!response.ok) {
          throw new Error('Network response error');
      }
      setGoalArr(prevGoals => prevGoals.filter(goal => goal._id !== _id));
    } catch (error: any) {
        console.error('Error:', error.message);
    }
  }

function completeGoal(_id: string) {
  fetch(`${constants.url}/completeGoals/${_id}`, {
      method: 'POST'
  })
  .then(res => {
      if (!res.ok) {
          throw new Error('Network response error');
      }
      return res.json();
  })
  .catch(error => {
      console.error('Error completing goal:', error);
  });
}


    return(
        <div>
            {goalsArr.map((goal) =>(
                <div>
                    <Goal goal={goal} completeGoal={completeGoal} deleteGoal={deleteGoal} countPoints={props.countPoints}/>
                </div>
            ))}
        </div>
    )
}

