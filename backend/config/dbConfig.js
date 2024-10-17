import pg from 'pg'

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

export default db;