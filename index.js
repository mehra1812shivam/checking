const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mongoose = require('mongoose');
const multer=require('multer');
const jimp=require('jimp');
const { read } = require("jimp");
const { info } = require("console");
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());
const creating=require('./checking/APIroutes/creating')
app.use(multer)
app.use(info)
app.use(creating)


app.listen(5000,(req,res) =>{
    console.log('Server is running at 5000')
})
