import React, { useRef, useState } from "react";
import "./todo.css";
import Edit from "./Edit";
import { Link } from "react-router-dom";

function Todo({todoText="TODO and DO"}) {
  
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(""); // State to store the value
  const todo = useRef();


  const showEdit = () => {
    setShow((prev) => !prev);
    if (todo.current) {
      setValue(todo.current.innerText); // Update the state with the text content
    }
  };

  return (
    <div className="weapper">
      {show && <Edit connector={showEdit} value={value} />} {/* Pass the value as a prop */}
      {!show && (
        <form id="todo" action="">
          <Link to="/edit" onClick={showEdit} id="button">
            edit
          </Link>

          <div className="text" ref={todo}>
            {todoText}
          </div>
          <input id="Cbox" type="checkbox" />
        </form>
      )}
    </div>
  );
}

export default Todo;
