import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';


class Home extends Component {


//props.history takes user to next page
goChest =() => this.props.history.push('/Chest');
goShoulders = () => this.props.history.push('/Shoulders');
goLegs = () => this.props.history.push('/Legs');
goCore = () => this.props.history.push('/Core');
goCst = () => this.props.history.push('/Cst');

  render() {
    return (
      
      <div>
      <h3>Which P90X workout are you doing today?</h3>
      <Button color="primary" variant="contained" onClick={this.goChest}>Chest and Back</Button>
      <br/>
      <br/>
      <Button color="primary" variant="contained" onClick={this.goShoulders}>Shoulders Biceps and Triceps</Button>
      <br/>
      <br/>
      <Button color="primary" variant="contained" onClick={this.goLegs} >Legs and Back</Button>
      <br/>
      <br/>
      <Button color="primary" variant="contained" onClick={this.goCore} >Core Synergistics</Button>
      <br/>
      <br/>
      <Button color="primary" variant="contained" onClick={this.goCst} >Chest Shoulders Triceps</Button>
      </div>
    );
  }
}

const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Home);