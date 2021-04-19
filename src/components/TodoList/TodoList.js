import React from "react";
import "./TodoList.css";
import { Grid, Row } from "react-flexbox-grid";

const TodoList = ({ todoList, removeToDo, completeTodo }) => {
  return (
    <Grid>
      <h1>Todo List</h1>
      <ul className={"todolist"}>
        {todoList.map((todo) => {
          const {
            toDoPriority,
            toDoId,
            toDoTitle,
            toDoContent,
            completed,
          } = todo;
          return (
            <li
              className={completed ? `${toDoPriority} completed` : toDoPriority}
              key={toDoId}
            >
              <h3>{toDoTitle}</h3>
              <p>{toDoContent}</p>
              <Row>
                <button className={"btn"} onClick={() => completeTodo(toDoId)}>
                  {completed ? "not complete" : "complete"}
                </button>
                <button className={"btn"}>edit</button>
                <button className={"btn"} onClick={() => removeToDo(toDoId)}>
                  delete
                </button>
              </Row>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};

export default TodoList;
