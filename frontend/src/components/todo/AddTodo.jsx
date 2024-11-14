import React, { useEffect, useRef } from "react";
import instance from "../../utils/Api";
import "./edit.css";

function Add() {
  const todo = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      
    //   showEdit(todo.current.value);  // function to show and hide edit containner

    } catch (error) {
      console.error("Error occurred while editing:", error);
    }

  };



  return (
    <form id="editForm" onSubmit={handleSubmit}>
      <input
        ref={todo}
        type="text"
        id="addTodoText"
        name="newTodo"
        placeholder="add new todo"
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default Add;
