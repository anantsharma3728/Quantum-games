const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://AnantS:anant3728@shapeai.zpxwr.mongodb.net/QIntern21?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfull connection");
  })
  .catch((e) => {
    console.log(`error is ${e}`);
  });
