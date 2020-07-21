import React from 'react';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="bg-black h-100 text-gray-200">

      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">Main Page</h1>
          </Route>
          <Route path="/myworkouts">
          <h1 className="font-bold text-2xl">Workouts</h1>

          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
