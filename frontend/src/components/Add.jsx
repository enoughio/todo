import React, { useState } from 'react';
import './add.css'
import { RiAddLargeFill } from "react-icons/ri";
import AddTodo from './todo/AddTodo.jsx';


const Add = () => {

    // add on backend and also update todos of usecontest
  const [add, setAdd] = useState(false);
    const addTodo = () => {
      console.log("addTodo", )
      setAdd(true);
    }


  return (
    
      <div id='wrapper'>
      {add && <AddTodo />}

    {!add && 
        <div id="addButton" onClick={addTodo}>
        <RiAddLargeFill />
      </div>
    }
    </div>

  )
}

export default Add