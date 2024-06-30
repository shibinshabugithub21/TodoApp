import React, { useState } from "react";
import TodoFrom from "./TodoForm";
import Todo from "./Todo";
import EditTodoFrom from "./Edittodofrom";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import Swal from 'sweetalert2';


function TodoWrapper() {
  const [todos, setTodos] = useState([ { id: uuidv4(), task: "Get a Job", completed: false, isEditing: false },
    { id: uuidv4(), task: "Repair my phone", completed: false, isEditing: false },
    { id: uuidv4(), task: "Buy new car", completed: false, isEditing: false }
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    const deletedTask = todos.find((todo) => todo.id === id)?.task;
    setTodos(todos.filter((todo) => todo.id !== id));
    if (deletedTask) {
      Swal.fire({
        title: 'Task Deleted',
        text: `Task "${deletedTask}" is deleted!`,
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };
  const edittask=(task,id)=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing:!todo.isEditing}:todo)) 
  }

  return (
    <div className="TodoWrapper">
      <h1>Todo list</h1>
      <TodoFrom addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ?(<EditTodoFrom editTodo={edittask} task={todo}/>):(<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      ))}
    </div>
  );
}
export default TodoWrapper;
