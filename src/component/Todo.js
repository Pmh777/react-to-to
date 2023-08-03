function Todo({ todo, index, completeTodo, removeTodo }) {
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
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;
