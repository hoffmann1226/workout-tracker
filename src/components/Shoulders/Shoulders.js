import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExerciseItem from './../ExerciseItem/ExerciseItem'

class Shoulders extends Component {

componentDidMount(){
  this.props.dispatch({type: 'GET_SHOULDERS'})
}

goHome =() => this.props.history.push('/')

  render() {
    return (
      
      <div>
    <h3>Shoulders Triceps Biceps</h3>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell>Reps</TableCell>
                <TableCell>Weight</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>  
            {/* {this.props.reduxState.shoulders.map((item, index) => (
                <ExerciseItem key={index} item={item}/>
            ))} */}
        </TableBody>
    </Table>
      <button onClick={this.goHome}>Go Back to Home</button>
      </div>
    );
  }
}
//because the component uses redux, we need this code at the bottom
const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Shoulders);