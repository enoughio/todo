import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Edit from "./Edit";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { todoContext } from "../../context/getTodo";

function Todo({ task }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(""); // State to store the value
  const todoDiv = useRef();
  const nevigate = useNavigate()
  const {task_id, todo} = task;

  const showEdit = () => {

    setShow((prev) => !prev);
    if (todoDiv.current) {
      setValue(todoDiv.current.innerText); // Update the state with the text content
    }
  };


  const [todos, setTodos] = useContext(todoContext);
  const handleCheckbox = async (id) => {
    try {
      const response = await instance.post(`/delete/${task_id}`)
      setTodos( todos.filter(todos => todos.task_id === id));
      console.log("Todo deleted:", response.data);
      // nevigate('/')

    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  

  return (
    <div className="weapper">
      {show && <Edit showEdit={showEdit} value={value} />}{" "}
      {!show && (
        <form id="todo" action="">
          <Link to="/edit" onClick={showEdit} id="button">
            edit
          </Link>

          <div className="text" ref={todoDiv}>
            {todo}
          </div>
          <input
            id="Cbox"
            onClick={() => handleCheckbox(task_id)}
            type="checkbox"
            
          />
        </form>
      )}
    </div>
  );
}

export default Todo;
