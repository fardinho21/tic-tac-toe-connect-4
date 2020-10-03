//express app for backend
const express = require("express");
const app = express();

app.use("/api/login", (req, res, next) => {
    res.json();
});


module.exports = app;
