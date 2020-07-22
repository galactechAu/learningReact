import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Views/Home';
import Workouts from './Views/Workouts';
import Workout from './Views/Workout';

function App() {
  return (
    <div className="bg-black h-100 text-gray-200">

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
