const mongoose= require('mongoose');
var mongoURL='mongodb+srv://jayesh:jayesh@cluster0.4xpbd.mongodb.net/test'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var connection= mongoose.connection;

connection.on('err',()=>{
    console.log('Mongo Connection Failed');
})

connection.on('connected',()=>{
    console.log("Mongo Connection Success");
})

module.exports = mongoose;