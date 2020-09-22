// category.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let loging = new Schema({
    
    username: {
        required:true,
        unique:true,
        type: String
    },
    password: {
        required:true,
        type: String
    },

    role: {
        required:true,
        type: String
    },
    email: {
        required:true,
        unique:true,
        type:String
    }
}, {
    collection: 'login'
});

module.exports = mongoose.model('loging', loging);
