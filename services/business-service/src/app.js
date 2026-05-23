const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect=require("./config/db")

const app = express();

app.use(cors());
app.use(express.json());
connect();

app.get("/", (req, res) => {
    res.send("Business Service Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Business service running on ${PORT}`);
});