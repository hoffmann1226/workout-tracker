import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';

class Home extends Component {


//props.history takes user to next page
goChest =() => this.props.history.push('/Chest');
goShoulders = () => this.props.history.push('/Shoulders');
goLegs = () => this.props.history.push('/Legs');

  render() {
    return (
      
      <div>
      <h3>Which P90X workout are you doing today?</h3>
      <button onClick={this.goChest}>Chest and Back</button>
      <br/>
      <button onClick={this.goShoulders}>Shoulders Biceps and Triceps</button>
      <br/>
      <button onClick={this.goLegs} >Legs and Back</button>
      </div>
    );
  }
}

const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Home);