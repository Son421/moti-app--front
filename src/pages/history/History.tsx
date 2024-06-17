import React, {useState, useEffect} from "react";
import { AiOutlineClear } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/header/Header";
import HistoryItem from "../../components/historyItem/HistoryItem";
import constants from "../../components/constants";
import './history.css'

export default function History(){
    const [completedGoal, setCompletedGoal] = useState<any[]>([]);
    const {isAuthenticated} = useAuth();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await fetch(`${constants.url}/completedGoals`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCompletedGoal(data);
        } catch (error) {
            console.error('Error fetching goals:', error);
        }
    };

    async function cleanHistory() {
        try {
            const token = localStorage.getItem('token'); 
            if (!token) {
                throw new Error('No authentication token found');
            }
    
            const response = await fetch(`${constants.url}/completedGoals`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to clear completed goals');
            }
    
            setCompletedGoal([]);
            console.log('Completed goals cleared successfully');
    
        } catch (error) {
            console.error('Error clearing completed goals:', error);
        }
    }

    async function removeCompletedGoal(_id: string) {
        try {
            const response = await fetch(`${constants.url}/completedGoals/${_id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete completed goal');
            }
            setCompletedGoal(prevGoals => prevGoals.filter(goal => goal._id !== _id));
        } catch (error) {
            console.error('Error deleting completed goal:', error);
        }
    }

    return(
        <div>
            <Header isAuth={isAuthenticated}/>
            <div className="history--list">
                <div className="history--list_wrapper">
                    <span>History</span>
                    <button onClick={cleanHistory} className={`history--list_button `}> <AiOutlineClear/> </button>
                </div>
                <section>
                    {completedGoal.map((elem) =>(
                        <div>
                            <HistoryItem completedGoal={elem} removeComletedGoal={removeCompletedGoal}/>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}