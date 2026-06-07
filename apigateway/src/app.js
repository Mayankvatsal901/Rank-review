const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());
// app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api gateway running");
});


app.use(
    "/api/business",
    createProxyMiddleware({
        target: process.env.BUSINESS_SERVICE_URL,
        changeOrigin: true,
        logLevel: "debug"
    })
);



app.use(
    "/api/review",
    createProxyMiddleware({
        target: process.env.REVIEW_SERVICE_URL,
        changeOrigin: true,
    })
    
);

app.use(
    "/api/ai",
    createProxyMiddleware({
        target: process.env.AI_SERVICE_URL,
        changeOrigin: true,

        
    })
);

app.use(
    "/api",
    createProxyMiddleware({
        target: "http://business-service:5001",
        changeOrigin: true,
    })
    
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});