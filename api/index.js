import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

import cors from 'cors';  
dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
//   console.log(process.env.MONGO);


const app = express();
const PORT = 3000;
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend requests
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  credentials: true, // Allow cookies and authentication headers
}));

app.use(express.json());
app.use(cookieParser());


// Define a route for the root URL

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use('/api/user',userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({ success: false, statusCode, message });
});