import React, { useRef } from 'react'
import './edit.css'

function Edit({showEdit, value}) {

  const todo = useRef()
  console.log(value)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.current.value);
    showEdit()
  }

  // let data = [

  //     {todo_id : 1, todo : 'do nothing'},
  //     {todo_id : 2, todo : 'do nothing'},
  //     {todo_id : 3, todo : 'do nothing'},
  //     {todo_id : 4, todo : 'do nothing'},
  //     {todo_id : 5, todo : 'do nothing'}

  //   ]


  return (
    // <div id='editCont' >
      <form id='editForm' onSubmit={(e) => handleSubmit(e)}  >
              <input ref={todo} type="text" id='textBox' name='todo' defaultValue={value} />
              <button type='submit' onSubmit={()=>{handleSubmit()}} >edit</button>
      </form>
    // </div>
  )
}

export default Edit