import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';

class Home extends Component {

//use local state 
state = {
  feeling: '',
}

  //require the user to enter an answer
  submitInput = (event) => {
    event.preventDefault();
    if (this.state.feeling === ''){
     alert('You must choose an answer!')   
    } 
//once an answer is provided, local state is dispatched to the setFeeling reducer in index.js    
    else {
    console.log(this.state.feeling)
    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling})
    this.goNext();
  }
}

//props.history takes user to next page
goNext =() => this.props.history.push('/Understanding')

//use a drop down select panel with an onChange to trigger changeState to capture value
  render() {
    return (
      
      <div>
      <h3>Which P90X workout are you doing today?</h3>
      <button>Chest and Back</button>
      <br/>
      <button>Shoulders Biceps and Triceps</button>
      <br/>
      <button>Legs and Back</button>
      </div>
    );
  }
}
//because the component uses redux, we need this code at the bottom
const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Home);