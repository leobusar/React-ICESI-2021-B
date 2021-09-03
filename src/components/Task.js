import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Task = ({ task }) => {

  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.completed + ""}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  )
}

export default Task;