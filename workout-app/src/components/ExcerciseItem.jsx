import React from "react";

export default function ExerciseItems(props) {
    return (
        <li key={props.id}>{props.title}</li>
    )
}