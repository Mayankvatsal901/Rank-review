const express = require("express");
const cors = require("cors");
require("dotenv").config();

const passport = require("passport");
const session = require("express-session");

const connect = require("./config/db");

// Load Google Strategy
require("./config/passport");


const BusinessRouter = require("./routes/business");
const Payment = require("./routes/payment");

const app = express();

app.use(cors());

app.use(express.json());

connect();

// Session Middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET || "rankreview",
        resave: false,
        saveUninitialized: false
    })
);
console.log("BUSINESS ROUTES LOADED");
app.post("/test", (req, res) => {
  res.json({ message: "test works" });
});

// Passport Middleware
app.use(passport.initialize());

app.use("/", BusinessRouter);

app.use("/payment", Payment);

app.get("/", (req, res) => {
    res.send("Business Service Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Business service running on ${PORT}`);
});