import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



//reusable component for mapping out the exercise data for each exercise routine
//uses props from parent component to fill up table

class ExerciseItem extends Component {


  render() {
    return (
      <TableRow key={this.props.item.id}>
        <TableCell> {this.props.item.exercise}</TableCell>
        <TableCell> {this.props.item.reps}</TableCell>
        <TableCell> {this.props.item.weight}</TableCell>
      </TableRow>
    );
  }
}


const putReduxStateOnProps=(reduxState)=>{
    return reduxState;
  }
  
  export default connect(putReduxStateOnProps)(ExerciseItem);