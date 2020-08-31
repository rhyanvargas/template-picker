const express = require("express");
const app = express();
const axios = require("axios").default;
require("dotenv").config();

//MIDDLEWARE (authentication etc..)

// UTILITIES
const hostname = process.env.HOST;
const port = process.env.PORT;
let un = process.env.UN;
let pw = process.env.PW;
let concat = un + ":" + pw;
let base = Buffer.from(concat).toString("base64");


// GET DATA
const config = {
    baseURL: "https://api.duda.co/api/",
    url: "/sites/multiscreen/templates",
	method: "get",
	timeout: 1000,
	headers: { 'Authorization': 'Basic ' + base },
};

//ROUTES
 

app.get("/", (req,res) => {
    res.send('You are HOME!');
});

app.get("/templates", (req, res) => {
	res.send(axios(config)
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	})
	.then(function () {
		// always executed
	}));
});

//LISTEN TO SERVER
app.listen(3000, console.log("We are listening on: http://" + hostname + ":"+ port));
