function Todo({ todo, index, completeTodo, editTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          disabled={todo.isCompleted ? "disabled" : ""}
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          disabled={todo.isCompleted ? "disabled" : ""}
          onClick={() => editTodo(index)}
        >
          Edit
        </button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;
