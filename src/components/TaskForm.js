import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TaskForm = ({ addTask, taskEdit }) => {
    const [ titulo, setTitulo ] = useState(taskEdit.title);
    const [ completed, setCompleted ] = useState(taskEdit.completed);
    const [ userId, setUserId ] = useState(taskEdit.userId);
    const [ id, setId ] = useState(taskEdit.id);

    useEffect(() => {
        setTitulo(taskEdit.title);
        setCompleted(taskEdit.completed);
        setUserId(taskEdit.userId);
        setId(taskEdit.id);
    },[taskEdit])


    const handleChange = (event)=> {
        setTitulo(event.target.value);
    }

    const handleClick = (event) => {
        //console.log(titulo+ " " +completed)
        //let idNew = (id==null)? Math.floor(Math.random()*10000): id;
        let task = { id, title: titulo, completed, userId: 1 }
        setTitulo("");
        setCompleted(false);
        setId(undefined);
        setUserId(undefined);
        //console.log(task);
        addTask(task);
    }
    const handleChangeC = (event)=> {
        setCompleted(event.target.checked); 
    }

    return (
        <form noValidate autoComplete="off">
            <input type="hidden" value={userId} />
            <input type="hidden" value={id} />
            <TextField id="standard-basic" label="Título" value={titulo} onChange={handleChange} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={completed}
                        name="checkedB"
                        color="primary"
                        onChange={handleChangeC}
                    />
                }
                label="Terminada"
            />
            <Button variant="contained" color="primary" onClick={handleClick}>
                {(id==null)?"Agregar":"Actualizar"}
            </Button>
        </form>
    )
}

export default TaskForm
