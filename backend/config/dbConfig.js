import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Use connectionString if provided (for hosted database), else fallback to individual parameters
const dbConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Required for some hosted services like Heroku
      },
    }
  : {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 5432,
    };

const db = new pg.Client(dbConfig);

db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error('Connection failed', err.stack);
    process.exit(1);
  });

export default db;
