import React, { useContext, useEffect, useState } from "react";
import Todo from "./todo/Todo";
import "./constainer.css";
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
  
  
  // useEffect(() => {
    //   console.log(todos);
    // }, [todos]);
    
    
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
    
    const [isDarktheam, toggelTheme] = useTheme();
    useEffect(() => {
      console.log("Theme changed:", isDarktheam ? "Dark" : "Light");
    }, [isDarktheam]);
  return (
      <div className={`container ${isDarktheam ? "bg-pink-200" : "bg-red-200"}`}>
      {todos.map((task, index) => {
        return <Todo task={task} handelDeletion={handelDeletion} key={index} />;
      })}
    </div>

    
  );
};

export default Container;
