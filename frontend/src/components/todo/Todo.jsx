import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Edit from "./Edit";
import { Link, useNavigate } from "react-router-dom";


function Todo({ task }) {

  const [show, setShow] = useState(false);
  // const {task_id, todo} = task;
  const [todo, setTodo ] = useState(task.todo)
  const todoDiv = useRef();

  const showEdit = (newTodo) => {     // function to show and hide edit containner
    setShow(prev => !prev)
    setTodo(newTodo);
  };

  // const EditTodo = () => {       //no need
  //   setShow(prev => !prev);
  // }

  const handleCheckbox = async (id) => {

  };

  return (
    <div className="weapper">
      {show && <Edit  task={task}  showEdit={showEdit} />}{" "}
      {!show && (
        <form id="todo" action="">
          {!show && <button  id="button" onClick={()=>showEdit()}> Edit </button>}
          <div className="text" ref={todoDiv}>
            {todo}
          </div>
          <input
            id="Cbox"
            onClick={() => handleCheckbox(task.task_id)}
            type="checkbox"            
          />

        </form>
      )}
    </div>
  );
}


export default Todo;




/*


import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Edit from "./Edit";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { todoContext } from "../../context/getTodo";

function Todo({ task }) {
  // const [todos, setTodos] = useContext(todoContext);  // get all todos
  const {task_id, todo} = task;
  const todoDiv = useRef();
  
  const [value, setValue] = useState(""); // State to store the value
  const [show, setShow] = useState(false);
  
  const showEdit = () => {   
    setShow((prev) => !prev);  // to enable and disable the edit container
    if (todoDiv.current) {
      setValue(todoDiv.current.innerText); // Update the state with the text content
    }
  };
  
  
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
    {show && <Edit showEdit={showEdit} id={task.task_id} value={value} />}{" "}
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
      
      */