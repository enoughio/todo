import React, { useEffect, useRef } from "react";
import instance from "../../utils/Api";
import "./edit.css";

function Action({ text, preVal, show,action }) {
  const input = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

     { action && action( input.current.value ); } 
    
    // moved this to parent 
    // try {
    //   await instance.post("/edit", { //not accepting anything form backend for security pourpos
    //     newTodo: input.current.value,
    //     // id: task.task_id
    //   });      
    // } catch (error) {
    //   console.error("Error occurred while editing:", error);
    // }
    
      show && show(input.current.value);  // function to show and hide edit containner
    

  };



  return (
    <form id="editForm" onSubmit={handleSubmit}>
      <input
        ref={input}
        type="text"
        id="textBox"
        name="newTodo"
        defaultValue={preVal}
      />

      <button type="submit">
        {text}
      </button>
    </form>
  );
}

export default Action;
