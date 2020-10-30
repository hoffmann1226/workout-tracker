import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';

class Legs extends Component {



goHome =() => this.props.history.push('/')

  render() {
    return (
      
      <div>
    <h3>Legs and Back</h3>
      <button onClick={this.goHome}>Go Back to Home</button>
      </div>
    );
  }
}
//because the component uses redux, we need this code at the bottom
const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Legs);