import React, { useEffect, useRef } from "react";
import instance from "../../utils/Api";
import "./edit.css";

function Edit({ task, showEdit }) {
  const todo = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await instance.post("/edit", { //not accepting anything form backend for security pourpos
        newTodo: todo.current.value,
        id: task.task_id
      });

      // const { data } = res.data;
      // console.log(data);
      showEdit(todo.current.value);  // function to show and hide edit containner

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
