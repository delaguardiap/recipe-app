//Simulate a Data Base
const recipes = [{"name": "ham and cheese sandwich", "ingredients": "ham, cheese, bread", "description": "just a sandwich"}];

// Imports express from node_modules
const express = require('express');

// Imports bodyParser to create a body property in the req object
// of the request handler when receiving POST requests
const bodyParser = require('body-parser');

// Create express server and store it in app constant
const app = express();

// Create a PORT constant that will hold a numeric
// value based on the current environment
const PORT = process.env.PORT || 5000;

// Set up middleware function to serve static assets from
// client/build directory, which contains optimized static files
app.use(express.static(__dirname + '/client/build'));

// Safety feature to only allow string and array keys encoding (not important for you to know the details.)
app.use(bodyParser.urlencoded({ extended: false }))

// Use body-parser as a middleware function
app.use(bodyParser.json())

// API endpoints
// GET /recipes: will send back the local recipes array
app.get('/recipes', function(req, res) {
	res.json(recipes);
});

// POST /recipes: will create a new recipe, store in the recipe array, and send back said array
app.post('/recipes', function(req, res) {
	recipes.push({name: req.body.name, ingredients: req.body.ingredients, description: req.body.description});
	res.json(recipes);
});

// app will listen for incoming http requests on PORT
app.listen(PORT, () => console.log(`App listening on ${PORT}`));