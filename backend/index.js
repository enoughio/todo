
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



app.use('/todo', )

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




app.listen(PORT, () => console.log("server running at http://localhost:3000"));