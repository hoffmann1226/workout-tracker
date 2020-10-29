import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';

class Home extends Component {


//props.history takes user to next page
goChest =() => this.props.history.push('/Chest')
goShoulders = () => this.props.history.push('/Shoulders')

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