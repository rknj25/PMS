import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import proRoutes from './routes/proRoutes.js';
dotenv.config();

const port=process.env.port

const app=express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth/',userRoutes)
app.use('/api/product/',proRoutes)

dbConnect();
app.listen(port,()=>{
    console.log(`server started at:- ${port}`);
    
})