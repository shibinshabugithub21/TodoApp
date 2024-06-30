import React, { useState } from "react";
import Swal from 'sweetalert2';

function EditTodoFrom({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      editTodo(value, task.id);
      setValue("");
      Swal.fire({
        title: 'Updated!',
        text: 'The task has been updated!',
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
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Update task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </>
  );
}

export default EditTodoFrom;
