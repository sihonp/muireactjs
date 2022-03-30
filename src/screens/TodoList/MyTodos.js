import { Checkbox, IconButton, Typography, Grid, Card } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import useStyles from "./style";

const MyTodos = ({ todo, toggleComplete, removeTodo }) => {
  const classes = useStyles();
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  }

  return (
    <Card className={classes.SubmitBtn}>
      <Grid container spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid item xs >
          <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
        </Grid>
        <Grid item xs={9} >
          <Typography
            variant="body1"
            style={{
              textDecoration: todo.completed ? "line-through" : null
            }}
          >
            {todo.task}
          </Typography>
        </Grid>
        <Grid item xs >
          <IconButton onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MyTodos;