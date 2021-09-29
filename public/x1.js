const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static(__dirname + "/../public"));

// fetch("")
// .then((result) => result.json())
// .then((data) => console.log(data));

app.listen(3030, function(){
    console.log("server is live");
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index1.html')
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/team.html')
})
