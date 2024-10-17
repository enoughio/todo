import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// Set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Use routes
app.use("/", todoRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));