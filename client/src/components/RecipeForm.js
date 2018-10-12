import React from 'react';

class RecipeForm extends React.Component {
	render() {
		return (
			<form>
				<label htmlFor="recipe-name-input" />
				<input type="text" id="recipe-name-input" />
				<label htmlFor="recipe-ingredients-input" />
				<input type="text" id="recipe-ingredients-input" />
				<label htmlFor="recipe-description-input" />
				<input type="text" id="recipe-description-input" />
				<input type="submit" value="Create" />
			</form>
		)
	}
}

export default RecipeForm;