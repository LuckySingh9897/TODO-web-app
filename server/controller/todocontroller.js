
import Todo from "../model/Todo.js";

export const addtodo=async(request,response)=>{

    try{
    const newTodo= await Todo.create({
        data: request.body.data,
        createdAt : Date.now()
    })

    await newTodo.save();
    return response.status(200).json(newTodo);
}
catch(error){
    return response.status(500).json(error.message);
}

    //console.log(request.body);
}


export const getallTodos=async(request,response)=>{

    try{
   
  const todos=await Todo.find({}).sort({'createdAt':-1});
               
    return response.status(200).json(todos);
}
catch(error){
    return response.status(500).json(error.message);
}

    //console.log(request.body);
}
