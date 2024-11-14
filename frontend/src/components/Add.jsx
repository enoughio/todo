import React, { useState } from 'react';
import './add.css'
import { RiAddLargeFill } from "react-icons/ri";
import Action from './todo/Action.jsx';


const Add = () => {

    // add on backend and also update todos of usecontest
  const [add, setAdd] = useState(false);
    const addTodo = () => {
      console.log("addTodo", )
      setAdd(true);
    }


  return (
    
      <div id='wrapper'>
      {add && <Action text='Add' show={addTodo}    />}

    {!add && 
        <div id="addButton" onClick={addTodo}>
        <RiAddLargeFill />
      </div>
    }
    </div>

  )
}

export default Add