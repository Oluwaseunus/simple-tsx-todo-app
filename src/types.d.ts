type AddTodo = (newTodo: string) => void;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

type Todo = {
  text: string;
  completed: boolean;
};

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

type ToggleTodo = (todo: Todo) => void;
