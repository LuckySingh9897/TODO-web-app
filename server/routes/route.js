import express from "express";


import { addtodo, getallTodos } from "../controller/todocontroller.js";

 const route = express.Router();

 route.post('/todos',addtodo)

 route.get('/todos',getallTodos)

 export default route;