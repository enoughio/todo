import React, { useContext } from "react";
import Todo from "./todo/Todo";
import "./constainer.css";
import { todoContext } from "../context/getTodo";

const Container = () => {
  const [todos, setTodos] = useContext(todoContext);
  
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo task={todo} key={index} />;
      })}
    </div>
  );
};

export default Container;
