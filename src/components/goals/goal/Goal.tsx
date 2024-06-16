import React from "react";
import { TiTick, TiArrowSync, TiTrash } from "react-icons/ti";
import constants from "../../constants";
import './goal.css';

interface goalType{
    goal: {
        description: string;
        points: number;
        mulct: number;
        deadline: string;
        repeatable: boolean;
        executionDate: number;
        userId: string;
        _id: string;
    }
    deleteGoal(_id: string): void
    completeGoal(_id: string): void
    countPoints: (data: number) => void
}

export default function Goal(props: goalType){

  const incrementPoints = async (userId: string, points: number) => {
      try {
        const response = await fetch(`${constants.url}/increment-points`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, points })
        });
        const data = await response.json();
        props.countPoints(data.user.pointCounter);          
        console.log(data);
        if (response.ok) {
          console.log('Points incremented:', data);
        } else {
          console.error('Error incrementing points:', data.message);
        }
      } catch (error) {
        console.error('Error incrementing points:', error);
      }
    };

    const decrementPoints = async (userId: string, mulct: number) => {
      try {
        const response = await fetch(`${constants.url}/decrement-points`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, mulct })
        });
        const data = await response.json();
        props.countPoints(data.user.pointCounter);     
        if (response.ok) {
          console.log('Points decremented:', data);
        } else {
          console.error('Error decrementing points:', data.message);
        }
      } catch (error) {
        console.error('Error decrementing points:', error);
      }
    };

  function addPoints(){
      incrementPoints(props.goal.userId, props.goal.points);

      props.completeGoal(props.goal._id);

      if(!props.goal.repeatable){
          props.deleteGoal(props.goal._id);
      }
  }

  function remove(){        
      decrementPoints(props.goal.userId, props.goal.mulct);

      props.deleteGoal(props.goal._id);
  }
  
  return(
      <div className="goal">
          <button className="goal--delete" onClick={remove}> <TiTrash/> </button>
          <span className="goal--description">{props.goal.description}</span> 
          <div className="goal--mulct"> {props.goal.mulct}</div>
          <div className="goal--points"> {props.goal.points}</div>
          <button className="goal_button" onClick={addPoints}>  <TiTick className="goal_button--tick"/>  </button>
          <div className={props.goal.repeatable ? "goal--reteate": "goal--reteate goal--hidden"}> <TiArrowSync/> </div>
      </div>
  )
}