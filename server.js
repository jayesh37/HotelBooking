const express = require("express");
const app = express();
const db = require('./db');
const port = process.env.PORT||5000;
const roomsRoute= require("./routes/roomsRoute");
const userRoute = require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')
app.use(express.json());

//Routes
app.use('/api/rooms',roomsRoute);
app.use('/api/users' , userRoute)
app.use('/api/bookings' , bookingsRoute)

app.listen(port, () => {
    console.log("Backend server is running!");
});