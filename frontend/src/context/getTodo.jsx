import React, { createContext, useEffect, useState } from 'react';
import Api from '../utils/Api';

export const todoContext = createContext();

const Context = (props) => {
    const [todos, setTodos] = useState([]); 

    const getTodos = async () => {
        try {
            const { data } = await Api.get('/');
            // console.log(data.todos);
            setTodos(data.todos); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <todoContext.Provider value={[todos, setTodos]}>
            {props.children} 
        </todoContext.Provider>
    );
};

export default Context;
