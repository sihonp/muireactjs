import { List } from "@mui/material";
import React from "react";
import MyTodos from "./MyTodos";

const DisplayTodosList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <List>
      {todos.map(todo => (
        <MyTodos
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
        
      ))}
    </List>
  );
}

export default DisplayTodosList;