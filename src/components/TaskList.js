import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import tasks from '../data/tasks';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = (props) => {
  //var tasksList = tasks;
  const [tasksList, setTaskList] = useState(tasks);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();

  const addTask = (task) => {
    let tasks = tasksList;
    tasks.push(task);
    console.log(tasks);
    setTaskList(tasks);
  }

  const renderTasks = () => {
    return tasksList.map(task => <Task key={task.id} task={task} />);
  }


  return (
    <div className="container">
      <h1>Tareas de {props.owner.nombre}:</h1>
      <TaskForm addTask={addTask} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Titulo</TableCell>
              <TableCell>Completado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {renderTasks()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TaskList;