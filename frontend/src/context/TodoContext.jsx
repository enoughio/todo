import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/Api";

export const TodoContext = createContext();

const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);

    const fetchTodo = async () => {
        try {
            const { data } = await instance.get("/");
            setTodos(data.todos); // Assuming `data.todos` contains the array of todos
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
