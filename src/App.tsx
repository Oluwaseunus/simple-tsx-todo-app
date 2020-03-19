import React from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', completed: true },
  { text: 'Write app', completed: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const addTodo: AddTodo = newTodo => {
    if (newTodo.trim() !== '')
      setTodos([...todos, { text: newTodo, completed: false }]);
  };

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
