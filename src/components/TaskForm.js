import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TaskForm = ({ addTask }) => {
    const [ titulo, setTitulo ] = useState("");
    const [ completed, setCompleted ] = useState(false);
    const handleChange = (event)=> {
        setTitulo(event.target.value);
    }
    const handleClick = (event) => {
        console.log(titulo+ " " +completed)
        let task = { id: 100, title: titulo, completed: completed, userId: 1 }
        console.log(task);
        addTask(task);
    }
    const handleChangeC = (event)=> {
        setCompleted(event.target.checked); 
    }

    return (
        <form noValidate autoComplete="off">
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
                Agregar
            </Button>
        </form>
    )
}

export default TaskForm
