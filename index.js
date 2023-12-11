import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();



app.use('/', (req, res) => {
    res.send("HOLA MUNDO");
});

const  PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
}); 