import React from "react";
import "./TodoList.css";

const TodoList = ({ todoList, removeToDo, completeTodo }) => {
  return (
    <>
      <h1>TO DO LIST</h1>
      <ul>
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
              <button onClick={() => completeTodo(toDoId)}>
                {completed ? "not complete" : "complete"}
              </button>
              <button>edit</button>
              <button onClick={() => removeToDo(toDoId)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
