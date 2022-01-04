import React from "react";
import ExerciseItem from "./ExcerciseItem";


export default function ExcercisesList(props) {
    if (props.excercises.length===0) return null;
    return (
        <ul>
            {props.excercises.map(excercise => (
            <ExerciseItem excercise={excercise}/>))}
        </ul>
    );
}