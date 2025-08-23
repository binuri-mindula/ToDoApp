import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import path from 'path';
import dotenv from 'dotenv';
import ToDoRoute from './src/routes/ToDoRoute.js';
import { connectDB } from './src/config/dbConnection.js';
import Task from './src/models/ToDoModel.js';

dotenv.config(); 
const app = express();

app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
const port = process.env.PORT || 5000;


const frontendURL = process.env.DOMAIN_URL;
app.use(cors({
  origin: frontendURL || '*'
}));

// Connect DB and sync
connectDB();

app.use('/api/tasks',ToDoRoute);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})