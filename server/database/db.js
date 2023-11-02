import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;


const connection = ()=>{
     
    const MONGODB_URL=`mongodb+srv://${username}:${password}@mern-todo.5ak50zu.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL,{useNewUrlParser : true});
    mongoose.connection.on('connected',()=>{
        console.log("Database successfully connected");

    })
    mongoose.connection.on('disconnected',()=>{
        console.log("Database disconnected");

    })
    mongoose.connection.on('error',()=>{
        console.log("Error while connecting to database");

    })
}

export default connection;