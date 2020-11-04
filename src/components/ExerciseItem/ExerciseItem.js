import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';





class ExerciseItem extends Component {

handleDelete = (id)=>(event)=>{
console.log('delete clicked, id is', id);
this.props.dispatch({type: 'DELETE_EVENT', payload: id});
}//end handleDelete

goEdit = (id) => (event)=> {
  console.log('edit clicked, id is', id)
  this.props.dispatch({type: 'GET_DETAILS', payload: id}) 
  this.props.history.push('/edit/' + id) 
}

goDetails = (id) => (event)=> {
  console.log('details clicked, id is', id)
  this.props.dispatch({type: 'GET_DETAILS', payload: id}) 
  this.props.history.push('/details/') 
}
  render() {
    return (
      <TableRow>
      </TableRow>
    );
  }
}


const putReduxStateOnProps=(reduxState)=>{
    return reduxState;
  }
  
  export default connect(putReduxStateOnProps)(ExerciseItem);