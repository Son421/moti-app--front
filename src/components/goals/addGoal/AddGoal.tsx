import React, {useState} from "react";
import './addGoal.css'
import { TiPlus, TiTickOutline} from "react-icons/ti";

const date = new Date();

export default function AddGoal(props: { shown: boolean; showUpGoalForm: () => void; }){
    const [registerInfo, setRegisterInfo] = useState({
        description: '',
        points: 0,
        mulct: 0,
        deadline: '-',
        repeatable: false,
        executionDate: 0
    });
    const [rows, setRows] = useState(2);

    function showUp(){
        props.showUpGoalForm();
    }

    function checkNumber(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            handleChange(e);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value = e.target.value;
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: value
        });
    }

    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleChange(e);

        const calculatedRows = Math.abs(e.target.scrollHeight / 24);
        calculatedRows < 2? setRows(2): setRows(calculatedRows);
    };

    if(props.shown){
        return(
            <div>
                <TiPlus onClick={showUp} className="addGoal__button addGoal__button--open"/>
            </div>
        );
    }else{
        return(
            <div>
                <TiPlus onClick={showUp} className="addGoal__button addGoal__button--clouse"/>
                <section>
                    <form className="addGoal__form">
                        <span> New goal</span>
                        <label>
                            <div> Description: </div>
                            <textarea maxLength={360} className="addGoal__form_textarea--descrtiption" onChange={handleChangeTextarea} name="description" rows={rows} value={registerInfo.description}></textarea> 
                        </label>
                        <label>
                            Points for completing:
                            <input className="addGoal__form_input--points" onChange={checkNumber} name="points" value={registerInfo.points}  ></input>                            
                        </label>
                        <label>
                            Penalty for non-fulfillment:
                            <input className="addGoal__form_input--points" onChange={checkNumber}  name="mulct" value={registerInfo.mulct}  ></input>                            
                        </label>
                        <label>
                            Deadline:
                            <input type="date" className="addGoal__form--date" onChange={handleChange} name="deadline" min={`${date.getFullYear()}-${date.getMonth() < 10 ? "0" + (date.getMonth()+1) : date.getMonth()}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`} />                            
                        </label>
                        <label>
                            Repeatable: 
                            <input className="addGoal__form--repeatable" onChange={handleChange} name="repeatable" type="checkbox" id="repeat" />
                        </label>
                        <button className="addGoal__form--tick"> <TiTickOutline/> </button>
                    </form>
                </section>
            </div>
        );
    }
}