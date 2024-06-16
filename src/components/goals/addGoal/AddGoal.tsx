import React, {useState} from "react";
import './addGoal.css'
import { TiPlus, TiTickOutline } from "react-icons/ti";
import constants from "../../constants";

const date = new Date();

export default function AddGoal(props: { shown: boolean; showUpGoalForm: () => void; userId: string ; newGoal: () => void}) {
    const [goalInfo, setGoalInfo] = useState({
        description: '',
        points: 0,
        mulct: 0,
        deadline: '-',
        repeatable: false,
        executionDate: 0,
    });
    const [rows, setRows] = useState(2);

    function showUp() {
        props.showUpGoalForm();
    }

    function checkNumber(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            handleChange(e);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type} = e.target;
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setGoalInfo(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    }

    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleChange(e);

        const calculatedRows = Math.abs(e.target.scrollHeight / 24);
        calculatedRows < 2 ? setRows(2) : setRows(calculatedRows);
    };

    async function sendGoal() {
        try {
            const response = await fetch(`${constants.url}/goals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    ...goalInfo, 
                    points: Number(goalInfo.points), 
                    mulct: Number(goalInfo.mulct), 
                    userId: props.userId 
                }),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Goal saved successfully:', data);
    
        } catch (error: any) {
            console.error('Error:', error.message);
        }
        props.newGoal();
    }

    if (props.shown) {
        return (
            <div>
                <TiPlus onClick={showUp} className="addGoal__button addGoal__button--open" />
            </div>
        );
    } else {
        return (
            <div>
                <TiPlus onClick={showUp} className="addGoal__button addGoal__button--clouse" />
                <section>
                    <form className="addGoal__form" onSubmit={(e) => e.preventDefault()}>
                        <span> New goal</span>
                        <label>
                            <div> Description: </div>
                            <textarea maxLength={360} className="addGoal__form_textarea--descrtiption" onChange={handleChangeTextarea} name="description" rows={rows} value={goalInfo.description}></textarea>
                        </label>
                        <label>
                            Points for completing:
                            <input className="addGoal__form_input--points" onChange={checkNumber} name="points" value={goalInfo.points} ></input>
                        </label>
                        <label>
                            Penalty for non-fulfillment:
                            <input className="addGoal__form_input--points" onChange={checkNumber} name="mulct" value={goalInfo.mulct} ></input>
                        </label>
                        <label>
                            Deadline:
                            <input type="date" className="addGoal__form--date" onChange={handleChange} name="deadline" min={`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`} />
                        </label>
                        <label>
                            Repeatable:
                            <input className="addGoal__form--repeatable" onChange={handleChange} name="repeatable" type="checkbox" id="repeat" checked={goalInfo.repeatable} />
                        </label>
                        <button className="addGoal__form--tick" onClick={sendGoal}> <TiTickOutline /> </button>
                    </form>
                </section>
            </div>
        );
    }
}
