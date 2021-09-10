import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Task = ({ task, delTask, editTask }) => {

  const  handleClick  = () => {
    delTask(task);
  }
  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.completed + ""}</TableCell>
      <TableCell><DeleteIcon onClick={handleClick}/> <EditIcon onClick={() => editTask(task) }/></TableCell>
    </TableRow>
  )
}

export default Task;