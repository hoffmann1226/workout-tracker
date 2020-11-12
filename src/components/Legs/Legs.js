import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExerciseItem from './../ExerciseItem/ExerciseItem'
import Button from '@material-ui/core/Button';

class Legs extends Component {

componentDidMount(){
  this.props.dispatch({type:'GET_LEGS'})
}

goHome =() => this.props.history.push('/')

  render() {
    return (
      
      <div>
      <h3>Legs and Back</h3>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell>Reps</TableCell>
                <TableCell>Weight</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>  
               {/* {this.props.reduxState.legs.map((item, index) => (
                <ExerciseItem key={index} item={item}/>
            ))} */}     
        </TableBody>
    </Table>
      <Button onClick={this.goHome}>Go Back to Home</Button>
      </div>
    );
  }
}
//because the component uses redux, we need this code at the bottom
const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Legs);