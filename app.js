require("dotenv").config();
require("./config/database").connect();

const User = require("./model/user");

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express(); 
app.use(express.json());


// Logic goes here
app.post("/register", (req, res) => {

});

app.post("/login", (req, res) => {

});

module.exports = app;