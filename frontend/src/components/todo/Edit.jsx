import React, { useEffect, useRef } from "react";
import instance from "../../utils/Api";
import "./edit.css";

function Edit({ task, showEdit }) {
  const todo = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.post("/edit", {
        newTodo: todo.current.value,
        id: task.task_id // Ensure `id` is dynamically set if needed
      });

      const { data } = res.data;
      console.log(data);
      showEdit();
      // Call showEdit to close the edit form
    } catch (error) {
      console.error("Error occurred while editing:", error);
    }

  };



  return (
    <form id="editForm" onSubmit={handleSubmit}>
      <input
        ref={todo}
        type="text"
        id="textBox"
        name="newTodo"
        defaultValue={task.todo}
      />

      <button type="submit">
        Edit
      </button>
    </form>
  );
}

export default Edit;
