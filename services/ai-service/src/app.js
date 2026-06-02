const express = require("express");
const cors = require("cors");
require("dotenv").config();

const AIRouter = require("./routes/ai");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Service Running");
});


app.use("/", AIRouter);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`AI service running on ${PORT}`);
});