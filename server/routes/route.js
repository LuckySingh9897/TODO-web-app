import express from "express";


import { addtodo, getallTodos, toggleTodoDone } from "../controller/todocontroller.js";


 const route = express.Router();

 route.post('/todos',addtodo);

 route.get('/todos',getallTodos);

 route.get('/todos/:id',toggleTodoDone);

 export default route;