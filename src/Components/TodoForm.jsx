import React, { useState } from "react";
import Swal from 'sweetalert2';

function TodoFrom({ addTodo }) {
  const [value, setValue] = useState("");

  function addTask(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
      Swal.fire({
        title: 'Success!',
        text: 'A new task is added!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a task!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder="Enter the new task..." onChange={addTask} />
        <button type="submit" className="todo-btn"> ADD</button>
      </form>
    </>
  );
}

export default TodoFrom;
