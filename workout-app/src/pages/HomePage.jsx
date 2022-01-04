import React, {useState, useEffect} from "react";
import ExcercisesList from "../components/ExcercisesList";

export default function HomePage() {
    const [excercises, setExercises] = useState([]);
    useEffect(() => {
        async function fetchExercise() {
            try {
                const response = await fetch("http://localhost:3111/exercises");
                const data= await response.json();
                console.log('Here are the excercises:',data);
                setExercises(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchExercise();
    },[]);
    return (
        <div>
            <ExcercisesList excercises={excercises}/>
        </div>
    );
}