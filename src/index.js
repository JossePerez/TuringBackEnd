const express = require('express');

const app = express();
const port= process.env.port || 9000;

/*Routes */
app.get("/", (req, res)=> {
    res.send("Welcome to my API");
}); 

app.listen(port, () => console.log('Servidor listo en el puerto: ', port));