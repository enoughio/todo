


export const Home = async (req, res) => {
    try {
        const data = await fetchData();  // Fetch data from the database
        res.render('index.ejs', {
            data,  // Pass the fetched data to the template
        });
    } catch (error) {
        console.error("Error fetching data in the routes handler:", error);
        res.render('index.ejs', {
            data: [],  // Pass an empty array in case of error
            // error: "Error fetching data. Please try again later.", // Optional error message
        });
    }
}


export const add = async (req,res) => {

    try {
        //adding data
        const todo = req.body.todo;
       
        console.log("adding data")
          const response = await db.query("INSERT INTO todo (todo) VALUES ($1);", [todo] );
          
          if (response.rowCount === 0) {
            // If no rows were updated, return a 404 error
            return res.status(404).send("Todo not found");
           }
        
      //resending data       -----------     for now
    //   const data = await fetchData();  // Fetch data from the database
      res.redirect("/");
    
   } catch (error) {
       console.log("error in fatching data")
       return res.status(404).send("error in adding tasks");
   }
}


const edit  = async(req,res) => {


    // inmsert todo to database
    console.log(req.body)
    try {
        const id = req.body.id;
        const todo = req.body.newTodo;
        console.log("called edit routes")
        
        const response = await db.query(
            "UPDATE todo SET todo = $1 WHERE task_id = $2", 
            [todo, id]
        );

        if (response.rowCount === 0) {
            // If no rows were updated, return a 404 error
            return res.status(404).send("Todo not updated");
        }
        res.redirect("/");
    } catch (error) {
        console.log("error in fatching data at edit")
        res.redirect("/");
    }

}


export  const remove = async (req, res) => {

    try {
        // Get the id from request parameters
        const id = req.params.id;

        // Execute the query to delete the task from the database
        const response = await db.query("DELETE FROM todo WHERE task_id = $1", [id]);

        // Check if any rows were affected (i.e., if a todo was deleted)
        if (response.rowCount === 0) {
            // If no rows were deleted, return a 404 error
            return res.status(404).send("Todo not found");
        }

        // Log success message and redirect to the homepage
        console.log(`Todo with id ${id} deleted successfully`);
        res.redirect("/");  // Redirect back to the homepage or a relevant routes
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error deleting todo:", error);
        res.status(500).send("Internal Server Error");
    }
}