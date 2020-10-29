import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './../Home/Home';
import Chest from './../Chest/Chest';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom's Workout App</h1>
        </header>
        <br/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Chest" componeent={Chest}/>
        
      </div>
      </Router>
    );
  }
}

export default App;
