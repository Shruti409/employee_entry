

const mongoose = require('mongoose');
require('dotenv').config();
//require('dotenv').config();
//const DB=process.env.MONGO_URL;
const DB = `mongodb+srv://shruti:shrutivohra@cluster0.lfuuc.mongodb.net/employee_entry?retryWrites=true&w=majority`;
mongoose.connect(DB,{
    useNewUrlParser: true,
    //useCreateIndex : true,
    useUnifiedTopology: true,
   // useFindAndModify:false
}).then(()=>{
    console.log("Connection Sucessful");
}).catch((err)=>{
    console.log(err.message);
})

const alertSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        trim: true,
        required: true,
    },
    LastName: {
        type: String,
        trim: true,
        required: true,
    },
    Gender: {
        type: String,
        trim: true,
        required: true,
    },
    Email: {
        type: String,
        trim: true,
        required: true,
    },
    PhoneNumber: Number,
    Status: String,
    Date: {
        type: Date,
        default: Date.now
    },

})


const Alert = new mongoose.model('Alert', alertSchema);


module.exports = Alert;