import React, { useContext, useEffect, useState } from "react";
import Todo from "./todo/Todo";
import "./Container.css";
import instance from "../utils/Api";
import { TodoContext } from "../context/TodoContext";
import { useTheme } from "../context/TheamContext";

const Container = () => {
  const [todos, setTodos] = useContext(TodoContext);   // fast reflection on other components

  useEffect(() => {
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [todos]);

    
    // perform delete operation  passing it as props
    const handelDeletion = async (id) => {
      console.log(id);
       
      {
        try {
          await instance.post("/delete/" + id); // if deletion is successful
          setTodos(todos.filter((task) => task.task_id !== id));
        } catch (error) {
          console.error("Error occurred while Deleting:", error);
        }
      };
      
    }


  return (
      <div className={`container`}>
      {todos.map((task, index) => {
        return <Todo task={task} handelDeletion={handelDeletion} key={index} />;
      })}
    </div>

    
  );
};

export default Container;
