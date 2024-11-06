import React, { createContext, useEffect, useState } from 'react';
import Api from '../utils/Api';

export const todoContext = createContext();

const Context = (props) => {
    const [todo, settodo] = useState([]); 

    const getTodos = async () => {
        try {
            const { data } = await Api.get('/');
            // console.log(data.todos);
            settodo(data.todos); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <todoContext.Provider value={[todo, settodo]}>
            {props.children} 
        </todoContext.Provider>
    );
};

export default Context;
