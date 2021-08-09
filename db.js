const mongoose= require('mongoose');
const mongoURL="mongodb+srv://jayesh:jayesh@cluster0.4xpbd.mongodb.net/mern-rooms"
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true  
}).catch((err)=>console.log('err', err))
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Database Connected')
}).catch(err => {
    console.log('Database Connection failed')
})

module.exports = mongoose;