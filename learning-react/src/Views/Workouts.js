import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import WorkoutCard from '../Components/WorkoutCard'

function Workouts() {
  let content = null
  const url =`https://5f1811b67c06c900160dc958.mockapi.io/Workouts?page=1&limit=10`
  const [workouts, setWorkout] = useState({
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

  if(workouts.error){
    content = <p className=" font-bold text-center" >Error! Workouts not found.</p>
}


  if(workouts.loading){
      content = <Loader></Loader>
  }
  if(workouts.data){
        content = 
        workouts.data.map((workout) =>
        <div key={workout.id} className="pb-10">
          <WorkoutCard 
          workout = {workout}/></div>
        
    )
  }
  return (
    <div>
        {content}
    </div>
  )
}

export default Workouts;
