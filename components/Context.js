import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false,
  },
];

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(initialTodos);
  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, onComplete, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
