import db from "../config/dbConfig.js";
import { fetchData } from "../helpers/fetchData.js";


// Fetch all tasks
export const getTodos = async (req, res) => {
    try {
        const todos = await fetchData();  // Call the helper function to fetch data
        console.log(todos)  // this is an array of objects
        
        return res.status(200).json( {todos} );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Add a new task
export const addTodo = async (req, res) => {    // directly accessing requested body making it independent

    try {
        const todo = req.body.todo;

        // if (Object.keys(req.body).length === 0) {
        //     // Handle the case of an empty request body
        //     console.log("Empty request body received");
        //     throw new Error("cannot add a empty task");
        // }

        if (!req.body.todo || req.body.todo.trim().length === 0) {
            return res.status(400).json({ error: "Please enter something valid." });
        }
        

        if (todo.length == 0) {
            return res.status(400).json({ error: "plese enter something" });  // also done in frontend
        }

        
        const response = await db.query(
            "INSERT INTO todo (todo) VALUES ($1) RETURNING *", 
            [todo.trim()]
        )
        
        if (response.rowCount === 0) {
            console.trace("Trace log: Something happened here.");
            return res.status(400).json({ error: "Todo could not be added." });
        }
        
        const newTodo = response.rows[0]; // The newly added todo
        

        // frtching updated data
        const todos = await fetchData();  // Call the helper function to fetch data
        console.log(todos)  // this is an array of objects
        
        return res.status(200).json( {todos} );

    } catch (error) {
        console.error("Error adding todo:", error.stack); // Detailed error stack
        return res.status(500).json({ error: "An internal server error occurred. Please try again later." });
    }
    
};

// Edit an existing task
export const editTodo = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            // Handle the case of an empty request body
            console.log("Empty request body received");
            return res.status(200).json({ message: "Empty request processed" });
        }

        const { id, newTodo } = req.body;
        if (newTodo.length == 0) {
            return res.status(400).json({ error: "todo cannot be updated" });
        }
        const response = await db.query("UPDATE todo SET todo = $1 WHERE task_id = $2", [newTodo, id]);
        console.trace("updating", response.rows);


        if (response.rowCount == 0) {
            return res.status(400).json({ error: "todo cannot be updated" });
        }

        // frtching updated data
        const todos = await fetchData();
        return res.status(200).json({ data: todos });

    } catch (error) {
        console.error("Error editing todo:", error);
        return res.status(500).json({ error: "Error editing task" });  // Send a server error stat
    }
};

// Delete a task
export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await db.query("DELETE FROM todo WHERE task_id = $1", [id]);
        // return response.rowCount;
        if (response.rowCount == 0) {
            console.error("cannot delete");
            return res.status(404).json({ error: "todo not found" });
        }

        // frtching updated data
        const todos = await fetchData();
        return res.status(200).json({ data: todos, message: "well done" });

    } catch (error) {
        console.error("Error deleting todo:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
