import React, { useContext } from 'react'
import "./todo.css"
import Edit from './Edit';
import{ Link }from 'react-router-dom'

function  Todo() {

    const showEdit = ()=>{
       
    }

  return (
    <div className='weapper'>

        <form id='todo' action="">

              <Link to='/edit'  id='button' >edit</Link>
             
              <div className='text'>
                todo is some big todo item Lorem 
              </div>
              <input id='Cbox' type="checkbox"/>

        </form>

    </div>
  )
}

export default Todo;