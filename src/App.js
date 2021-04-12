import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todos: [],
  };

  addToDo = (e) => {
    e.preventDefault();

    const toDoId = uuidv4();
    const toDoTitle = e.target.toDoTitle.value;
    const toDoContent = e.target.toDoContent.value;
    const toDoPriority = e.target.toDoPriority.value;

    const todo = {
      toDoId,
      toDoTitle,
      toDoContent,
      toDoPriority,
      completed: false,
      isEditing: false,
    };

    this.setState({
      todos: [...this.state.todos, todo],
    });

    e.target.reset();
  };

  removeToDo = (toDoId) => {
    const filteredTodos = this.state.todos.filter(
      (todo) => todo.toDoId !== toDoId
    );
    this.setState({
      todos: [...filteredTodos],
    });
  };

  completeTodo = (toDoId) => {
    const completedTodos = this.state.todos.map((el) => {
      if (el.toDoId === toDoId) {
        el.completed = !el.completed;
      }
      return el;
    });

    console.log(completedTodos);

    this.setState({
      todos: [...completedTodos],
    });
  };

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddToDoForm addToDo={this.addToDo} />
        <TodoList
          todoList={this.state.todos}
          removeToDo={this.removeToDo}
          completeTodo={this.completeTodo}
        />
      </>
    );
  }
}

export default App;
