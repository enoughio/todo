import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/Api";

export const todoContext = createContext();

const Context = (props) => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            
            const {data} = await instance.get("/");
            setTodos(data.todos); 

        } catch (error) {
            console.error("Error fetching todos:", error);
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
