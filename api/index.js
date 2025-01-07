import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connected to db");
    
}).catch((err) =>{
    console.log(err);
    
})



const app = express();
const PORT = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
