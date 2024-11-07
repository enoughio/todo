import React, { useState } from "react";
import Todo from "./todo/Todo";
import "./constainer.css";
import Edit from "./todo/Edit";


const Container = () => {
  // GET ALL TODO THROUGH CONTEXT AND SET TO ALL TODOS

  const [todos, setTodos] = useState([
    "Todo item 1: Finish reading the book",
    "Todo item 2: Go for a walk",
    "Todo item 3: Complete React project",
    "Todo item 4: Call a friend",
    "Todo item 5: Grocery shopping",
    "Todo item 6: Prepare dinner",
    "Todo item 7: Watch a documentary",
    "Todo item 8: Clean the house",
    "Todo item 9: Organize files",
    "Todo item 10: Plan the next day",
  ]);


  

  return (
    <div className="container">
     
      {todos.map((todo, index) => {
        return <Todo todoText={todo} key={index} />
      })}

{/* 
<div id="addButton">
        <IoMdAddCircleOutline />
      </div> */}


    </div>
  );
};

export default Container;
