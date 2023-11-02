 
 import express from "express"
 import connection from './database/db.js'
 import Routes from './routes/route.js'

 import cors from 'cors';

 const app= express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',Routes);
 const PORT= 8000;
 connection();

 app.listen(PORT, ()=>console.log(`Server is running on port on ${PORT} `));
 