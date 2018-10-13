import React from 'react';

class Recipe extends React.Component {
	//This component displays data that was passed to it via props.
	render() {
		return(
			<div className="recipe">
				<p>Name: {this.props.recipe.name}</p>
				<p>Ingredients: {this.props.recipe.ingredients}</p>
				<p>Description: {this.props.recipe.description}</p>
			</div>
		)
	}
}

export default Recipe;