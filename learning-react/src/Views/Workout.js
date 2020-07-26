import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
function Workout() {
    const  { id } = useParams() 
    let content = null
    const url =`https://5f1811b67c06c900160dc958.mockapi.io/Workouts/${id}`
    const [workout, setWorkout] = useState({
        loading: false, 
        data: null,
        error: false
    })
    useEffect(() => {
        setWorkout({
            loading:true,
            data:null,
            error: false
        })
        axios.get(url).then(response => {
            setWorkout({
                loading:false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setWorkout({
                loading:false,
                data: null,
                error: true
            })
        })
    }, [url])

    if(workout.error){
        content = <p className=" font-bold text-center" >Error! Workout not found.</p>
    }


    if(workout.loading){
        content = <Loader></Loader>
    }



    if(workout.data){
        return(
            content = 
            <div className="bg-black h-100 text-gray-200">
                <h1 className="font-bold text-2xl p-3">Workout { workout.data.workoutName } </h1>
                <img src={workout.data.workouImage} className="w-full" alt="{workout.workoutName}"></img>
                <p>{workout.data.workoutRep}</p>
                <p>{workout.data.workoutSet}</p>
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
