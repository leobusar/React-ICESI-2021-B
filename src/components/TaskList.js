import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

//import tasks from '../data/tasks';
import axios from  '../config/axios';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = (props) => {
  //var tasksList = tasks;

  const [tasksList, setTaskList] = useState([]);
  const [taskEdit,  setTaskEdit] = useState({ "userId": undefined, "id": undefined, "title": "", "completed": false });

  useEffect(()=> {
      axios.get("/todos?_start=20&_limit=20")
      .then( (res) => setTaskList(res.data) ) ;
  },[]);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();

  const addTask = (task) => {
    let tasks = [...tasksList];
    if(task.id === null){
      //task.id = Math.floor(Math.random()*10000);
      // tasks.push(task);
      axios.post("/todos", 
              {id: task.id, 
              userId: task.userId, 
              title: task.title, 
              completed: task.completed})
            .then((res) => console.log(res.data));
           
    }else{
      let index  = tasks.findIndex( (taskitem) => task.id === taskitem.id );
      tasks[index] = task;
    }
    //console.log(tasks);
    setTaskList(tasks);
    //console.log(tasksList);
  }

  const delTask =  (task) => {
    let tasks = [...tasksList];
    let index  = tasks.findIndex( (taskitem) => task.id === taskitem.id );
    tasks.splice(index, 1);
    setTaskList(tasks);
  }

  const renderTasks = () => {
    return tasksList.map(task => <Task key={task.id} task={task} delTask={delTask} editTask={setTaskEdit}/>);
  }

  return (
    <div className="container">
      <h1>Tareas de {props.owner.nombre}:</h1>
      <TaskForm addTask={addTask} taskEdit={taskEdit}/>
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