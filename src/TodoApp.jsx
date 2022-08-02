import React, { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis';

const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? 'true' : 'false'} </h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {todos.map(({ title, id, completed }) => (
          <li key={id}>
            <strong>{completed ? 'DONE ' : 'Pending'}</strong>
            {title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default TodoApp;
