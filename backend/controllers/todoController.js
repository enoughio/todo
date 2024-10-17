import db from "../config/dbConfig.js";
import { fetchData } from "../helpers/fetchData.js";


// Fetch all tasks
export const getTodos = async (req, res) => {
    try {
        const todos = await fetchData();  // Call the helper function to fetch data
       return res.status(200).json({ data: todos });
    } catch (error) {
       return res.status(500).json({ error: error.message });
    }
};


// Add a new task
export const addTodo = async (req, res) => {    // directly accessing requested body making it independent
    try {
        const todo = req.body.todo;

        if(todo.length == 0){
           return res.status(400).json({ error: "plese enter something" });  // also done in frontend
        }

        const response = await db.query("INSERT INTO todo (todo) VALUES ($1)", [todo]);
        
        console.trace("Trace log: Something happened here.");
		if(response.rowCount == 0){
           return res.status(400).json({ error: "todo cannot be added" }); 
        }
        
        // frtching updated data
        const todos = await fetchData();
       return res.status(200).json({ data: todos });

    } catch (error) {
        console.error("Error adding todo:", error);
       return res.status(500).json({ error: error.message });
    }
};

// Edit an existing task
export const editTodo = async (req, res) => {
    try {
        const { id, newTodo } = req.body;
        if(newTodo.length == 0){
           return res.status(400).json({ error: "todo cannot be updated" }); 
        }
        const response = await db.query("UPDATE todo SET todo = $1 WHERE task_id = $2", [newTodo, id]);
        console.trace("updating", response.rows);


		if(response.rowCount == 0){
           return res.status(400).json({ error: "todo cannot be updated" }); 
        }
        
        // frtching updated data
        const todos = await fetchData();
       return res.status(200).json({ data: todos });

    } catch (error) {
        console.error("Error editing todo:", error);
       return res.status(500).json({error: "Error editing task"});  // Send a server error stat
    }
};

// Delete a task
export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await db.query("DELETE FROM todo WHERE task_id = $1", [id]);
        // return response.rowCount;
        if(response.rowCount == 0){
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
