// Import React as a dependency in order to be able
// to use React
import React from 'react';
// Import axios as an http library
import axios from 'axios';
// Import Recipes and RecipeForm components
import Recipes from './Recipes';
import RecipeForm from './RecipeForm';

// Create a component named App that extends the React.Component class
class App extends React.Component {
	//constructor method that will set up our initial state
	constructor() {
		//Always use super inside of the constructor.
		super();
		//The state gets initialized with 2 different keys. recipes and currentRecipe
		this.state = {
			recipes: [],
			currentRecipe: {}
		}
		//this.createRecipe is reassigned with the result of hard binding 
		//this.createRecipe to 'this' (App).
		//We can now pass this.createRecipe as a prop to other components without
		//it losing context of its this which will always be App
		this.createRecipe = this.createRecipe.bind(this);
	}

	//Life cycle method that will be executed as soon
	//as the component is mounted in the DOM
	async componentDidMount() {
		// Make a get request and store the data object of the 
		// response in a local variable named data
		let {data} = await axios.get('/recipes');
		// Set the application state: 
		// this.state.recipes = data
		// this.state.currentRecipe = data[0]
		this.setState({recipes: data, currentRecipe: data[0]});
	}

	// Method that makes a POST request to '/recipes'
	async createRecipe(name, ingredients, description) {
		//Make a POST request with a data object that has 3 keys.
		//Then store the result of the request in a data variable
		let { data } = await axios.post('/recipes', {name, ingredients, description});
		//Call this.setState in order to change the recipes portion of our state to
		//whatever was returned from the previous http request.
		this.setState({recipes: data});
	}

	render() {
		//Render an instance of the Recipes component and RecipeForm
		return (
			<div>
				{/* The Recipes instance creates a recipes prop to which we assign this.state.recipes */}
				<Recipes recipes={this.state.recipes}/>
				{/* The RecipeForm instance creates a createRecipe prop to which we assign this.createRecipe*/}
				<RecipeForm createRecipe={this.createRecipe}/>
			</div>
		)
	}

}

//export App
export default App