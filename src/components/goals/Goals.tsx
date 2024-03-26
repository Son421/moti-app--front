import React from "react";
import Goal from "./goal/Goal";

export default function Goals(){
    let goalsArr = [{
        description: 'I should clean toilet sdfsd fdsf ds sfdsf ds  fdsf vsddv sdf vsddddddddddddddsv svsd',
        points: 10,
    }]

    return(
        <div>
            {goalsArr.map((goal) =>(
                <div>
                    <Goal goal={goal}/>
                </div>
            ))}
        </div>
    )
}