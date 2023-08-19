const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port= process.env.port || 9000;

/*Routes */
app.get("/", (req, res)=> {
    res.send("Welcome to my API");
}); 

//MongoDB conection 
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to mongoDB Atlas'))
    .catch((error)=> console.error(error));    

app.listen(port, () => console.log('Servidor listo en el puerto: ', port));