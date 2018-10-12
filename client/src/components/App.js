// Import React as a dependency in order to be able
// to use React
import React from 'react';
// Import axios as an http library
import axios from 'axios';

class App extends React.Component {
	//constructor method that will set up our initial state
	constructor() {
		super();
		this.state = {
			recipes: [],
			currentRecipe: {}
		}
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

	render() {
		return (
			<div>
				<h1>Recipe Name: {this.state.currentRecipe.name}</h1>
				<h1>Recipe Description: {this.state.currentRecipe.description}</h1>
			</div>
		)
	}
}

//export App
export default App