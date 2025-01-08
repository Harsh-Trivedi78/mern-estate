import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connected to db");
    
}).catch((err) =>{
    console.log(err);
    
})



const app = express();
const PORT = 3000;

// Define a route for the root URL

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/api/user",userRouter)