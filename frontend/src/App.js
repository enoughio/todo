import React, { useContext, useState } from 'react';
import axios, { Axios } from 'axios';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/todo/Edit.jsx';
import { todoContext } from './context/getTodo.jsx';
import Container from './components/Container.jsx';
import Add from './components/Add.jsx';
import Todo from './components/todo/Todo.jsx';



const App = () => {


  return (
    <div className='app'>
      <Container />


      <Add />

      

    </div>
  )
}

export default App