import React from 'react';

class RecipeForm extends React.Component {
	render() {
		return (
			<form onSubmit={(ev) => {
				ev.preventDefault(); 
				this.props.createRecipe(this.name.value, this.ingredients.value, this.description.value)
			}}>
				<label htmlFor="recipe-name-input" value="Name:">Name: </label>
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