const express = require("express");
const app = express();
const cors = require("cors");
const db = require ("./db/connection");
const Card = require("./models/Card");
const xyz = require("./models/xyz");
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5500",
  })
);

const port = process.env.PORT || 8080;

const isNullOrUndefined = (val) => val === null || val === undefined;

app.get("/getQuantumGames", async (req,res) => {
  console.log("API HIT")
  const allGames = await xyz.find();
  console.log("AllGames", allGames)
})

app.listen(port, () => {
  console.log(`connection established at ${port}`);
});
