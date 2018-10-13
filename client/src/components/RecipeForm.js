import React from 'react';

class RecipeForm extends React.Component {
	render() {
		return (
			// The onSubmit event handler will first prevent the default behavior of the form tag
			// this prevents the form tag from refreshing the entire page.
			// It then calls this.props.createRecipe passing to it the values stored in each one of the
			// text inputs that make up the form
			<form onSubmit={(ev) => {
				ev.preventDefault(); 
				this.props.createRecipe(this.name.value, this.ingredients.value, this.description.value)
			}}>
				<label htmlFor="recipe-name-input" value="Name:">Name: </label>
				{/* A ref to this input is created. refs are just pointers to an html tag */}
				<input type="text" id="recipe-name-input" ref={(input) => this.name = input}/>
				<label htmlFor="recipe-ingredients-input" value="Ingredients: ">Ingredients: </label>
				<input type="text" id="recipe-ingredients-input" ref={(input) => this.ingredients = input}/>
				<label htmlFor="recipe-description-input" value="Description: ">Description: </label>
				<input type="text" id="recipe-description-input" ref={(input) => this.description = input}/>
				<input type="submit" value="Create" />
			</form>
		)
	}
}

export default RecipeForm;