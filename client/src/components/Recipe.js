import React from 'react';

class Recipe extends React.Component {
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