
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


const fetchData = async () => {

}



// set root route
app.get('/',  async(req, res) => {
    
    // const data = await fetchData();
    let response = []; 

    try {
         response = await db.query("select * from todo");
        let data = [];
        response.rows.forEach( (element) => {
            data.push(element);
        });
        
        // console.log(data[0]);
        res.render('index.ejs', {
            data,
        });

    } catch (error) {

        console.log("error in fatching data")
        res.render('index.ejs');
    }
})


app.post("/add", async (req,res) => {

    try {
          const response = await db.query("INSERT INTO todo (todo) VALUES ($1);", [req.body.todo] );
          console.log(response.rows)
        //    res.render('index.ejs');
        res.redirect("/");

   } catch (error) {

       console.log("error in fatching data")
       res.render('index.ejs');
   }
})



let data = [];
//edit
app.patch("/edit/:id", async(req,res) => {
    // inmsert todo to database
    const id = req.params.id;
    const todo = req.body.todo;

    try {
        const response = await db.query("UPDATE todo SET todo = $1 WHERE task_id = $1", [todo, id]);
        //update localy
        const indx = data.findInd((todo) => todo.task_id == id)
        data[indx].todo = todo;
        
    } catch (error) {
        
    }

    console.log("called edit route")
    res.redirect("/");
})


//done
app.delete("/done", (req,res) => {
    // delete todo from DB 
    console.log("called done route")
    res.redirect("/");
})



app.listen(PORT, () => console.log("server running at http://localhost:3000"));