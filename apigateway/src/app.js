const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).send("UP");
});

app.get("/", (req, res) => {
    res.send("Api gateway running");
});

// Google OAuth - direct browser redirect, cannot be proxied
app.get("/api/business/google", (req, res) => {
    res.redirect(`${process.env.BUSINESS_SERVICE_URL}/google`);
});

app.get("/api/business/google/callback", (req, res) => {
    res.redirect(`${process.env.BUSINESS_SERVICE_URL}/google/callback?${new URLSearchParams(req.query)}`);
});

app.use(
    "/api/business",
    createProxyMiddleware({
        target: process.env.BUSINESS_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: { "^/api/business": "" },
        logLevel: "debug"
        // NO followRedirects
    })
);

app.use(
    "/api/review",
    createProxyMiddleware({
        target: process.env.REVIEW_SERVICE_URL,
        pathRewrite: { "^/api/review": "" },
        changeOrigin: true,
    })
);

app.use(
    "/api/ai",
    createProxyMiddleware({
        target: process.env.AI_SERVICE_URL,
        pathRewrite: { "^/api/ai": "" },
        changeOrigin: true,
    })
);
app.use(
    "/api/payment",
    createProxyMiddleware({
        target: process.env.BUSINESS_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: { "^/api/payment": "/payment" },
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});