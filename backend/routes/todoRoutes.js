import express from "express";
// also  can import middelewhere for auth
import { fetchData, addTodo, editTodo, deleteTodo } from "../controllers/todoController.js";

// Create a new router instance
const router = express.Router();


//aleernative way
// router.get('/', fetchData)
// router.post('/add', addTodo)
// router.post('/edit', editTodo)
// router.post('/delete', deleteTodo);


// Root route: Display the home page with all tasks
router.get("/", async (req, res) => {
    try {
        // Fetch data from the controller and render it on the page
        const data = await fetchData();
        res.render("index.ejs", { data });  // Pass data to the index view
    } catch (error) {
        res.render("index.ejs", { data: [] });  // If there's an error, render with an empty array
    }
});

// Route to add a new task
router.post("/add", async (req, res) => {
    try {
        const todo = req.body.todo;  // Get the todo from the request body
        const result = await addTodo(todo);  // Call the controller to add the todo
        if (result === 0) {
            return res.status(404).send("Todo not found");  // Handle case where no rows are inserted
        }
        res.redirect("/");  // Redirect back to the home page
    } catch (error) {
        return res.status(500).send("Error adding task");  // Send a server error status code
    }
});

// Route to edit an existing task
router.post("/edit", async (req, res) => {
    try {
        const { id, newTodo } = req.body;  // Get the task ID and new todo from the request body
        const result = await editTodo(id, newTodo);  // Call the controller to edit the task
        if (result === 0) {
            return res.status(404).send("Todo not updated");  // Handle case where no rows are updated
        }
        res.redirect("/");  // Redirect back to the home page
    } catch (error) {
        res.status(500).send("Error editing task");  // Send a server error status 
    }
});

// Route to delete a task
router.post("/done/:id", async (req, res) => {
    try {
        const id = req.params.id;  // Get the task ID from the request parameters
        const result = await deleteTodo(id);  // Call the controller to delete the task
        if (result === 0) {
            return res.status(404).send("Todo not found");  // Handle case where no rows are deleted
        }
        res.redirect("/");  // Redirect back to the home page
    } catch (error) {
        res.status(500).send("Error deleting task");  // Send a server error status code
    }
});

// Export the router so it can be used in the main application
export default router;
