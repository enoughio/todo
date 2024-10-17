import express from "express";
import { add, edit, remove } from "../controllers/data.controllers.js"
 
const routes = express.Router();

//hoem page
// routes.get('/', Home);

//add todo
routes.post("/add", add);

//edit todo
routes.post("/edit", edit)

//delete todo
routes.post("/done/:id", remove);

export default routes;