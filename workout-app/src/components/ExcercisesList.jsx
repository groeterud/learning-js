import React from "react";

export default function ExcercisesList(props) {
    if (props.excercises.length===0) return null;
    return (
        <ul>
            {props.excercises.map(excercise => <li key={excercise.id}>{excercise.title}</li>)}
        </ul>
    );
}