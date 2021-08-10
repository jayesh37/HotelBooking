const mongoose= require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const mongoURL=process.env.MONGO_URL;
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