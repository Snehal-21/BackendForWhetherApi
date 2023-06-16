import mongoose from "mongoose";
import morgan from "morgan";
import express from "express";
import router from "./routes/userroutes.js";

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v2',router);


mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/WhetherDB?retryWrites=true&w=majority')
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err,"db error"));

app.listen(8000,()=>console.log("Working on PORT 8000"));