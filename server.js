require("dotenv").config();

const mongoose= require("mongoose");
const express= require("express");
const app = express();
const ejs = require("ejs");
const fs= require('fs');
const Http  = require("http");
app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log("server is live");
})

mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => console.log("connection established"));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')    
})

