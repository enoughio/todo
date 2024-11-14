import React, { useContext, useEffect, useState } from "react";
import Todo from "./todo/Todo";
import "./constainer.css";
import { todoContext } from "../context/getTodo";

const Container = () => {
  const [todos, setTodos] = useContext(todoContext);
  const [tasks, setTask] = useState(todos);   // so that i can handel deletion of todo efficently
  
  useEffect(() => {
    if (todos && todos.length > 0) {
      setTask(todos);
    }
  }, [todos]);
  
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handelDeletion = (id) => {
    console.log(id);
    setTask(tasks.filter((task) => task.task_id !== id));
  }

  return (
    <div className="container">
      {tasks.map((task, index) => {
        return <Todo task={task} handelDeletion={handelDeletion} key={index} />;
      })}
    </div>

    
  );
};

export default Container;
