import React from "react";
import Todo from "./todo/Todo";
import "./constainer.css";
import Edit from "./todo/Edit";
import { IoMdAddCircleOutline } from "react-icons/io";


const Container = () => {
  return (
    <div className="container">
      {/* <Edit /> */}
      <Todo />
      <Todo />
      <Todo />

      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      
      <div id="addButton"><IoMdAddCircleOutline /></div>
    </div>
  );
};

export default Container;
