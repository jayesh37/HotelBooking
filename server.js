const express = require("express");
const app = express();
const dbConfig = require('./db');
const roomsRoute= require("./routes/roomsRoute");
const port = process.env.PORT||7000;

//Routes
app.use('/api/rooms',roomsRoute);

app.listen(port, () => {
    console.log("Backend server is running!");
});