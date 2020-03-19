import React from 'react';
import './TodoListItem.css';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  console.log(todo);
  return (
    <li onClick={() => toggleTodo(todo)}>
      <label className={todo.completed ? 'completed' : undefined}>
        <input type='checkbox' checked={todo.completed} />
        {todo.text}
      </label>
    </li>
  );
};
