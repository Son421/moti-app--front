import React, {useState} from "react";
import './edit.css';
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import UserForm from "../../components/userForm/UserForm";

export default function Edit(){
    const user = useAppSelector(state => state.userInfo.value);
    const [newInfo, setNewInfo] = useState({
        name: user.name,
        pic: user.pic,
        passworld: user.passworld,
    });


    return(
        <div className="edit">
            <UserForm formStyle={`edit`}/>
        </div>
    )
}