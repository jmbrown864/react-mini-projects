// TodoList.js

import React, { useState } from 'react';

const TodoList = () => {
  // State for the todo items
  const [todos, setTodos] = useState([]);
  // State for the new todo input
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = (e) => {
    // Implement the logic here
    e.preventDefault();

    if (newTodo !== '') {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    }
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    // Implement the logic here
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    // Implement the logic here
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
            <li key={index}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)}>Remove</button>
            </li>
        ))}
      </ul>
      <p>Total Todos: {todos.length}</p>
      <p>Completed Todos: {todos.filter((todo) => todo.completed).length}</p>
    </div>
  );
};

export default TodoList;
