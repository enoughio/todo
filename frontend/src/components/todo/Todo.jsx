import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Action from "./Action";

function Todo({ task, handelDeletion }) {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState(task.todo);   // store todo to use in edit opn
  const todoDiv = useRef();    // refering todo text div

  // function to show and hide edit containner
  const showEdit = async (newTodo) => {
    setShow((prev) => !prev);
    setTodo(newTodo);
  };


  // perform edit operation
  const EditAction = async ( todo) => {   
    const some = {
      newTodo: todo,
      id: task.task_id
    }

    try {                                   //not accepting anything form backend for security pourpos
      await instance.post('/edit', 
        some, 
      );      
    } catch (error) {
      console.error("Error occurred while editing:", error);
    }

  } 


  return (
    <div className="weapper">                                             
      {show && <Action text='Edit' preVal={task.todo} show={showEdit} action={EditAction} />}    {/* { here i have removed dependencies on parent on Action } */}
      {!show && (
        <form id="todo" action="">
          {!show && (
            <button id="button" onClick={() => showEdit()}>
              {" "}
              Edit{" "}
            </button>
          )}
          <div className="text" ref={todoDiv}>
            {todo}
          </div>
          <input
            id="Cbox"
            onClick={() => handelDeletion(task.task_id)}
            type="radio"
          />
        </form>
      )}
    </div>
  );
}

export default Todo;





/*


// In the Todo component
import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Action from "./Action";

function Todo({ task, handleDeletion }) {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState(task.todo); // Store the current task's content
  // const navigate = useNavigate(); // Imported for potential routing needs

  const toggleEdit = () => {
    setShow((prev) => !prev);
  };

  const text = useRef();

  const EditAction = async (newTodo) => {
    const updatedTask = {
      newTodo,
      id: task.task_id,
    };

    try {
      await instance.post('/edit', updatedTask);
      setTodo(newTodo); // Update the local state with the new todo
    } catch (error) {
      console.error("Error occurred while editing:", error);
    }
  };

  const handleCheckbox = async (id) => {
    try {
      await instance.post(`/delete/${id}`); // Send deletion request
      handleDeletion(id); // Call parent function to update tasks
    } catch (error) {
      console.error("Error occurred while deleting:", error);
    }
  };

  return (
    <div className="wrapper">
      {show && (
        <Action text='Edit' preVal={todo} show={toggleEdit} action={EditAction} />
      )}
      {!show && (
        <form id="todo" action="">
          <button id="button" type="button" onClick={toggleEdit}>
            Edit
          </button>
          <div className="text" ref={text}>{todo}</div>
          <input
            type="checkbox"
            onChange={() => handleCheckbox(task.task_id)}
          />
        </form>
      )}
    </div>
  );
}

export default Todo;











import React, { useRef, useState } from "react";
import "./todo.css";
import instance from "../../utils/Api";
import Edit from "./Edit";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { todoContext } from "../../context/todoCintextContext";

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
