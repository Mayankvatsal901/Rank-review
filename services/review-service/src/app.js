const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./congif/db");
const ReviewRouter=require("./routes/review")


const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use("/",ReviewRouter);

app.get("/", (req, res) => {
    res.send("Business Service Running");
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Business service running on ${PORT}`);
});