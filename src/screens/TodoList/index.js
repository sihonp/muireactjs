import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import DisplayTodosList from "./DisplayTodosList";
import TodoForm from "./TodoForm";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const TodoList = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Container className={classes.container} >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={9} md={6} lg={4} >
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h4" >
                Task Lists
              </Typography>
              <TodoForm addTodo={addTodo} />
            </CardContent>
          </Card>
          <DisplayTodosList className={classes.list}
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
            style={{ height: '70px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TodoList;