import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./style";


const TodoForm = ({ addTodo }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <TextField
        fullWidth 
        sx={{ m: 1 }}
        label="Type in a new task"
        multiline
        variant="outlined"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.SubmitBtn}>Create</Button>
    </form>
  );
}

export default TodoForm;