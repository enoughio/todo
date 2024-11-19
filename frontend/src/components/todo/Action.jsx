import React, { useEffect, useRef } from "react";
import instance from "../../utils/Api";
import "./action.css";

function Action({ text, preVal, show, action }) {
  const inputField = useRef();

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const inputValue = inputField.current.value.trim(); // To avoid empty spaces being entered as valid

      if (inputValue.length === 0) {
        throw new Error("Please enter valid data.");    
      }

      // Call the action function if provided
      if (action) {
        action(inputValue);
      }

      // Function to show and hide edit container
      if (show) {
        show(inputValue); // Pass the updated value to the parent function
      }
    } catch (error) {
      console.error("Please fill all the fields:", error.message);
    }
  };

  return (
    <form id="editForm" onSubmit={handleSubmit}>
      <input
        ref={inputField}
        type="text"
        id="addTodoText"
        name="newTodo"
        defaultValue={preVal}
        placeholder="Add todo"
        aria-label="Add or edit a todo" // Added accessibility label
      />

      <button type="submit">{text}</button>
    </form>
  );
}

export default Action;
