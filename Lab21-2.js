const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    enrollmentnumber: Number
});
const userModel = mongoose.model('Students', userSchema);

module.exports= userModel;