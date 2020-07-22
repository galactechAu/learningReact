import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Workout() {
    const url ="https://5f1811b67c06c900160dc958.mockapi.io/Workouts/3"
    const [workout, setWorkout] = useState(null)
    useEffect(() => {
        axios.get(url).then(response => {
            setWorkout(response.data)
        })
    }, [url])

    let content = null

    if(workout){
        return(
            content = 
            <div className="bg-black h-100 text-gray-200">
                <h1 className="font-bold text-2xl p-3">Workout { workout.workoutName } </h1>
                <img src={workout.workouImage} className="w-100" alt="{workout.workoutName}"></img>
                <p>{workout.workoutRep}</p>
                <p>{workout.workoutSet}</p>
            </div>
            
        )
    }
  return (
        <div>
            {content}
        </div>
     )
}

export default Workout
