import express from "express";


const app = express();

app.use('/', (req, res) => {
    res.send("HOLA MUNDO");
});


app.listen(4000, () => {
    console.log("Server running on the port 4000");
});