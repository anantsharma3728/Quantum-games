require("dotenv").config();



const mongoose= require("mongoose");

mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => console.log("connection established"));

const a= 123
for(let i=0; i<a; i++) {
   block = document.getElementById("i")
   
}
