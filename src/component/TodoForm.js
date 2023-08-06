import React from "react";

function TodoForm({ addTodo, dataTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const existTodo = dataTodo.filter(
      (item) => item.text === value && item.isCompleted === false
    );
    if (existTodo.length > 0) {
      alert("Task already existed!!!");
      return;
    } else {
      addTodo(value, false);
      setValue("");
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
