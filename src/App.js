import React from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import Todo from "./component/Todo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);
  const addTodo = (text, isCompleted) => {
    const newTodos = [...todos, { text, isCompleted }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const editTodo = (index) => {
    const newTodos = [...todos];
    const editedTodo = prompt("Edit the todo:");
    const existedTodo = todos.filter(
      (item) => item.text === editedTodo && item.isCompleted === false
    );
    if (
      editedTodo !== null &&
      editedTodo.trim() !== "" &&
      existedTodo.length === 0
    ) {
      newTodos[index].text = editedTodo;
      setTodos(newTodos);
    } else {
      alert("Task already existed!!!");
      return;
    }
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h3>To do list</h3>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
        <TodoForm dataTodo={todos} addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
