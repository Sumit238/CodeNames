require('dotenv').config()
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const expressSessions = require("express-session");
// const flash = require("connect-flash");
// const MongoStore = require('connect-mongo')

const app = express()
const port = 5000;

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
// app.use(mongoSanitize());




app.get('/api', (req, res) => res.json({"users":["Hiii","Aman","GG","user5","Hiii","Aman","GG","user5","Hiii","Aman","GG","user5",]}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))