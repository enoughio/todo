import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/Api";
import "./edit.css";

function Edit({ showEdit, value }) {
  const nveigator = useNavigate();
  const todo = useRef();
  // console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const  res  = await instance.post("/edit",{
        newTodo: todo.current.value,
        id: 74
      });

      const {data} = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // console.log(todo.current.value);

    showEdit();
  };



  return (
    <form id="editForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={todo}
        type="text"
        id="textBox"
        name="newTodo"
        defaultValue={value}
      />
      <button
        type="submit"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        edit
      </button>
    </form>
  );
}

export default Edit;
