import React from "react";

export default function ExcerciseItem(props) {
    return (
        <div className="excercise">
            <div className="actions">
                <h4>{props.excercise.title}</h4>
                <div className="buttons"></div>
            </div>
            <div className="details">
                <p>{props.excercise.details}</p>
            </div>
        </div>
    );
}