import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Views/Home';
import Workouts from './Views/Workouts';
import Workout from './Views/Workout';

function App() {
  return (
    <div className=" bg-black top-0 left-0 w-4/5 text-white min-h-screen w-full">
      <Router>
        <Header/>
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/myworkouts">
              <Workouts/>
            </Route>
            <Route path="/workout/:id">
              <Workout/>
            </Route>
          </Switch>
        </div>
        <Footer/>
        

      </Router>
    </div>
  );
}

export default App;
