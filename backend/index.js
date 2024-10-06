
import express, { response } from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";

//set express server
const app = express();
const PORT =  3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// setup database
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'aniket',
    port: 5432,
})
db.connect()
.then(()=>{
        console.log("Connected to PostgreSQL");
    }).catch((err) => {
            console.error('Connection failed', err.stack)
            process.exit(1)  // Exit the process with an error code
        })
        
// set middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(express.json());


// Function to fetch data from the database
const fetchData = async () => {
    try {
        const response = await db.query("SELECT * FROM todo ORDER BY task_id ASC");
        return response.rows;  // Return the fetched rows
    } catch (error) {
        console.error("Error fetching data from the database:", error);
        throw error;  // Throw the error to be handled in the calling function
    }
};

// Set root route
app.get('/', async (req, res) => {
    try {
        const data = await fetchData();  // Fetch data from the database
        res.render('index.ejs', {
            data,  // Pass the fetched data to the template
        });
    } catch (error) {
        console.error("Error fetching data in the route handler:", error);
        res.render('index.ejs', {
            data: [],  // Pass an empty array in case of error
            // error: "Error fetching data. Please try again later.", // Optional error message
        });
    }
});


app.post("/add", async (req,res) => {

    try {
        //adding data
        console.log("adding data")
          const response = await db.query("INSERT INTO todo (todo) VALUES ($1);", [req.body.todo] );
          console.log(response);

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
})



//edit
app.patch("/edit/:id", async(req,res) => {
    // inmsert todo to database
    try {
        const id = req.params.id;
        const todo = req.body.todo;
        console.log("called edit route")
        const response = await db.query("UPDATE todo SET todo = $1 WHERE task_id = $1", [todo, id]);
        if (response.rowCount === 0) {
            // If no rows were updated, return a 404 error
            return res.status(404).send("Todo not updated");
        }
        res.redirect("/");
    } catch (error) {
        console.log("error in fatching data")
        res.redirect("/");
    }

})



//done
app.post("/done/:id", async (req, res) => {
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
        res.redirect("/");  // Redirect back to the homepage or a relevant route
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error deleting todo:", error);
        res.status(500).send("Internal Server Error");
    }
});




app.listen(PORT, () => console.log("server running at http://localhost:3000"));