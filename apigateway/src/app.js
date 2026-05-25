const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Api gateway running");
});

app.use(
    "/api/business",
    createProxyMiddleware({
        target: "http://localhost:5001",
        changeOrigin: true,
    })
    
);
app.use(
    "/api/review",
    createProxyMiddleware({
        target: "http://localhost:5002",
        changeOrigin: true,
    })
    
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});