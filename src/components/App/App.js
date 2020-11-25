import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

//import all the other components
import Home from './../Home/Home';
import Chest from './../Chest/Chest';
import Shoulders from './../Shoulders/Shoulders';
import Legs from './../Legs/Legs';
import Core from './../Core/Core';
import Cst from './../Cst/Cst';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom's Workout App</h1>
        </header>
        {/* create application routes to all the components */}
        <br/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Chest" component={Chest}/>
        <Route exact path="/Shoulders" component={Shoulders}/>
        <Route exact path="/Legs" component={Legs}/>
        <Route exact path="/Core" component={Core}/>
        <Route exact path="/Cst" component={Cst}/>
        
      </div>
      </Router>
    );
  }
}

export default App;
