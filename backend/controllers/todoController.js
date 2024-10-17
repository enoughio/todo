import db from "../config/dbConfig.js";

// Fetch all tasks
export const fetchData = async () => {
    try {
        const response = await db.query("SELECT * FROM todo ORDER BY task_id ASC");
        return response.rows;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// Add a new task
export const addTodo = async (todo) => {
    try {
        const response = await db.query("INSERT INTO todo (todo) VALUES ($1)", [todo]);
        return response.rowCount;
    } catch (error) {
        console.error("Error adding todo:", error);
        throw error;
    }
};

// Edit an existing task
export const editTodo = async (id, newTodo) => {
    try {
        const response = await db.query("UPDATE todo SET todo = $1 WHERE task_id = $2", [newTodo, id]);
        return response.rowCount;
    } catch (error) {
        console.error("Error editing todo:", error);
        throw error;
    }
};

// Delete a task
export const deleteTodo = async (id) => {
    try {
        const response = await db.query("DELETE FROM todo WHERE task_id = $1", [id]);
        return response.rowCount;
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    }
};
