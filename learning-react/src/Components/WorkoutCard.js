import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function WorkoutCard(props) {
  return (
    <div className="relative mb-4 rounded overflow-hidden ">
        <div 
            style ={{
                'backgroundImage' : `url('${props.workout.workouImage}')`,
            }}
                className="w-full h-64 bg-blue bg-cover">
            <h1 
                className="bg-black w-100 opacity-75 p-2 font-bold text-2xl text-center">{props.workout.workoutName}</h1>

            <div 
                className="absolute bottom-0 left-0 bg-gray-800 w-full h-100 opacity-75">
                <div className="flex">
                    <div 
                        className="w-1/2 bg-gray-400 h-100 p-3 text-center text-black text-2xl">
                        <h3 >Your Reps</h3>
                        <p>{props.workout.workoutRep}</p>
                    </div>
                    <div 
                        className="w-1/2 bg-gray-400 h-100 p-3 text-center text-black text-2xl">
                        <h3>Your Sets</h3>
                        <p>{props.workout.workoutSet}</p>
                    </div>
                    <Link
                        to={`/Workout/${props.workout.id}`}
                        className ="bg-actual-gray text-white text-4xl pr-3 pl-4 inset-0 flex items-center justify-center">
                    
                        <FontAwesomeIcon
                            icon ={faEdit} 
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WorkoutCard;
