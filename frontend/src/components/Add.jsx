import React, { useContext, useState } from 'react';
import './add.css'
import { RiAddLargeFill } from "react-icons/ri";
import Action from './todo/Action.jsx';
import { TodoContext } from '../context/TodoContext.jsx';
import instance from '../utils/Api.jsx';


const Add = () => {

  const [todos, setTodos] = useContext(TodoContext);
    // add on backend and also update todos of usecontest
  const [add, setAdd] = useState(false);
  


    const show = () => {
      setAdd(prev => !prev);
    }
    
    const addTodo = async (todo) => {

      try {
      
        const {data} = await instance.post('/add', {   
          todo: todo
        });

        const todoData = data.todos;  //  the /add response todos as 
        // console.log(data.data);
        setTodos(todoData);

      } catch (error) {
        console.error("Error occurred while editing:", error);
      }
    } 
    


  return (
    
      <div id='wrapper'>
      {add && <Action text='Add' show={show} action={addTodo} />}

    {!add && 
        <div id="addButton" onClick={()=>{setAdd(prev => !prev)}}>
        <RiAddLargeFill />
      </div>
    }
    </div>

  )
}

export default Add