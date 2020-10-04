
//express app for backend
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const app = express();

mongoose.connect("mongodb+srv://fardinho:123asd@cluster0.oqizr.mongodb.net/TTTC4db?retryWrites=true&w=majority")
.then(() => {
    console.log("connected to database")
})
.catch(error => {
    console.log(error)
})

app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});

//App
app.use("/api/login", usersRoutes);

module.exports = app;
