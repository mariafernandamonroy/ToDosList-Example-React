import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const haddleTodoClick = () => {
    toggleTodo(id);
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={haddleTodoClick}/> 
      {task}
    </li>
  );
}
