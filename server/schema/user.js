const mongoose = require('mongoose');


// Get the Schema object from Mongoose
const Schema = mongoose.Schema;


//create a schema or like structure in which data should be stored
const userSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//saves the mongoose schema basically creates a collection to store data
const User = mongoose.model('User', userSchema);

module.exports = User;