//Simulate a Data Base
const recipes = [{"name": "ham and cheese sandwich", "ingredients": "ham, cheese, bread", "description": "just a sandwich"}];

// Imports express from node_modules
const express = require('express');

// Create express server and store it in app constant
const app = express();

// Create a PORT constant that will hold a numeric
// value based on the current environment
const PORT = process.env.PORT || 5000;

// Set up middleware function to serve static assets from
// client/build directory, which contains optimized static files
app.use(express.static(__dirname + '/client/build'));

// API endpoints
// GET /recipes: will send back the local recipes array
app.get('/recipes', function(req, res) {
	console.log("Ping!")
	res.json(recipes);
});

// app will listen for incoming http requests on PORT
app.listen(PORT, () => console.log(`App listening on ${PORT}`))