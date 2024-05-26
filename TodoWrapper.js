import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false,};
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const togglecomplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {... todo, completed: !todo.completed}: todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1> Even the sky is not your LIMIT!</h1>
      <h3>Keep Going</h3>

      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index)=> (
        todo.isEditing? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : ( 
          <Todo task={todo} key={index} togglecomplete={togglecomplete} 
            deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  );
};
