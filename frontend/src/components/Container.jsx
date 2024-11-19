import React, { useContext } from "react";
import Todo from "./todo/Todo";
// import "./container.css";
import { todoContext } from "../context/getTodo";

const Container = () => {
  const [todos, setTodos] = useContext(todoContext);

  console.log(todos)
  const handleDeletion = (id) => {
    // Update global todos by filtering out the task with the given ID
    setTodos((prevTodos) => prevTodos.filter((task) => task.task_id !== id));
  };

  return (
    <div className="container">
        {Array.isArray(todos) && todos.length > 0 ? (
            todos.map((task) => (
                <Todo task={task} handleDeletion={handleDeletion} key={task.task_id} />
            ))
        ) : (
            <p>No todos available</p> // Fallback UI
        )}
    </div>
  );
};

export default Container;



/*
import React, { useContext, useEffect, useState } from "react";
import Todo from "./todo/Todo";
// import "./container.css";
import { todoContext } from "../context/getTodo";

const Container = () => {
  const [todos] = useContext(todoContext);
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // Synchronize tasks with the todos context whenever todos change
    setTasks(todos);
  }, [todos]);

  const handleDeletion = (id) => {
    // Filter out the deleted task by its ID
    setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== id));
  };

  return (
    <div className="container">
      {tasks.map((task) => (
        <Todo task={task} handleDeletion={handleDeletion} key={task.task_id} />
      ))}
    </div>
  );
};

export default Container;



*/